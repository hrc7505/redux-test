import IDocument from "./IDocument";
import { IColumn } from "office-ui-fabric-react/lib/DetailsList";

export default interface IDetailsListDocumentsExampleState {
    columns: IColumn[];
    items: IDocument[];
    isCompactMode: boolean;
}
