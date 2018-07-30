import React, { Component, Fragment } from "react";
import { Navigation } from "../navigation";
import { WebView } from "../../components/web-view";

export class App extends Component {
    render() {
        return (
            <Fragment>
                <Navigation />
                <WebView />
            </Fragment>
        );
    }
}
