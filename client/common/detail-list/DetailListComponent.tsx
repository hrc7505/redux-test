import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn
} from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";

import IDetailsListDocumentsExampleState from "./interfaces/IDetailsListDocumentsExampleState";
import IDocument from "./interfaces/IDocument";

let emptyitems: IDocument[] = [];

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

export default class DetailsListComponent extends React.Component<object, IDetailsListDocumentsExampleState> {
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
                fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
                userName = userName.split(" ").map((name: string) =>
                    name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
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
            emptyitems = this.sortItems(emptyitems, "name");
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
                onColumnClick: this.onColumnClick,
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
                onColumnClick: this.onColumnClick,
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
                onColumnClick: this.onColumnClick,
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
                onColumnClick: this.onColumnClick,
                onRender: (item: IDocument): JSX.Element => <span>{item.fileSize}</span>
            },
        ];


        this.state = {
            columns,
            isCompactMode: false,
            //  isModalSelection: this.selection.isModal(),
            items: emptyitems
        };
    }

    public render(): JSX.Element {
        const { columns, isCompactMode, items } = this.state;

        return (
            <div className="cPanel">
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
        const docType: string = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;

        return {
            docType,
            url: `https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/${docType}_16x1.svg`
        };
    }

    private randomFileSize(): { value: string; rawSize: number; } {
        const fileSize: number = Math.floor(Math.random() * 100) + 30;

        return {
            rawSize: fileSize,
            value: `${fileSize} KB`
        };
    }

    private onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns, items } = this.state;
        let newItems: IDocument[] = items.slice();
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter((currCol: IColumn, idx: number) =>
            column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        newItems = this.sortItems(newItems, currColumn.fieldName, currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems
        });
    }

    private sortItems = (items: IDocument[], sortBy: string, descending: boolean = false): IDocument[] => {
        if (descending) {
            return items.sort((a: IDocument, b: IDocument) => {
                if (a[sortBy] < b[sortBy]) {
                    return 1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return -1;
                }

                return 0;
            });
        } else {
            return items.sort((a: IDocument, b: IDocument) => {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }

                return 0;
            });
        }
    }
}