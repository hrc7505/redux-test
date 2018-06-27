import HEADER_SET_ENTITY_TITLE from "../actionTypes/HEADER_SET_ENTITY_TITLE";
import IEnityTitlePayload from "./interfaces/IEntityTitlePayload";
import ISetEntityTitleAction from "./interfaces/ISetEntityTitleAction";

export default function setEntityTitle(payload: IEnityTitlePayload): ISetEntityTitleAction {
    return {
        type: HEADER_SET_ENTITY_TITLE,
        payload
    };
}
