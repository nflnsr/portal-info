import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";

const generateAccessToken = (data: any) => {
  return jwt.sign(data, String(process.env.JWT_ACCESS_SECRET), {
    expiresIn:
      process.env.JWT_ACCESS_EXPIRES_IN != null
        ? String(process.env.JWT_ACCESS_EXPIRES_IN)
        : "3600s",
  });
};

const generateRefreshToken = (data: any) => {
  return jwt.sign(data, String(process.env.JWT_REFRESH_SECRET), {
    expiresIn:
      process.env.JWT_REFRESH_EXPIRES_IN != null
        ? String(process.env.JWT_REFRESH_EXPIRES_IN)
        : "68400s",
  });
};

const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, String(process.env.JWT_ACCESS_SECRET));
  } catch (error) {
    return null;
  }
};

const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, String(process.env.JWT_REFRESH_SECRET));
  } catch (error) {
    return null;
  }
};

const parseToken = (token: string) => {
  try {
    return <
      JwtPayload & {
        id: number;
        name: string;
        email: string;
        phone_number: string;
        role: "Admin" | "User";
        created_at: string;
      }
    >jwt.decode(token);
  } catch (error) {
    return null;
  }
};

export {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  verifyAccessToken,
  parseToken,
};
