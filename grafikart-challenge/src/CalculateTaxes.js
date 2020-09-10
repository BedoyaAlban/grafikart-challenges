export const Bearing = [
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
// Loop to find where the bearing of tax the users are.
export const TaxesBySlice = incomePart => {
  let counted = 0;
  let i = 0;
  const slices = [];
  while (counted < incomePart) {
    const { max: limit, perc } = Bearing[i];
    let taxe;
    let isFirstSlice = i === 0;
    if (!isFirstSlice) {
      if (incomePart <= limit) {
        taxe = ((incomePart - Bearing[i - 1].max - 1) * perc) / 100;
      } else {
        taxe = ((limit - Bearing[i - 1].max - 1) * perc) / 100;
      }
    } else {
      taxe = (limit * perc) / 100;
    }
    counted = limit;
    slices.push(taxe);
    i++;
  }
  return slices;
};
// Obtain the final result by adding all the value inside the array of taxes by bearing.
export const Calculate = (income, parts) => {
  const incomePart = income / parts;
  return Math.round(
    TaxesBySlice(incomePart).reduce((acc, slice) => acc + slice, 0) * parts
  );
};
