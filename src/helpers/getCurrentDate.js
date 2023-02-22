import dayjs from "dayjs";

export const getCurrentDate = () => {
  const dateString = dayjs().format("YYYY-MM-DD");
  return dateString;
};
