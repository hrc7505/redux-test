import HEADER_SET_ENTITY_TITLE from "../../actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderSetEntityTitlePayload from "./IHeaderSetEntityTitlePayload";

export default interface IHeaderSetEntityTitleAction {
    type: HEADER_SET_ENTITY_TITLE;
    payload: IHeaderSetEntityTitlePayload;
}
