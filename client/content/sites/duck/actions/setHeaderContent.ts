import IHeaderPayload from "./interfaces/IHeaderPayload";
import ISetHeaderDataAction from "./interfaces/ISetHeaderDataAction";
import SET_HEADER_DATA from "../actionTypes/SET_HEADER_DATA";

export default function setHeaderContent(payload: IHeaderPayload): ISetHeaderDataAction {
    return {
        type: SET_HEADER_DATA,
        payload
    };
}
