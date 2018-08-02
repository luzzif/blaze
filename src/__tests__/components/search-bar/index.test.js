import React from "react";
import { SearchBar } from "./../../../components/search-bar";
import TestRenderer from "react-test-renderer";
import { FavoriteButton } from "../../../components/favorite-button";

describe("search bar", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<SearchBar />);
    });

    it("should be rendered", () => {
        expect(testInstance.toJSON().type).toBe("div");
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain an input of type text", () => {
        const inputElement = testInstance.root.findByType("input");
        expect(inputElement).toBeTruthy();
        expect(inputElement.props.type).toBe("text");
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain a favorite button", () => {
        expect(testInstance.root.findByType(FavoriteButton)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
