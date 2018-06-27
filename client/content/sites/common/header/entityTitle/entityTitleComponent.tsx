import * as React from "react";

import IEntityTitleProps from "./interfaces/IEntityTitleProps";

import "./entityTileStyle.scss";

const EntityTitleComponent: React.SFC<IEntityTitleProps> = (props: IEntityTitleProps): JSX.Element => (
    <div className="cPanel entityTitle" >
        {props.title}
    </div>
);

export default EntityTitleComponent;
