import IJobSummaryTileProps from "../../../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";
import { Link } from "react-router-dom";

export interface ISiteDetails {
    id: string;
    siteName: string;
    isActive: boolean;
    jobList: IJobSummaryTileProps[];
}

const sites: ISiteDetails[] = [
    {
        id: "909876",
        siteName: "My house",
        isActive: false,
        jobList: [
            {
                jobTitle: "foo",
                jobId: "456",
                jobSite: "my house",
                jobCreatedDate: "01/01/2000",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            },
            {
                jobTitle: "bar",
                jobId: "123",
                jobSite: "my house",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            },
            {
                jobTitle: "baz",
                jobId: "888",
                jobSite: "my house",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            }
        ]
    },
    {
        id: "909877",
        siteName: "My office",
        isActive: true,
        jobList: [
            {
                jobTitle: "foo2",
                jobId: "456",
                jobSite: "My office",
                jobCreatedDate: "01/01/2000",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            },
            {
                jobTitle: "bar2",
                jobId: "123",
                jobSite: "My office",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            },
            {
                jobTitle: "baz2",
                jobId: "888",
                jobSite: "My office",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: null,
                isSelected: false
            }
        ]
    }
];

export default sites;

export const columns: IColumn[] = [
    {
        key: "siteName",
        name: "Site Name",
        fieldName: "site name",
        minWidth: 70,
        maxWidth: 100,
        data: "string",
        isResizable: true,
        isPadded: true,
        onRender: (item: ISiteDetails): JSX.Element => <Link to={`/sites/${item.id}`}>{item.siteName}</Link>,
    },
    {
        key: "isSiteActive",
        name: "Is Active",
        fieldName: "is active",
        minWidth: 70,
        maxWidth: 100,
        data: "boolean",
        isResizable: true,
        isPadded: true,
        onRender: (item: ISiteDetails): JSX.Element => <span>{item.isActive.toString()}</span>,
    }
];
