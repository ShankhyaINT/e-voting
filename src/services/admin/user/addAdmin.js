import executeQuery from "../../executeQuery.js";
import { TABLES } from "../../../utils/constants.js";

export const addAdmin = async (data) => {
  const query = `INSERT INTO ${TABLES.ADMIN_USERS} SET ?`;
  await executeQuery(query, data);
};
