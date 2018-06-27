import { Breadcrumb, IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import IBreadcrumbHostProps from "./interfaces/IBreadcrumbHostProps";

import "./breadcrumbHostStyle.scss";

export default class BreadcrumbHostComponent extends React.PureComponent<IBreadcrumbHostProps> {
    constructor(props: IBreadcrumbHostProps) {
        super(props);

        this.items = [];
        this.handleOperations(props.locationPath);
    }

    private items: IBreadcrumbItem[];

    public render(): JSX.Element {
        return (
            <div className="cPanel breadcrumbs">
                <Breadcrumb items={this.items} />
            </div >
        );
    }

    public componentWillReceiveProps(nextProps: IBreadcrumbHostProps): void {
        if (this.props.locationPath !== nextProps.locationPath) {
            this.handleOperations(nextProps.locationPath);
        }
    }

    private handleClickForLink = (link: string): void => {
        this.props.history.push({ pathname: link });
    }

    private handleOperations(locationPath: string): void {
        if (locationPath) {
            const pathList: string[] = locationPath.split("/");
            pathList.splice(0, 1);

            const items: IBreadcrumbItem[] = [];

            pathList.map((data: string) => {
                items.push({
                    key: data,
                    text: data.replace(/\b\w/g, (x: string) => x.toUpperCase()),
                    onClick: (): void => this.handleClickForLink("/" + data)
                });
            });

            this.items = items;
        }
    }
}
