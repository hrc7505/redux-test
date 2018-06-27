import HEADER_SET_ENTITY_TITLE from "../../actionTypes/HEADER_SET_ENTITY_TITLE";
import IEnityTitlePayload from "./IEntityTitlePayload";

export default interface ISetEntityTitleAction {
    type: HEADER_SET_ENTITY_TITLE;
    payload: IEnityTitlePayload;
}
