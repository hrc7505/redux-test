import HEADER_SET_ENTITY_TITLE from "content/sites/common/header/duck/actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderSetEntityTitleAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderSetEntityTitlePayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";

export default function headerSetEntityTitle(payload: IHeaderSetEntityTitlePayload): IHeaderSetEntityTitleAction {
    return {
        type: HEADER_SET_ENTITY_TITLE,
        payload
    };
}
