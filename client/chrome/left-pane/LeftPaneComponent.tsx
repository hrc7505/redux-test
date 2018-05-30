import * as React from "react";

import IToggleMenu from "../top-bar/models/IToggleMenu";

import "./leftPaneComponentStyle.scss";

export default class LeftPaneComponent extends React.Component<IToggleMenu> {
    public render(): JSX.Element {
        const { isLeftMenuVisible } = this.props;

        return (
            <div className={`hamburgerMenu pullLeft ${!isLeftMenuVisible ? "hiddeMenu" : ""}`}>
                <div className="cPanel logo flexBox vCenter hCenter">logo</div>
                <div className="menuItemContainer cPanel">
                    <div className="menuItem flexBox vCenter">
                        <div className="menuItemIcon">
                            <img src="./client/images/hamburger-menu/dashboard.png" />
                        </div>
                        <div className="menuItemName">DashBoard</div>
                    </div>
                    <div className="menuItem flexBox vCenter">
                        <div className="menuItemIcon">
                            <img src="./client/images/hamburger-menu/dashboard.png" />
                        </div>
                        <div className="menuItemName">Sites</div>
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
