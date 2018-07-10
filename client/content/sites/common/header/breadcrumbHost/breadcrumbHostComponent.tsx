import { Breadcrumb, IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import IBreadcrumbHostProps from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbHostProps";

import "content/sites/common/header/breadcrumbHost/breadcrumbHostStyle.scss";

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

    // TODO: Remove componentWillReceiveProps as it is deprecated and should not be used.
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
            let link: string = "/";

            pathList.map((data: string, i: number) => {
                link += link === "/" ? data : ("/" + data);
                const newLink: string = link;

                items.push({
                    key: data,
                    text: data.replace(/\b\w/g, (x: string) => x.toUpperCase()),
                    onClick: (): void => this.handleClickForLink(newLink)
                });
            });

            this.items = items;
        }
    }
}
