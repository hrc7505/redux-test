import IEnityTitlePayload from "./IEntityTitlePayload";
import SET_ENTITY_TITLE from "../../actionTypes/SET_ENTITY_TITLE";

export default interface ISetEntityTitleAction {
    type: SET_ENTITY_TITLE;
    payload: IEnityTitlePayload;
}
