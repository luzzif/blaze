import React from "react";
import { BackButton } from ".";
import TestRenderer from "react-test-renderer";

// TODO: move in dedicated integration tests directory
describe("back button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<BackButton />);
    });

    it("should be clickable", () => {
        testInstance.root.findByType("button").props.onKeyDown({});
    });
});
