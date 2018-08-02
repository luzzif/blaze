import React from "react";
import { WebView } from "./../../../components/web-view";
import TestRenderer from "react-test-renderer";

describe("web view", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<WebView />);
    });

    it("should be rendered", () => {
        expect(testInstance.toJSON().type).toBe("webview");
        expect(testInstance).toMatchSnapshot();
    });
});
