import { Router } from "express";
import { userController } from "../controllers/user/index.js";
import {
  validateApiKey,
  validateUserAccessToken,
  uploadProfilePic,
  uploadPng,
} from "../middleware/index.js";
import { userValidation } from "../validations/user/index.js";

const userRouter = Router();

userRouter.post(
  "/signup",
  validateApiKey,
  uploadProfilePic,
  userValidation.userSignupValidate,
  userController.signup,
);

userRouter.post(
  "/resent-otp",
  validateApiKey,
  userValidation.resentOtpValidate,
  userController.resentOtp,
);

userRouter.post("/login", validateApiKey, userValidation.userLoginValidate, userController.login);



export { userRouter };
