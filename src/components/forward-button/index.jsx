import React from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { compose } from "redux";
import { styles } from "./styles";
import PropTypes from "prop-types";

const BasicForwardButton = ({ classes, ...rest }) => (
    <IconButton {...rest} className={classes.root}>
        <ArrowForward />
    </IconButton>
);

BasicForwardButton.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const ForwardButton = enhanceComponent(BasicForwardButton);
