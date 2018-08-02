import React from "react";
import { App } from "./../../views/app";
import TestRenderer from "react-test-renderer";

describe("app", () => {
    let testInstance = null;

    beforeAll(() => {
        testInstance = TestRenderer.create(<App />);
    });

    it("renders without crashing", () => {
        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root).not.toBeNull();
    });
});
