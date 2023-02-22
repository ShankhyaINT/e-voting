import dayjs from "dayjs";

export const getExpiredOtpTime = () => {
  return dayjs().add(30, "m").format("YYYY-MM-DD HH:mm:ss");
};
