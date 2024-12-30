import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";
import { User, CreateUserType } from "@repo/dto";
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  parseToken,
  responseHandler,
  verifyRefreshToken,
} from "@repo/server-utils";
import { hashPassword } from "@repo/server-utils";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users: Array<Omit<User, "password">> =
        await this.userService.getUsers();
      responseHandler.success({ res, data: users });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id user tidak valid",
        });
        return;
      }

      const user: Omit<User, "password"> | null =
        await this.userService.getUserById(id);
      if (!user) {
        responseHandler.notFound({
          res,
          message: "User tidak ditemukan",
        });
        return;
      }
      responseHandler.success({ res, data: user });
    } catch (error) {
      next(error);
    }
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const user: CreateUserType & { confirm_password: string } = req.body;
      const { password, confirm_password, ...userData } = user;
      const hashedPassword = await hashPassword(password);
      const newUser = await this.userService.createUser({
        password: hashedPassword,
        ...userData,
      });
      responseHandler.created({ res, data: newUser });
    } catch (err) {
      next(err);
    }
  }

  async loginUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const email: string = req.body.email;
      if (!email) {
        responseHandler.badRequest({
          res,
          message: "Email tidak valid",
        });
        return;
      }
      const user: User | null = await this.userService.loginUser(email);
      if (!user) {
        responseHandler.notFound({
          res,
          message: "Email tidak ditemukan",
        });
        return;
      }
      if (!(await comparePassword(req.body.password, user.password))) {
        responseHandler.unauthorized({ res, message: "Password salah" });
        return;
      }
      const { password, ...userData } = user;
      const accessToken = generateAccessToken(userData);
      const refreshToken = generateRefreshToken(userData);
      responseHandler.success({
        res,
        data: { userData, accessToken, refreshToken },
      });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader?.split(" ")[1];
      if (!token) {
        responseHandler.unauthorized({
          res,
          message: "Token is required",
        });
        return;
      }
      const verify = verifyRefreshToken(token);
      if (!verify) {
        responseHandler.unauthorized({
          res,
          message: "Invalid token",
        });
        return;
      }
      const data = parseToken(token);
      console.log(data);
      console.log(typeof data);
      const user: User | null = await this.userService.loginUser(data?.email!);
      if (!user) {
        responseHandler.notFound({
          res,
          message: "Invalid token",
        });
        return;
      }
      const { password, ...userData } = user;
      const accessToken = generateAccessToken(userData);
      const refreshToken = generateRefreshToken(userData);
      responseHandler.success({
        res,
        data: { userData, accessToken, refreshToken },
      });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const user: CreateUserType = req.body;
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id user tidak valid",
        });
      }

      //prevent id from being updated, id should be taken from params
      const { id: userId, ...rest } = user;
      if (userId) {
        responseHandler.badRequest({
          res,
          message: "Tidak dapat mengubah id user",
        });
        return;
      }

      const updatedUser = await this.userService.updateUser(id, rest);
      responseHandler.success({ res, data: updatedUser });
    } catch (error) {
      next(error);
    }
  }
}
