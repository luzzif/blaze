import React from "react";
import App from ".";
import { mount } from "enzyme";

describe("app", () => {
    it("renders without crashing", () => {
        mount(<App />);
    });
});
