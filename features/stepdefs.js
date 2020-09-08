const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const TaxesCalculate = require("../src/calculate-taxes");
const ReverseTaxes = require("../src/reverse-taxes");
const reverseCalculator = new ReverseTaxes();
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

Given(
  "a family composed of {int} part and would like to pay {int} of taxes",
  function(parts, taxe) {
    reverseCalculator.setTaxe(taxe).setParts(parts);
  }
);

When("He uses the app", function() {
  this.result = reverseCalculator.calculate(this.taxe, this.parts);
});

Then("Income should be {int}", function(income) {
  assert.equal(this.result, income);
});
