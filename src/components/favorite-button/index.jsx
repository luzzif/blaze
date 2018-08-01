import React from "react";
import { IconButton, withStyles } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { compose } from "redux";
import { styles } from "./styles";
import PropTypes from "prop-types";

const BasicFavoriteButton = ({ classes, ...rest }) => (
    <IconButton {...rest} className={classes.root}>
        <Favorite />
    </IconButton>
);

BasicFavoriteButton.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const FavoriteButton = enhanceComponent(BasicFavoriteButton);
