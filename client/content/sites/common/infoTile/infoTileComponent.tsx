import * as React from "react";

import IInfoTileDetails from "content/sites/common/infoTile/interfaces/IInfoTileDetails";
import IInfoTileProps from "content/sites/common/infoTile/interfaces/IInfoTileProps";

import "content/sites/common/infoTile/infoTileStyle.scss";

export default class InfoTileComponent extends React.PureComponent<IInfoTileProps> {
    public render(): JSX.Element {
        const { infoTileIcon, infoTileTitle, infoTileDetailsList } = this.props;
        const infoTileDetailsWidtth: string = "calc(100% / " + infoTileDetailsList.length + ")";

        return (
            <div className="infoTile pullLeft">
                <div className="tileTitle cPanel">{infoTileTitle}</div>
                <div className="tileIcon cPanel">
                    <img src={infoTileIcon} alt={infoTileIcon} />
                </div>
                <div className="tileDetailsContainer cPanel">
                    {
                        infoTileDetailsList.map((data: IInfoTileDetails, i: number) => (
                            <div key={i} className="tileDetails pullLeft" style={{ width: infoTileDetailsWidtth }}>
                                <div className="field cPanel">{data.field}</div>
                                <div className="value cPanel">{data.value}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
