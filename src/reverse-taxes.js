module.exports = class ReverseTaxes {
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
    this.taxe = 0;
    this.parts = 1;
  }
  setTaxe(taxe) {
    this.taxe = taxe;
    return this;
  }

  setParts(parts) {
    this.parts = parts;
    return this;
  }

  calculate() {
    const taxesPart = this.taxe * this.parts;
    return Math.round(
      this.IncomeBySlice(taxesPart).reduce((acc, slice) => acc + slice, 0) /
        this.parts
    );
  }

  IncomeBySlice(taxesPart) {
    let i = 0;
    let counted = 0;
    const slices = [];
    while (counted < taxesPart) {
      const { max: limit, perc } = this.bearing[i];
      let income;
      let isFirstSlice = i === 0;
      if (!isFirstSlice) {
        if (taxesPart <= counted) {
          income = (taxesPart * 100) / perc + this.bearing[i - 1].max;
        }
        counted = ((this.bearing[i + 1].max - limit) * perc) / 100;
        slices.push(income);
        i++;
      }
    }
    return slices;
  }
};
