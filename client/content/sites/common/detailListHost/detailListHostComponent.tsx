import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";

import IDetailsListDocumentsExampleState from "./interfaces/IDetailsListDocumentsExampleState";
import IDocument from "./interfaces/IDocument";

const emptyitems: IDocument[] = [];

const fileIcons: Array<{ name: string; }> = [
    { name: "accdb" },
    { name: "csv" },
    { name: "docx" },
    { name: "dotx" },
    { name: "mpp" },
    { name: "mpt" },
    { name: "odp" },
    { name: "ods" },
    { name: "odt" },
    { name: "one" },
    { name: "onepkg" },
    { name: "onetoc" },
    { name: "potx" },
    { name: "ppsx" },
    { name: "pptx" },
    { name: "pub" },
    { name: "vsdx" },
    { name: "vssx" },
    { name: "vstx" },
    { name: "xls" },
    { name: "xlsx" },
    { name: "xltx" },
    { name: "xsn" }
];

export default class DetailsListHostComponent extends React.PureComponent<object, IDetailsListDocumentsExampleState> {
    constructor(props: object) {
        super(props);

        //  Populate with items for demos.
        if (emptyitems.length === 0) {
            for (let i: number = 0; i < 10; i++) {
                const randomDate = this.randomDate(new Date(2012, 0, 1), new Date());
                const randomFileSize = this.randomFileSize();
                const randomFileType = this.randomFileIcon();
                let fileName: string = "fileName" + i;
                let userName: string = "userName" + i;
                const zero: number = 0;
                const one: number = 1;
                fileName = fileName
                    .charAt(zero)
                    .toUpperCase() + fileName
                        .slice(one)
                        .concat(`.${randomFileType.docType}`);
                userName = userName.split(" ").map((name: string) =>
                    name
                        .charAt(zero)
                        .toUpperCase() + name.slice(one))
                    .join(" ");
                emptyitems.push({
                    dateModified: randomDate.dateFormatted,
                    dateModifiedValue: randomDate.value,
                    fileSize: randomFileSize.value,
                    fileSizeRaw: randomFileSize.rawSize,
                    iconName: randomFileType.url,
                    modifiedBy: userName,
                    name: fileName,
                    value: fileName
                });
            }
        }

        const columns: IColumn[] = [
            {
                key: "column2",
                name: "Name",
                fieldName: "name",
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                data: "string",
                isPadded: true
            },
            {
                key: "column3",
                name: "Date Modified",
                fieldName: "dateModifiedValue",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                data: "number",
                onRender: (item: IDocument): JSX.Element => <span>{item.dateModified}</span>,
                isPadded: true
            },
            {
                key: "column4",
                name: "Modified By",
                fieldName: "modifiedBy",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsable: true,
                data: "string",
                onRender: (item: IDocument): JSX.Element => <span>{item.modifiedBy}</span>,
                isPadded: true
            },
            {
                key: "column5",
                name: "File Size",
                fieldName: "fileSizeRaw",
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsable: true,
                data: "number",
                onRender: (item: IDocument): JSX.Element => <span>{item.fileSize}</span>
            },
        ];

        this.state = {
            columns,
            isCompactMode: false,
            items: emptyitems
        };
    }

    public render(): JSX.Element {
        const { columns, isCompactMode, items } = this.state;

        return (
            <div className="cPanel" style={{ border: "1px solid" }}>
                <DetailsList
                    items={items}
                    compact={isCompactMode}
                    columns={columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    selectionPreservedOnEmptyClick={true}
                    enterModalSelectionOnTouch={true}
                />
            </div>
        );
    }

    private randomDate(start: Date, end: Date): { value: number; dateFormatted: string; } {
        const date: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const dateData = {
            value: date.valueOf(),
            dateFormatted: date.toLocaleDateString()
        };

        return dateData;
    }

    private randomFileIcon(): { docType: string; url: string; } {
        const defaultIndex: number = 0;
        const docType: string = fileIcons[Math.floor(Math.random() * fileIcons.length) + defaultIndex].name;

        return {
            docType,
            url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
        };
    }

    private randomFileSize(): { value: string; rawSize: number; } {
        const hundred: number = 100;
        const thirty: number = 30;
        const fileSize: number = Math.floor(Math.random() * hundred) + thirty;

        return {
            rawSize: fileSize,
            value: `${fileSize} KB`
        };
    }
}
