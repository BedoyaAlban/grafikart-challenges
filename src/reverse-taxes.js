module.exports = class ReverseTaxes {
  constructor() {
    this.taxeBearing = [
      {
        min: 0,
        max: 10064,
        perc: 0
      },
      {
        min: 10065,
        max: 25659,
        perc: 0.11
      },
      {
        min: 25660,
        max: 73369,
        perc: 0.3
      },
      {
        min: 73370,
        max: 157806,
        perc: 0.41
      },
      {
        min: 157807,
        max: Infinity,
        perc: 0.45
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

  CalculateReverse = () => {
    const taxePart = this.taxe / this.parts;
    return Math.round(IncomeBySlice(taxePart) * parts);
  };

  IncomeBySlice(taxesPart) {
    let taxe = taxesPart;
    let income = 0;
    this.taxeBearing.every(b => {
      const bearing = (b.max - b.min) * b.perc;
      if (taxe >= bearing) {
        taxe -= bearing;
        return true;
      } else {
        income = taxe / b.perc + b.min;
        return false;
      }
    });
    return income;
  }
};
