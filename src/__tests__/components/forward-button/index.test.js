import React from "react";
import { ArrowForward } from "@material-ui/icons";
import { ForwardButton } from "./../../../components/forward-button";
import TestRenderer from "react-test-renderer";

describe("forward button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<ForwardButton />);
    });

    it("renders correctly", () => {
        expect(testInstance).toMatchSnapshot();
        expect(testInstance).toMatchSnapshot();
    });

    it("should be clickable", () => {
        expect(testInstance.root.findByType("button").props.disabled).toBe(false);
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain a arrow forward icon", () => {
        expect(testInstance.root.findByType(ArrowForward)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
