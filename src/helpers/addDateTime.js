import dayjs from "dayjs";

export const addDateTime = (vDay, vDuration, vDateTime) => {
  const dateString = dayjs(vDateTime).add(parseInt(vDay), vDuration).format("YYYY-MM-DD HH:mm:ss");
  return dateString;
};
