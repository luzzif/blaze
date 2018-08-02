import React from "react";
import { ArrowBack } from "@material-ui/icons";
import { BackButton } from "./../../../components/back-button";
import TestRenderer from "react-test-renderer";

describe("back button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<BackButton />);
    });

    it("renders correctly", () => {
        expect(testInstance.toJSON().type).toBe("button");
        expect(testInstance).toMatchSnapshot();
    });

    it("should be clickable", () => {
        expect(testInstance.root.findByType("button").props.disabled).toBe(false);
    });

    it("should contain a arrow back icon", () => {
        expect(testInstance.root.findByType(ArrowBack)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
