import * as React from "react";
import { NavLink } from "react-router-dom";

import ILeftPaneProps from "./interfaces/iLeftPaneProps";

import "./leftPaneStyle.scss";

export default class LeftPaneComponent extends React.Component<ILeftPaneProps> {
    private standAloneTestContent: JSX.Element =
        <div>This is a standalone rendering of the chrome.</div>;

    public render(): JSX.Element {
        return (
            <div className={`hamburgerMenu pullLeft ${!this.props.isLeftPaneVisible ? "hiddeMenu" : ""}`}>
                <div className="cPanel logo flexBox vCenter hCenter">logo</div>
                <div className="menuItemContainer cPanel">
                    {this.props.isStandAlone ? this.standAloneTestContent : this.leftMenuContent()}
                </div>
            </div>
        );
    }

    private leftMenuContent = (): JSX.Element => (
        <React.Fragment>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="./client/images/hamburger-menu/dashboard.png" />
                    </div>
                    <div className="menuItemName">DashBoard</div>
                </NavLink>
            </div>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/sites" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="./client/images/hamburger-menu/dashboard.png" />
                    </div>
                    <div className="menuItemName">Sites</div>
                </NavLink>
            </div>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/user-management" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="./client/images/hamburger-menu/dashboard.png" />
                    </div>
                    <div className="menuItemName">User Management</div>
                </NavLink>
            </div>
        </React.Fragment>
    )
}
