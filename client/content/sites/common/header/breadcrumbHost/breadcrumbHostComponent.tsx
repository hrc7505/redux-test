import { Breadcrumb } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import IBreadcrumbHostProps from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbHostProps";

import "content/sites/common/header/breadcrumbHost/breadcrumbHostStyle.scss";

export default class BreadcrumbHostComponent extends React.PureComponent<IBreadcrumbHostProps> {
    public render(): JSX.Element {
        return (
            <div className="cPanel breadcrumbs">
                <Breadcrumb items={this.props.breadcrumbItems} />
            </div >
        );
    }
}
