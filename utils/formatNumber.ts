export const formatNumber = (input: string) => {
  const number = Number(input);

  // Check if the conversion was successful
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number");
  }

  // Format the number with commas and two decimal places
  return number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
