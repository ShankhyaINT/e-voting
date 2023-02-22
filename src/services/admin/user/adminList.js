import executeQuery from "../../executeQuery.js";
import { TABLES } from "../../../utils/constants.js";

export const adminList = async (id) => {
  const query = `SELECT menus.menu_name as menu_name, menus.menu_alias as menu_alias FROM ${TABLES.ADMIN_MENU} AS menus 
  JOIN ${TABLES.ADMIN_MENU_ACCESS} as access ON menus.id = access.menu_id 
  WHERE access.user_id = '${id}' and access.status = 'active' ORDER BY menus.id asc`;
  const result = await executeQuery(query);
  return result;
};
