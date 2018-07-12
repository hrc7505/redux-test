import { RouteComponentProps } from "react-router";

import IHeaderPropsFromDispatch from "content/sites/common/header/interfaces/IHeaderPropsFromDispatch";

export default interface IHeaderProps
    extends IHeaderPropsFromDispatch, RouteComponentProps<string> { }
