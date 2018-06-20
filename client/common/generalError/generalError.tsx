import * as React from "react";

class GeneralError extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div>
                <div> This is a general error component which we should use and render if something
                    goes wrong when we are attempting to render something. </div>
            </div>
        );
    }
}

export default GeneralError;
