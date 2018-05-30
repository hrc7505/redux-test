import { Breadcrumb, IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import "./BreadcrumbsComponentStyle.scss";

export default class BreadcrumbaComponent extends React.Component<IBreadcrumbProps> {
    public render(): JSX.Element {
        return (
            <div className="cPanel breadcrumbs">
                <Breadcrumb items={this.props.items} className="hardik" />
            </div >
        );
    }
}
