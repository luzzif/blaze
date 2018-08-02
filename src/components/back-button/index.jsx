import React from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { compose } from "redux";
import { styles } from "./styles";
import PropTypes from "prop-types";

const BasicBackButton = ({ classes, ...rest }) => (
    <IconButton {...rest} className={classes.root}>
        <ArrowBack />
    </IconButton>
);

BasicBackButton.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const BackButton = enhanceComponent(BasicBackButton);
