import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import App from "../../src/App.js";
import { Calculate } from "../../src/CalculateTaxes";
const assert = require("assert");
const { Given, When, Then } = require("cucumber");

let Income;
let Parts;

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });

Given("the DOM", function() {
  const { JSDOM } = require("jsdom");
  const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
  const { window } = jsdom;
  global.window = window;
  global.document = window.document;
});

When("I shallow render a React component called: App", function() {
  this.wrapper = shallow(<App />);
});

Then("my app should contain the words: Learn React", function() {
  assert(this.wrapper.contains("Learn React"));
});

// Scenario Taxes
Given(
  "a family composed of {float} part(s) and has an income of {int}",
  function(parts, income) {
    Income = income;
    Parts = parts;
  }
);

When("he uses the app", function() {
  this.result = Calculate(Income, Parts);
});

Then("taxes should be {int}", function(taxes) {
  assert.equal(this.result, taxes);
});
