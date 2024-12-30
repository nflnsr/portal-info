import { CommentRepository } from "./comment.repository";
import { Comment, CreateCommentType } from "@repo/dto";

export class CommentService {
  private commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async getComments(): Promise<Comment[]> {
    return await this.commentRepository.getComments();
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return await this.commentRepository.getCommentById(id);
  }

  async createComment(comment: CreateCommentType): Promise<Comment> {
    return await this.commentRepository.createComment(comment);
  }

  async getCommentsByArticleId(articleId: number): Promise<Comment[]> {
    return await this.commentRepository.getCommentsByArticleId(articleId);
  }

  async getCommentsByUserId(userId: number): Promise<Comment[]> {
    return await this.commentRepository.getCommentsByUserId(userId);
  }

  async updateComment(id: string, comment: CreateCommentType): Promise<Comment> {
    return await this.commentRepository.updateComment(id, comment);
  }

  async deleteComment(id: string): Promise<Comment | void> {
    return await this.commentRepository.deleteComment(id);
  }

  async checkCommentExists(id: string): Promise<{ commentExist: boolean }> {
    return await this.commentRepository.checkCommentExists(id);
  }
}
