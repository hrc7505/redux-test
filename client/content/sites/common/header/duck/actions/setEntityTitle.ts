import IEnityTitlePayload from "./interfaces/IEntityTitlePayload";
import ISetEntityTitleAction from "./interfaces/ISetEntityTitleAction";
import SET_ENTITY_TITLE from "../actionTypes/SET_ENTITY_TITLE";

export default function setEntityTitle(payload: IEnityTitlePayload): ISetEntityTitleAction {
    return {
        type: SET_ENTITY_TITLE,
        payload
    };
}
