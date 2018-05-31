import GET_CONTENTS from "../action-types/GET_CONTENTS";
import IGetContentsAction from "./models/IGetContentsAction";

export default function getContents(url: string): IGetContentsAction {
    return {
        type: GET_CONTENTS,
        url
    };
}
