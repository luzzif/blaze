import React from "react";
import { mount } from "enzyme";
import { BackButton } from ".";

describe("back button", () => {
    let mountedComponentRoot = null;

    beforeEach(() => {
        mountedComponentRoot = mount(<BackButton />).find("div")[0];
    });

    it("always render a div", () => {
        expect(mountedComponentRoot).toBeTruthy();
    });

    it("should be a clickable button", () => {
        expect(mountedComponentRoot.find("button")).toBeTruthy();
    });
});
