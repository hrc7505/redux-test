import { Breadcrumb, IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import Entity from "./entity";
import IBreadcrumbHostProps from "./interfaces/IBreadcrumbHostProps";

import "./breadcrumbHostStyle.scss";

export default class BreadcrumbHostComponent extends React.PureComponent<IBreadcrumbHostProps> {
    constructor(props: IBreadcrumbHostProps) {
        super(props);

        this.items = [];
        this.handleOperations(props.displayTitle, props.link, props.entity);
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
        if (nextProps.link && this.props.link !== nextProps.link) {
            this.handleOperations(nextProps.displayTitle, nextProps.link, nextProps.entity);
        }
    }

    private handleClickForLink = (link: string): void => {
        this.props.history.push({ pathname: link });
    }

    private handleOperations(displayTitle: string, link: string, entityAsIndex: Entity): void {
        if (link) {
            if (this.items.length !== 0 && this.items.length > entityAsIndex) {
                this.items.splice(-(this.items.length - 1));

            } else {
                this.items.push({
                    text: displayTitle
                        ? displayTitle.replace(/\b\w/g, (x: string) => x.toUpperCase())
                        : "...",
                    onClick: (): void => this.handleClickForLink(link),
                    key: link
                });
            }
        }
    }
}
