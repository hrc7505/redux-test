import { IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { ISiteDetails } from "../testData";

export default interface IDetailsListProps {
    columns: IColumn[];
    items: ISiteDetails[];
    isCompactMode: boolean;
}
