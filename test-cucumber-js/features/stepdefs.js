const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const TaxesCalculate = require("../src/calculate-taxes");

const appCalculator = new TaxesCalculate();

Given(
  "a family composed of {float} part(s) and has an income of {int}",
  function(parts, income) {
    appCalculator.setIncome(income).setParts(parts);
  }
);

When("he uses the app", function() {
  this.result = appCalculator.calculate(this.income, this.parts);
});

Then("taxes should be {int}", function(taxes) {
  assert.equal(this.result, taxes);
});
