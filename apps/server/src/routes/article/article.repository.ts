import {
  Article,
  Article_Category,
  CreateArticleType,
  UpdateArticleType,
} from "@repo/dto";
import { prisma } from "@repo/db";

export class ArticleRepository {
  async getArticles(): Promise<Article[]> {
    return await prisma.article.findMany();
  }

  async createArticle(article: CreateArticleType): Promise<Article> {
    return await prisma.article.create({
      data: article,
    });
  }

  async checkArticleExists(id: number): Promise<{ articleExist: boolean }> {
    const article = await prisma.article.findFirst({
      where: { id },
    });
    return { articleExist: Boolean(article) };
  }

  async updateArticle(
    id: number,
    article: UpdateArticleType,
  ): Promise<Article> {
    return await prisma.article.update({
      where: { id },
      data: article,
    });
  }

  async deleteArticle(id: number): Promise<Article | void> {
    return await prisma.article.delete({
      where: { id },
    });
  }

  async likeArticle(id: number): Promise<Article> {
    return await prisma.article.update({
      where: { id },
      data: {
        like_count: {
          increment: 1,
        },
      },
    });
  }

  async getArticleById(id: number): Promise<Article | null> {
    return await prisma.article.findUnique({
      where: { id },
    });
  }

  async getArticlesByTitle(title: string): Promise<Article[] | null> {
    return await prisma.article.findMany({
      where: { title },
    });
  }

  async getArticlesByCategory(
    category: Article["category"],
  ): Promise<Article[] | null> {
    return await prisma.article.findMany({
      where: { category },
    });
  }

  async getArticlesByUserId(userId: number): Promise<Article[]> {
    return await prisma.article.findMany({
      where: { user_id: userId },
    });
  }

  async getArticlesByTag(tag: string): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        tags: {
          hasSome: [tag],
        },
      },
    });
  }

  async getArticlesBySearch({
    containWord,
    matchWord,
    tags,
    category,
  }: {
    containWord: string;
    matchWord: string;
    tags: string[];
    category: Article_Category[];
  }): Promise<Article[]> {
    return await prisma.article.findMany({
      where: {
        OR: [
          { title: { search: containWord, mode: "insensitive" } },
          { description: { search: matchWord, mode: "insensitive" } },
          { writter: { search: matchWord, mode: "insensitive" } },
          { topic: { search: containWord, mode: "insensitive" } },
          { tags: { hasSome: tags } },
          { category: { in: category } },
        ],
      },
    });
  }
}
