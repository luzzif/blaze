import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, withStyles, Grid } from "@material-ui/core";
import { compose } from "redux";
import { styles } from "./styles";
import { FavoriteButton } from "../favorite-button";

const BasicSearchBar = ({ classes, fullWidth, ...rest }) => (
    <Card
        {...rest}
        style={{ width: fullWidth ? "100%" : "auto" }}
        classes={{ root: classes.root }}
    >
        <CardContent classes={{ root: classes.content }}>
            <Grid container alignItems="center">
                <Grid item md={11}>
                    <input className={classes.input} type="text" />
                </Grid>
                <Grid item md={1}>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <FavoriteButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

BasicSearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
    fullWidth: PropTypes.bool
};

const enhanceComponent = compose(withStyles(styles));

export const SearchBar = enhanceComponent(BasicSearchBar);
