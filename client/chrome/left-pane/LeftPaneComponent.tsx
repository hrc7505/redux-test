import * as React from "react";

import ILeftPaneProps from "./models/ILeftPaneProps";

import "./leftPaneComponentStyle.scss";
import { NavLink } from "react-router-dom";

export default class LeftPaneComponent extends React.Component<ILeftPaneProps> {
    public render(): JSX.Element {
        const { isLeftMenuVisible } = this.props;

        return (
            <div className={`hamburgerMenu pullLeft ${!isLeftMenuVisible ? "hiddeMenu" : ""}`}>
                <div className="cPanel logo flexBox vCenter hCenter">logo</div>
                <div className="menuItemContainer cPanel">
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
                </div>
            </div>
        );
    }
}
