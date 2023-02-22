import jwt from "jsonwebtoken";
import { envs } from "../../config/index.js";

/**
 * Generate tokens
 * @param details
 */
export const generateTokens = async (userDetails) => {
  const payload = {
    userId: userDetails.userId,
    name: userDetails.name,
    email: userDetails.email,
  };
  const accessToken = jwt.sign(payload, envs.jwt.accessToken.secret, {
    expiresIn: envs.jwt.accessToken.expiry,
  });
  // const refreshToken = jwt.sign(payload, envs.jwt.refreshToken.secret, {
  //   expiresIn: envs.jwt.refreshToken.expiry,
  // });

  return {
    accessToken: accessToken,
    accessTokenExpiry: envs.jwt.accessToken.expiry,
    // refreshToken: refreshToken,
    // refreshTokenExpiry: envs.jwt.refreshToken.expiry,
  };
};
