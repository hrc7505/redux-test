import { RouteComponentProps } from "react-router";

export default interface IContentComponentProps extends RouteComponentProps<string> {
    isLeftMenuVisible: boolean;
    getContents: (url: string) => void;
    closeRightPane: () => void;
}
