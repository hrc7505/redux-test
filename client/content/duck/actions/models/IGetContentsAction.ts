import GET_CONTENTS from "../../action-types/GET_CONTENTS";

export default interface IGetContentsAction {
    type: GET_CONTENTS;
    url: string;
}
