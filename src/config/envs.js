import { config } from "dotenv";
config();

export const envs = {
  env: process.env.NODE_ENV || "dev",
  port: Number(process.env.NODE_PORT) || 4000,
  db: {
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME || "",
    password: process.env.MYSQL_PASSWORD || "",
  },
  apiKey: process.env.API_KEY || "",
  passwordSalt: Number(process.env.PASSWORD_SALT_ROUND) || 12,
  jwt: {
    accessToken: {
      secret: process.env.ACCESS_TOKEN_SECRET || "",
      expiry: Number(process.env.ACCESS_TOKEN_EXPIRED) || 3600,
    },
    refreshToken: {
      secret: process.env.REFRESH_TOKEN_SECRET || "",
      expiry: Number(process.env.REFRESH_TOKEN_EXPIRED) || 3600,
    },
  },
  smtp: {
    email: process.env.SMTP_AUTH_EMAIL,
    password: process.env.SMTP_AUTH_PASSWORD,
    host: process.env.SMTP_HOST,
    fromEmail: process.env.SMTP_FROM_EMAIL,
  },
  aws: {
    accessKeyId: process.env.S3_ACCESS_KEY || "",
    secretAccessKey: process.env.S3_SECRET_KEY || "",
    region: process.env.S3_REGION || "",
  },
  s3: {
    bucketName: process.env.S3_BUCKET_NAME || "",
  },
  naver: {
    openId: process.env.NAVER_OPENID,
    accessKey: process.env.NAVER_ACCESS_KEY,
    secretKey: process.env.NAVER_SECRET_KEY,
    senderNumber: process.env.NAVER_SENDER_NUMBER,
  },
};
