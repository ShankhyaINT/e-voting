import dayjs from "dayjs";

export const getCurrentDateTime = () => {
  const dateString = dayjs().format("YYYY-MM-DD HH:mm:ss");
  return dateString;
};
