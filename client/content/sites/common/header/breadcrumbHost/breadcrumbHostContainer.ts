import * as H from "history";
import { IBreadcrumbItem } from "office-ui-fabric-react/lib/Breadcrumb";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { createSelector, OutputParametricSelector } from "reselect";

import BreadcrumbHostComponent from "content/sites/common/header/breadcrumbHost/breadcrumbHostComponent";
import IBreadcrumbPropsFromState from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbPropsFromState";
import IAppState from "duck/interfaces/IAppState";

type GetBreadcrumbPathFromHeaderState = (state: IAppState) => string;
type GetComponentRouterHistory = (state: IAppState, props: RouteComponentProps<string>) => H.History;
type ResultFunction = (path: string, history: H.History) => IBreadcrumbItem[];

const getBreadcrumbPath: GetBreadcrumbPathFromHeaderState =
    (state: IAppState): string => state.sitesState.headerState.breadcrumbPath;
const getComponentRouterHistory: GetComponentRouterHistory =
    (state: IAppState, props: RouteComponentProps<string>): H.History => props.history;

const computeBreadcrumbItems:
    OutputParametricSelector<IAppState, RouteComponentProps<string>, IBreadcrumbItem[], ResultFunction> =
    createSelector(
        [getBreadcrumbPath, getComponentRouterHistory],
        (path: string, history: H.History): IBreadcrumbItem[] => {
            if (!path) {
                // If no path was found in the state, return an emtpy array so that the breadcrumb renders nothing.
                return [];
            } else {
                // Splitting the path by the slash character to obtain the parts of the path.
                const pathList: string[] = path.split("/");
                // Removing the first result since the path will always start with a slash resulting in an
                // empty string first result.
                pathList.splice(0, 1);

                const items: IBreadcrumbItem[] = [];
                let link: string = "/";

                pathList.map((data: string, i: number) => {
                    // Sequentially build the links for each of the breadcrumb entries to be used
                    // for the onClick property.
                    link += link === "/" ? data : ("/" + data);
                    const newLink: string = link;

                    // TODO: Once we have a way to obtain the names of the entities, we should insert them here
                    //       in the text property of the correct breadcrumb items.
                    items.push({
                        key: data,
                        text: data.replace(/\b\w/g, (x: string) => x.toUpperCase()),
                        onClick: (): void => history.push(newLink),
                    });
                });

                return items;
            }
        }
    );

type MapStateToProps = (state: IAppState, props: RouteComponentProps<string>) => IBreadcrumbPropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: RouteComponentProps<string>): IBreadcrumbPropsFromState => ({
        breadcrumbItems: computeBreadcrumbItems(state, ownProps),
    });

const BreadcrumbHostContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IBreadcrumbPropsFromState>(BreadcrumbHostComponent)
);

export default BreadcrumbHostContainer;
