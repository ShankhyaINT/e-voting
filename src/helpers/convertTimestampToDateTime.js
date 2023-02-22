import dayjs from "dayjs";

export const convertTimestampToDateTime = (timestamp) => {
  const dateString = dayjs(parseInt(timestamp)).format("YYYY-MM-DD HH:mm:ss");
  return dateString;
};
