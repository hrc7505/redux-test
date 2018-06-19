import IJobTileData from "../../../dashboard/interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../../dashboard/interfaces/ISiteDetailsListItemData";

export interface ISiteDetails extends ISiteDetailsListItemData {
    jobList: IJobTileData[];
}

const sites: ISiteDetails[] = [
    {
        id: "909876",
        name: "My house",
        location: "test location1",
        activeJobs: "1",
        totalJobs: "3",
        jobList: [
            {
                title: "foo",
                id: "456",
                site: "my house",
                createDate: "01/01/2000",
                status: "Active"
            },
            {
                title: "bar",
                id: "123",
                site: "my house",
                createDate: "11/19/1999",
                status: "Active"
            },
            {
                title: "baz",
                id: "888",
                site: "my house",
                createDate: "09/01/2018",
                status: "Active"
            }
        ]
    },
    {
        id: "909877",
        name: "My office",
        location: "test location1",
        activeJobs: "2",
        totalJobs: "3",
        jobList: [
            {
                title: "foo2",
                id: "456",
                site: "My office",
                createDate: "01/01/2000",
                status: "Active",
            },
            {
                title: "bar2",
                id: "123",
                site: "My office",
                createDate: "11/19/1999",
                status: "Active"
            },
            {
                title: "baz2",
                id: "888",
                site: "My office",
                createDate: "09/01/2018",
                status: "Active"
            }
        ]
    }
];

export default sites;
