import React from "react";
import { Favorite } from "@material-ui/icons";
import { FavoriteButton } from "../../../components/favorite-button";
import TestRenderer from "react-test-renderer";

describe("favorite button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<FavoriteButton />);
    });

    it("renders correctly", () => {
        expect(testInstance.toJSON().type).toBe("button");
        expect(testInstance).toMatchSnapshot();
    });

    it("should be clickable", () => {
        expect(testInstance.root.findByType("button").props.disabled).toBe(false);
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain a favorite icon", () => {
        expect(testInstance.root.findByType(Favorite)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
