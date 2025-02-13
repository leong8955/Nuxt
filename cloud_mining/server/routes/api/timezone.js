import dayjs from "dayjs";

export default defineEventHandler(async (event) => {
  let result = {
    statusCode: 1,
    statusMessage: "OK",
    message: dayjs().format("DD/MM/YYYY HH:mm:ss (Z)"),
  };
  return result;
});
