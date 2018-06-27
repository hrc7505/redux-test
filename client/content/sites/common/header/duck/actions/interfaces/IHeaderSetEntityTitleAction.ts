import HEADER_SET_ENTITY_TITLE from "../../actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderEntityTitlePayload from "./IHeaderEntityTitlePayload";

export default interface IHeaderSetEntityTitleAction {
    type: HEADER_SET_ENTITY_TITLE;
    payload: IHeaderEntityTitlePayload;
}
