import dayjs from "dayjs";

export const convertDateTimeToDate = (datetime) => {
  const dateString = dayjs(datetime).format("YYYY-MM-DD");
  return dateString;
};
