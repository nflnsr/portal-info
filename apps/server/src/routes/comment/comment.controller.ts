import { CreateCommentType } from "@repo/dto";
import { Request, Response, NextFunction } from "express";
import { Comment } from "@repo/dto";
import { CommentService } from "./comment.service";
import { responseHandler } from "@repo/server-utils";

export class CommentController {
  private commentService: CommentService;

  constructor(commentService: CommentService) {
    this.commentService = commentService;
  }

  async getComments(req: Request, res: Response, next: NextFunction) {
    const comments: Comment[] = await this.commentService.getComments();
    res.status(200).json({ success: true, data: comments });
  }

  async getCommentById(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    const comment: Comment | null =
      await this.commentService.getCommentById(id);
    if (!comment) {
      responseHandler.notFound({
        res,
        message: "Komentar tidak ditemukan",
      });
      return;
    }
    responseHandler.created({
      res,
      data: comment,
    });
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    const comment: CreateCommentType = req.body;
    console.log(req.body);
    const newComment = await this.commentService.createComment(comment);
    responseHandler.created({
      res,
      data: newComment,
    });
  }

  async getCommentsByArticleId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const articleId: number = parseInt(req.params.articleId);
    const comments: Comment[] =
      await this.commentService.getCommentsByArticleId(articleId);
    responseHandler.success({ res, data: comments });
  }

  async getCommentsByUserId(req: Request, res: Response, next: NextFunction) {
    const userId: number = parseInt(req.params.userId);
    const comments: Comment[] =
      await this.commentService.getCommentsByUserId(userId);
    responseHandler.success({ res, data: comments });
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    const comment: CreateCommentType = req.body;
    const updatedComment = await this.commentService.updateComment(id, comment);
    responseHandler.success({
      res,
      data: updatedComment,
    });
  }

  async deleteComment(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    const deletedComment = await this.commentService.deleteComment(id);
    responseHandler.success({
      res,
      data: deletedComment,
    });
  }

  async checkCommentExists(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.id;
    const { commentExist } = await this.commentService.checkCommentExists(id);
    responseHandler.success({
      res,
      data: commentExist,
    });
  }
}
