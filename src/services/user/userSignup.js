import executeQuery from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";

export const createUser = async (data) => {
  const query = `INSERT INTO ${TABLES.USERS} SET ?`;
  const result = await executeQuery(query, data);
  return result.insertId;
};
