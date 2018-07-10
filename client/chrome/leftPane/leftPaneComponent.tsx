import * as React from "react";
import { NavLink } from "react-router-dom";

import ILeftPaneProps from "chrome/leftPane/interfaces/iLeftPaneProps";

import "chrome/leftPane/leftPaneStyle.scss";

export default class LeftPaneComponent extends React.PureComponent<ILeftPaneProps> {
    public render(): JSX.Element {
        return (
            <div className={`hamburgerMenu pullLeft ${!this.props.isLeftPaneVisible ? "hiddeMenu" : ""}`}>
                <div className="cPanel logo flexBox vCenter hCenter">
                    <img src="/client/images/hamburger-menu/ic_logo.svg" />
                </div>
                <div className="menuItemContainer cPanel">
                    {this.leftMenuContent()}
                </div>
            </div>
        );
    }

    private leftMenuContent = (): JSX.Element => (
        <React.Fragment>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="/client/images/hamburger-menu/ic_dashboard.svg" />
                    </div>
                    <div className="menuItemName">Dashboard</div>
                </NavLink>
            </div>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/sites" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="/client/images/hamburger-menu/ic_site.svg" />
                    </div>
                    <div className="menuItemName">Sites</div>
                </NavLink>
            </div>
            <div className="menuItem flexBox vCenter">
                <NavLink exact to="/user-management" className="flexBox vCenter menuItemLink">
                    <div className="menuItemIcon">
                        <img src="/client/images/hamburger-menu/ic_dashboard.svg" />
                    </div>
                    <div className="menuItemName">User Management</div>
                </NavLink>
            </div>
        </React.Fragment>
    )
}
