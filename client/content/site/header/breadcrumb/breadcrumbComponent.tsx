import { Breadcrumb, IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";
import { withRouter } from "react-router";

import IBreadcrumbComponentProps from "./interfaces/IBreadcrumbComponentProps";

import "./BreadcrumbComponentStyle.scss";

class BreadcrumbComponent extends React.Component<IBreadcrumbComponentProps> {
    public render(): JSX.Element {
        const { items } = this.props;

        if (!items || !items.length) {
            return null;
        }

        this.addClickHandlerToItems();

        return (
            <div className="cPanel breadcrumbs">
                <Breadcrumb items={items} />
            </div >
        );
    }

    private addClickHandlerToItems(): void {
        this.props.items.map((data: IBreadcrumbItem) => (
            data.onClick = this.redirectToBreadcrumbLink
        ));
    }

    private redirectToBreadcrumbLink = (ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem): void => {
        this.props.history.push({ pathname: this.getUrl(item.key) });
    }

    private getUrl(itemKey: string): string {
        switch (itemKey) {
            case "sites":
                return "/sites";

            default:
                return "/";
        }
    }
}

export default withRouter(BreadcrumbComponent);
