import IHeaderSetEntityTitlePayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";
import HEADER_SET_ENTITY_TITLE from "content/sites/common/header/duck/actionTypes/HEADER_SET_ENTITY_TITLE";

export default interface IHeaderSetEntityTitleAction {
    type: HEADER_SET_ENTITY_TITLE;
    payload: IHeaderSetEntityTitlePayload;
}
