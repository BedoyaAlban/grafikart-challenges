module.exports = class TaxesCalculate {
  constructor() {
    this.bearing = [
      {
        max: 10064,
        perc: 0
      },
      {
        max: 25659,
        perc: 11
      },
      {
        max: 73369,
        perc: 30
      },
      {
        max: 157806,
        perc: 41
      },
      {
        max: Infinity,
        perc: 45
      }
    ];
    this.income = 0;
    this.parts = 1;
  }

  setIncome(income) {
    this.income = income;
    return this;
  }

  setParts(parts) {
    this.parts = parts;
    return this;
  }

  calculate() {
    const incomePart = this.income / this.parts;
    return Math.round(
      this.TaxesBySlice(incomePart).reduce((acc, slice) => acc + slice, 0) *
        this.parts
    );
  }

  TaxesBySlice(incomePart) {
    let counted = 0;
    let i = 0;
    const slices = [];
    while (counted < incomePart) {
      const { max: limit, perc } = this.bearing[i];
      let taxe;
      let isFirstSlice = i === 0;
      if (!isFirstSlice) {
        if (incomePart <= limit) {
          taxe = ((incomePart - this.bearing[i - 1].max - 1) * perc) / 100;
        } else {
          taxe = ((limit - this.bearing[i - 1].max - 1) * perc) / 100;
        }
      } else {
        taxe = (limit * perc) / 100;
      }
      counted = limit;
      slices.push(taxe);
      i++;
    }
    return slices;
  }
};
