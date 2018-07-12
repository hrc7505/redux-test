import { RouteComponentProps } from "react-router";

import IHeaderProps from "content/sites/common/header/interfaces/IHeaderProps";

export default interface ICommandBarHostPropsFromParent
    extends IHeaderProps, RouteComponentProps<string> { }
