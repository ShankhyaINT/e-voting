import mysql from "mysql";
import { envs } from "./index.js";

export const mysqlConnection = mysql.createConnection({
  host: envs.db.host,
  user: envs.db.username,
  password: envs.db.password,
  database: envs.db.database,
  charset: "utf8mb4",
  multipleStatements: true,
});
/*
export const mysqlConnection = mysql.createPool({
  connectionLimit: 10,
  host: envs.db.host,
  user: envs.db.username,
  password: envs.db.password,
  database: envs.db.database,
  charset: "utf8mb4",
  multipleStatements: true,
});*/

export const connect = () => {
  mysqlConnection.connect((err) => {
    if (!err) console.log("MYSQL Connection Established Successfully");
    else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
  });
};
