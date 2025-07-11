export const dateFormatter = (value: string) => {
  const date = new Date(value);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because getMonth() returns zero-based month index
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
