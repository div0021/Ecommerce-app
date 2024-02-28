


export function roundToNearestHalf(number:number) {
    // Round to nearest integer
    const roundedInteger = Math.round(number);
  
    // Get the decimal part
    const decimalPart = number - roundedInteger;
  
    // If the decimal part is greater than 0.5, add 0.5; otherwise, keep it as is
    const roundedDecimal = decimalPart > 0.5 ? 0.5 : 0;
  
    // Return the sum of the rounded integer and the rounded decimal
    return roundedInteger + roundedDecimal;
  }