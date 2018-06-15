import IHeaderPayload from "./IHeaderPayload";
import SET_HEADER_DATA from "../../actionTypes/SET_HEADER_DATA";

export default interface ISetHeaderDataAction {
    type: SET_HEADER_DATA;
    payload: IHeaderPayload;
}