import { NextFunction, Request, Response, Router } from "express";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { CommentRepository } from "./comment.repository";

const router = Router();

const commentRepository = new CommentRepository();
const commentService = new CommentService(commentRepository);
const commentController = new CommentController(commentService);

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  commentController.createComment(req, res, next);
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  commentController.getComments(req, res, next);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  commentController.getCommentById(req, res, next);
});




export default router;
