import React from "react";
import { Refresh } from "@material-ui/icons";
import { RefreshButton } from "../../../components/refresh-button";
import TestRenderer from "react-test-renderer";

describe("favorite button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<RefreshButton />);
    });

    it("renders correctly", () => {
        expect(testInstance.toJSON().type).toBe("button");
        expect(testInstance).toMatchSnapshot();
    });

    it("should be clickable", () => {
        expect(testInstance.root.findByType("button").props.disabled).toBe(false);
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain a refresh icon", () => {
        expect(testInstance.root.findByType(Refresh)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
