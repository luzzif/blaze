import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, withStyles, Grid } from "@material-ui/core";
import { styles } from "./styles";
import { compose } from "redux";
import { ForwardButton } from "../../components/forward-button";
import { BackButton } from "../../components/back-button";
import { SearchBar } from "../../components/search-bar";
import { SettingsButton } from "../../components/settings-button";
import { RefreshButton } from "../../components/refresh-button";

class BasicNavigation extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {
        const { classes } = this.props;

        return (
            <Card classes={{ root: classes.root }} square elevation={4}>
                <CardContent classes={{ root: classes.navigationBarContent }}>
                    <BackButton />
                    <ForwardButton />
                    <RefreshButton />
                    <SearchBar />
                    <SettingsButton />
                </CardContent>
            </Card>
        );
    }
}

const enhanceComponent = compose(withStyles(styles));

export const Navigation = enhanceComponent(BasicNavigation);
