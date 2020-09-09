export const TaxeBearing = [
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

export const CalculateReverse = (taxe, parts) => {
  const taxePart = taxe / parts;
  return IncomeBySlice(taxePart) * parts;
};

export const IncomeBySlice = taxesPart => {
  let taxe = taxesPart;
  let income = 0;
  TaxeBearing.every(b => {
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
};
