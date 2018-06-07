import { RouteComponentProps } from "react-router";

export default interface IContentComponentProps extends RouteComponentProps<string> {
    isLeftMenuVisible: boolean;
}
