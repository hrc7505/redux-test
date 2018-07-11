import IHeaderSetEntityTitleAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderSetEntityTitlePayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";
import HEADER_SET_ENTITY_TITLE from "content/sites/common/header/duck/actionTypes/HEADER_SET_ENTITY_TITLE";

type HeaderSetEntityTitle = (payload: IHeaderSetEntityTitlePayload) => IHeaderSetEntityTitleAction;
const headerSetEntityTitle: HeaderSetEntityTitle =
    (payload: IHeaderSetEntityTitlePayload): IHeaderSetEntityTitleAction => ({
        type: HEADER_SET_ENTITY_TITLE,
        payload
    });

export default headerSetEntityTitle;
