import React from "react";
import PropTypes from "prop-types";
import { IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { compose } from "redux";
import { styles } from "./styles";

const BasicSettingsButton = ({ classes, ...rest }) => (
    <IconButton {...rest} classes={{ root: classes.root }}>
        <Menu />
    </IconButton>
);

BasicSettingsButton.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const SettingsButton = enhanceComponent(BasicSettingsButton);
