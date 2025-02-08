export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase()}/${date.getFullYear()}`;
};
