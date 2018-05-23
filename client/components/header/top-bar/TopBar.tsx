import * as React from "react";

import { IToggleMenu } from "./State";

import "./topBarStyle.scss";

export interface ITopBarProps extends IToggleMenu {
    toggleMenu: (toggle: IToggleMenu) => void;
}

export default class TopBar extends React.Component<ITopBarProps> {
    public render(): JSX.Element {
        return (
            <div className="topBar pullLeft">
                <div onClick={(): void => this.toggleHamburgerMenu()} className="hamburgerMenuIcon">
                    icon
                </div>
            </div>
        );
    }

    private toggleHamburgerMenu(): void {
        this.props.toggleMenu({ isShowMenu: this.props.isShowMenu });
    }
}
