import * as React from "react";

import IInfoTileCounter from "./IInfoTileCounter";
import IInfoTileProps from "./interfaces/IInfoTileProps";

import "./infoTileStyle.scss";

export default class InfoTile extends React.PureComponent<IInfoTileProps> {
    public render(): JSX.Element {
        const { infoTileIcon, infoTileTitle, infoTleCounterList } = this.props;
        const counterWidth: string = "calc(100% / " + infoTleCounterList.length + ")";

        return (
            <div className="infoTile pullLeft">
                <div className="tileTitle cPanel">{infoTileTitle}</div>
                <div className="tileIcon cPanel">
                    <img src={infoTileIcon} alt={infoTileIcon} />
                </div>
                <div className="tileCounters cPanel">
                    {
                        infoTleCounterList.map((data: IInfoTileCounter, i: number) => (
                            <div key={i} className="counter pullLeft" style={{ width: counterWidth }}>
                                <div className="counterName cPanel">{data.counterName}</div>
                                <div className="counterValue cPanel">{data.counterValue}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
