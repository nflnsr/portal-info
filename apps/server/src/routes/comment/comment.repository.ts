import { Comment, CreateCommentType, UpdateCommentType } from "@repo/dto";
import { prisma } from "@repo/db";

export class CommentRepository {
  async getComments(): Promise<Comment[]> {
    return await prisma.comment.findMany();
  }

  async createComment(comment: CreateCommentType): Promise<Comment> {
    return await prisma.comment.create({
      data: comment,
    });
  }

  async getCommentById(id: string): Promise<Comment | null> {
    return await prisma.comment.findUnique({
      where: { id },
    });
  }

  async getCommentsByArticleId(articleId: number): Promise<Comment[]> {
    return await prisma.comment.findMany({
      where: { article_id: articleId },
    });
  }

  async getCommentsByUserId(userId: number): Promise<Comment[]> {
    return await prisma.comment.findMany({
      where: { user_id: userId },
    });
  }

  async updateComment(id: string, comment: UpdateCommentType): Promise<Comment> {
    return await prisma.comment.update({
      where: { id },
      data: comment,
    });
  }

  async deleteComment(id: string): Promise<Comment | void> {
    return await prisma.comment.delete({
      where: { id },
    });
  }

  async checkCommentExists(id: string): Promise<{ commentExist: boolean }> {
    const comment = await prisma.comment.findFirst({
      where: { id },
    });
    return { commentExist: Boolean(comment) };
  }
}
