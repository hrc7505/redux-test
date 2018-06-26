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
                // Remove extra items if there are items and the items are more than the entity index
                this.items.splice(-(this.items.length - 1));
            } else {
                const pathList: string[] = this.props.location.pathname.split("/");
                pathList.splice(0, 1); // Remove first splited part "" which will be empty and not needed.

                if (displayTitle && ((pathList.length - 1) === this.items.length)) {
                    // From component on navigation
                    const item: IBreadcrumbItem = {
                        onClick: (): void => this.handleClickForLink(link),
                        key: link,
                        text: displayTitle.replace(/\b\w/g, (x: string) => x.toUpperCase())
                    };

                    this.items.push(item);
                } else {
                    // From url on reload
                    const items: IBreadcrumbItem[] = [];
                    pathList.map((data: string, i: number) => {
                        items.push({
                            onClick: (): void => this.handleClickForLink("/" + data),
                            key: data,
                            text: (pathList.length - 1 === i)
                                ? displayTitle.replace(/\b\w/g, (x: string) => x.toUpperCase())
                                : "..."
                        });
                    });

                    this.items = items;
                }
            }
        }
    }
}
