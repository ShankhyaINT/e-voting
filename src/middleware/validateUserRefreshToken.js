import { userService } from "../services/index.js";
import { envs, StatusError } from "../config/index.js";

/**
 * This function is used for validating authorization header
 * @param req
 * @param res
 * @param next
 */
export const validateUserRefreshToken = async (req, res, next) => {
  try {
    const token = req.token;
    if (!token) throw StatusError.forbidden("");

    const decodedData = userService.verifyToken(token, envs.jwt.refresj.secret);
    if (!decodedData) throw StatusError.unauthorized("");

    const userDetails = await userService.getByEmail(decodedData.email);
    if (!userDetails) throw StatusError.unauthorized("");

    req["userDetails"] = {
      userId: userDetails.id,
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phone,
      userType: userDetails.user_type,
    };
    next();
  } catch (error) {
    next(error);
  }
};
