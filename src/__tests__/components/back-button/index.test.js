import React from "react";
import { BackButton } from "./../../../components/back-button";
import TestRenderer from "react-test-renderer";

describe("back button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<BackButton />);
    });

    it("should be clickable", () => {
        testInstance.root.findByType("button").props.onKeyDown({});
        expect(testInstance).toMatchSnapshot();
    });
});
