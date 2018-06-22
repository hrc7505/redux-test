import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";
import { Link } from "react-router-dom";

import ISiteDetailsListItemData from "./ISiteDetailsListItemData";

const siteDetailsListColumns: IColumn[] = [
    {
        key: "siteName",
        name: "Name",
        fieldName: "name",
        minWidth: 70,
        maxWidth: 100,
        isResizable: true,
        isPadded: true,
        onRender: (item: ISiteDetailsListItemData): JSX.Element => <Link to={`/sites/${item.id}`}>{item.name}</Link>
    },
    {
        key: "location",
        name: "Location",
        fieldName: "location",
        minWidth: 140,
        maxWidth: 300,
        isResizable: true,
        isPadded: true,
    },
    {
        key: "activeJobs",
        name: "Active Jobs",
        fieldName: "activeJobs",
        minWidth: 35,
        maxWidth: 35,
        isResizable: true,
        isPadded: true,
    },
    {
        key: "totalJobs",
        name: "Total Jobs",
        fieldName: "totalJobs",
        minWidth: 35,
        maxWidth: 35,
        isResizable: true,
        isPadded: true,
    }
];

export default siteDetailsListColumns;
