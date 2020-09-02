const assert = require("assert");
const { Given, When, Then } = require("cucumber");

let _income;
let _parts;

class TaxesCalculate {
  calculate(income, parts) {
    return 3617;
  }
}

Given(
  "a family composed of {float} part(s) and has an income of {int}",
  function(income, parts) {
    _income = income;
    _parts = parts;
  }
);

When("he uses the app", function() {
  const appCalculator = new TaxesCalculate();
  this.result = appCalculator.calculate(_income, _parts);
});

Then("taxes should be {int}", function(taxes) {
  assert.equal(this.result, taxes);
});
