import HEADER_SET_ENTITY_TITLE from "../actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderEntityTitlePayload from "./interfaces/IHeaderEntityTitlePayload";
import IHeaderSetEntityTitleAction from "./interfaces/IHeaderSetEntityTitleAction";

export default function headerSetEntityTitle(payload: IHeaderEntityTitlePayload): IHeaderSetEntityTitleAction {
    return {
        type: HEADER_SET_ENTITY_TITLE,
        payload
    };
}
