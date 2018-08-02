import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import { compose } from "redux";

const BasicWebView = ({ classes, ...rest }) => (
    <webview className={classes.root} src="http://www.github.com" />
);

BasicWebView.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const WebView = enhanceComponent(BasicWebView);
