import * as React from "react";

import IEntityTitleProps from "content/sites/common/header/entityTitle/interfaces/IEntityTitleProps";

import "content/sites/common/header/entityTitle/entityTitleStyle.scss";

const EntityTitleComponent: React.SFC<IEntityTitleProps> = (props: IEntityTitleProps): JSX.Element => (
    <div className="cPanel entityTitle" >
        {props.title}
    </div>
);

export default EntityTitleComponent;
