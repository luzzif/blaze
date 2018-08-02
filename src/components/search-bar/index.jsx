import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, withStyles, Grid } from "@material-ui/core";
import { compose } from "redux";
import { styles } from "./styles";
import { FavoriteButton } from "../favorite-button";

const BasicSearchBar = ({ classes, ...rest }) => (
    <Card {...rest} classes={{ root: classes.root }}>
        <CardContent classes={{ root: classes.content }}>
            <div className={classes.container}>
                <input className={classes.input} type="text" />
                <FavoriteButton />
            </div>
        </CardContent>
    </Card>
);

BasicSearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

const enhanceComponent = compose(withStyles(styles));

export const SearchBar = enhanceComponent(BasicSearchBar);
