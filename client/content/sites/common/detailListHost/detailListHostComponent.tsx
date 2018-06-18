import {
    DetailsList,
    DetailsListLayoutMode,
} from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";

import IDetailsListProps from "./interfaces/IDetailsListHostProps";

export default class DetailsListHostComponent extends React.PureComponent<IDetailsListProps> {
    public render(): JSX.Element {
        const { columns, isCompactMode, items } = this.props;

        return (
            <div className="cPanel" style={{ border: "1px solid" }}>
                <DetailsList
                    items={items}
                    compact={isCompactMode}
                    columns={columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    selectionPreservedOnEmptyClick={true}
                    enterModalSelectionOnTouch={true}
                />
            </div>
        );
    }
}
