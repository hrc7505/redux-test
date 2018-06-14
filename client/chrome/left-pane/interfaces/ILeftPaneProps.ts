import { RouteComponentProps } from "react-router";

export default interface ILeftPaneProps extends RouteComponentProps<string> {
    isLeftPaneVisible: boolean;
}
