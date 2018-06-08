import * as React from "react";
import { NavLink } from "react-router-dom";

import ILeftPaneProps from "./interfaces/iLeftPaneProps";

import "./leftPaneComponentStyle.scss";

export default class LeftPaneComponent extends React.Component<ILeftPaneProps> {
    public render(): JSX.Element {
        return (
            <div className={`hamburgerMenu pullLeft ${!this.props.isLeftPaneVisible ? "hiddeMenu" : ""}`}>
                <div className="cPanel logo flexBox vCenter hCenter">logo</div>
                <div className="menuItemContainer cPanel">
                    { this.props.isStandAlone ? this.standAloneTestContent : this.leftMenuContent() }
                </div>
            </div>
        );
    }

    standAloneTestContent: JSX.Element =
        <div>This is a standalone rendering of the chrome.</div>;

    leftMenuContent = () => {
        return (
            <React.Fragment>
                <div className="menuItem">
                    <NavLink to="/" className="flexBox vCenter">
                        <div className="menuItemIcon">
                            <img src="./client/images/hamburger-menu/dashboard.png" />
                        </div>
                        <div className="menuItemName">DashBoard</div>
                    </NavLink>
                </div>
                <div className="menuItem">
                    <NavLink to="/sites" className="flexBox vCenter">
                        <div className="menuItemIcon">
                            <img src="./client/images/hamburger-menu/dashboard.png" />
                        </div>
                        <div className="menuItemName">Sites</div>
                    </NavLink>
                </div>
                <div className="menuItem flexBox vCenter">
                    <div className="menuItemIcon">
                        <img src="./client/images/hamburger-menu/dashboard.png" />
                    </div>
                    <div className="menuItemName">User Management</div>
                </div>
            </React.Fragment>
        )
    };
}
