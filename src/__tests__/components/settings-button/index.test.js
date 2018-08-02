import React from "react";
import { SettingsButton } from "./../../../components/settings-button";
import TestRenderer from "react-test-renderer";
import { Menu } from "@material-ui/icons";

describe("settings button", () => {
    let testInstance = null;

    beforeEach(() => {
        testInstance = TestRenderer.create(<SettingsButton />);
    });

    it("should be rendered", () => {
        expect(testInstance.toJSON().type).toBe("button");
        expect(testInstance).toMatchSnapshot();
    });

    it("should be clickable", () => {
        testInstance.root.findByType("button").props.onKeyDown({});
        expect(testInstance).toMatchSnapshot();
    });

    it("should contain a menu icon", () => {
        expect(testInstance.root.findByType(Menu)).toBeTruthy();
        expect(testInstance).toMatchSnapshot();
    });
});
