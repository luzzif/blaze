import React from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import { compose } from "redux";
import { styles } from "./styles";
import PropTypes from "prop-types";

const BasicRefreshButton = ({ classes, ...rest }) => (
    <IconButton {...rest} className={classes.root}>
        <Refresh />
    </IconButton>
);

BasicRefreshButton.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const RefreshButton = enhanceComponent(BasicRefreshButton);
