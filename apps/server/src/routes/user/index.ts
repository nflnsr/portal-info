import { Router } from "express";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { Request, Response, NextFunction } from "express";
import { validate } from "~/middleware/validate";
import { CreateUserSchema, LoginUserSchema, UpdateUserSchema } from "@repo/dto";
import { authenticate } from "~/middleware/authenticate";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post(
  "/register",
  validate(CreateUserSchema),
  (req: Request, res: Response, next: NextFunction) =>
    userController.createUser(req, res, next),
);

router.get("/", (req: Request, res: Response, next: NextFunction) =>
  userController.getUsers(req, res, next),
);

router.post(
  "/login",
  validate(LoginUserSchema),
  (req: Request, res: Response, next: NextFunction) =>
    userController.loginUser(req, res, next),
);

router.get(
  "/refresh-token",
  (req: Request, res: Response, next: NextFunction) =>
    userController.refreshToken(req, res, next),
);

router.get(
  "/:id",
  authenticate,
  (req: Request, res: Response, next: NextFunction) =>
    userController.getUserById(req, res, next),
);

router.put(
  "/:id",
  validate(UpdateUserSchema),
  (req: Request, res: Response, next: NextFunction) =>
    userController.updateUser(req, res, next),
);

export default router;
