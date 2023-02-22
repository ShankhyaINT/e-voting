import { adminUserService } from "../../../services/admin/index.js";
import { StatusError } from "../../../config/StatusErrors.js";
import bcrypt from "bcryptjs";

/**
 * Login user
 * @param req
 * @param res
 * @param next
 */
export const login = async (req, res, next) => {
  try {
    const reqBody = req.body;
    // get admin details by email
    const userDetails = await adminUserService.getByEmail(reqBody.email);
    if (!userDetails) throw StatusError.badRequest("invalidCredentials");

    if (userDetails.user_type != "admin") throw StatusError.badRequest("accessDeniedForUser");

    // compare password
    const isSame = await bcrypt.compare(reqBody.password, userDetails.password);
    if (!isSame) throw StatusError.badRequest("invalidCredentials");

    const result = await adminUserService.generateTokens({
      id: userDetails.id,
      name: userDetails.full_name,
      email: userDetails.email,
      user_type: userDetails.user_type,
    });

    if (result) {
      res.status(200).send({
        status: 200,
        success: true,
        message: res.__({
          phrase: "loginSuccess",
          locale: reqBody.language ? reqBody.language : "en",
        }),
        data: {
          user_id: userDetails.id,
          name: userDetails.name,
          email: userDetails.email,
          token: result,
        },
      });
    } else {
      res.status(200).send({
        success: false,
        message: res.__({
          phrase: "loginFail",
          locale: reqBody.language ? reqBody.language : "en",
        }),
      });
    }
  } catch (error) {
    next(error);
  }
};
