import { Bearing } from "./CalculateTaxes";

export const CalculateReverse = (taxe, parts) => {
  const taxesPart = taxe / parts;
  const result = IncomeBySlice(taxesPart);
  const idxIncome = result.length - 1;
  const sum = result.slice(idxIncome).toString();
  const income =
    (parseInt(sum) * 100) / Bearing[idxIncome].perc +
    Bearing[idxIncome - 1].max +
    1;
  return income;
};

export const IncomeBySlice = taxesPart => {
  let i = 0;
  const slices = [];
  let counted = 0;
  while (counted < taxesPart) {
    const { max: limit, perc } = Bearing[i];
    let income;
    if (i === 0) {
      counted = ((Bearing[i + 1].max - limit) * perc) / 100;
    } else {
      counted = ((limit - Bearing[i - 1].max - 1) * perc) / 100;
    }
    if (taxesPart > counted) {
      income = counted;
    } else if (taxesPart < counted) {
      income = Math.round(
        taxesPart -
          ((Bearing[i - 1].max - Bearing[i - 2].max - 1) *
            Bearing[i - 1].perc) /
            100
      );
    } else {
      income = 0;
    }
    slices.push(income);
    i++;
  }
  return slices;
};
