import HEADER_SET_ENTITY_TITLE from "../actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderSetEntityTitleAction from "./interfaces/IHeaderSetEntityTitleAction";
import IHeaderSetEntityTitlePayload from "./interfaces/IHeaderSetEntityTitlePayload";

export default function headerSetEntityTitle(payload: IHeaderSetEntityTitlePayload): IHeaderSetEntityTitleAction {
    return {
        type: HEADER_SET_ENTITY_TITLE,
        payload
    };
}
