import { Router } from "express";
import { userRouter } from "./user.js";


const v1Router = Router();

// All routes go here
v1Router.use("/user", userRouter);


export { v1Router };
