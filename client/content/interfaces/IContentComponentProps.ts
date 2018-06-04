import { RouteComponentProps } from "react-router";

export default interface IContentComponentProps extends RouteComponentProps<string> {
    isLeftMenuVisible: boolean;
    isRightPaneVisible: boolean;
    getContents: (url: string) => void;
}
