import * as React from "react";

import "./hamburgerMenuStyle.scss";

export default class HamburgerMenu extends React.Component{
    public render(): JSX.Element {
        return (
            <div className="hamburgerMenu pullLeft">
                <div className="cPanel logo flexBox vCenter hCenter">logo</div>
                <div className="menuItemContainer cPanel">
                    <div className="menuItem flexBox vCenter">
                        <div className="menuItemIcon">ic</div>
                        <div className="menuItemName">DashBoard</div>
                    </div>
                    <div className="menuItem flexBox vCenter">
                        <div className="menuItemIcon">ic</div>
                        <div className="menuItemName">DashBoard</div>
                    </div>
                    <div className="menuItem flexBox vCenter">
                        <div className="menuItemIcon">ic</div>
                        <div className="menuItemName">DashBoard</div>
                    </div>
                </div>
            </div>
        );
    }
}
