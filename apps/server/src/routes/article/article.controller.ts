import { Request, Response, NextFunction } from "express";
import { Article, CreateArticleType, UpdateArticleType } from "@repo/dto";
import { ArticleService } from "./article.service";
import { responseHandler } from "@repo/server-utils";
import { Article_CategorySchema } from "@repo/db";

export class ArticleController {
  private articleService: ArticleService;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  async getArticles(req: Request, res: Response, next: NextFunction) {
    try {
      const articles: Article[] = await this.articleService.getArticles();
      responseHandler.success({ res, data: articles });
    } catch (error) {
      next(error);
    }
  }

  async getArticleById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id article tidak valid",
        });
        return;
      }
      const article: Article | null =
        await this.articleService.getArticleById(id);
      if (!article) {
        responseHandler.notFound({
          res,
          message: "Article tidak ditemukan",
        });
        return;
      }
      responseHandler.success({ res, data: article });
    } catch (error) {
      next(error);
    }
  }

  async createArticle(req: Request, res: Response, next: NextFunction) {
    try {
      const article: CreateArticleType = req.body;
      const createdArticle: Article =
        await this.articleService.createArticle(article);
      responseHandler.success({ res, data: createdArticle });
    } catch (error) {
      next(error);
    }
  }

  async updateArticle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id article tidak valid",
        });
        return;
      }
      const article: UpdateArticleType = req.body;
      const updatedArticle: Article = await this.articleService.updateArticle(
        id,
        article,
      );
      responseHandler.success({ res, data: updatedArticle });
    } catch (error) {
      next(error);
    }
  }

  async deleteArticle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id article tidak valid",
        });
        return;
      }
      const deleteData = await this.articleService.deleteArticle(id);
      console.log(deleteData, "deleteData");
      if (!deleteData) {
        responseHandler.notFound({
          res,
          message: "Article tidak ditemukan",
        });
        return;
      }
      responseHandler.noContent({ res });
    } catch (error) {
      next(error);
    }
  }

  async likeArticle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      if (!id) {
        responseHandler.badRequest({
          res,
          message: "Id article tidak valid",
        });
        return;
      }
      const likedArticle: Article = await this.articleService.likeArticle(id);
      responseHandler.success({ res, data: likedArticle });
    } catch (error) {
      next(error);
    }
  }

  async getArticlesByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      if (!userId) {
        responseHandler.badRequest({
          res,
          message: "Invalid user id",
        });
        return;
      }
      const articles: Article[] =
        await this.articleService.getArticlesByUserId(userId);
      responseHandler.success({ res, data: articles });
    } catch (error) {
      next(error);
    }
  }

  async getArticleByTitle(req: Request, res: Response, next: NextFunction) {
    try {
      const title = req.params.title;
      if (!title) {
        responseHandler.badRequest({
          res,
          message: "Judul article tidak valid",
        });
        return;
      }
      const article: Article[] | null =
        await this.articleService.getArticleByTitle(title);
      if (!article) {
        responseHandler.notFound({
          res,
          message: "Article tidak ditemukan",
        });
        return;
      }
      responseHandler.success({ res, data: article });
    } catch (error) {
      next(error);
    }
  }

  async getArticlesByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.params.category as Article["category"];
      if (
        !category ||
        !Object.values(Article_CategorySchema)[1].values.includes(category)
      ) {
        responseHandler.badRequest({
          res,
          message: "Category tidak valid",
        });
        return;
      }
      const article: Article[] | null =
        await this.articleService.getArticleByCategory(category);
      if (!article) {
        responseHandler.notFound({
          res,
          message: "Article tidak ditemukan",
        });
        return;
      }
      responseHandler.success({ res, data: article });
    } catch (error) {
      next(error);
    }
  }

  async getArticlesByTag(req: Request, res: Response, next: NextFunction) {
    try {
      const tags = req.params.tags;
      if (!tags) {
        responseHandler.badRequest({
          res,
          message: "Tag tidak valid",
        });
        return;
      }
      const articles: Article[] =
        await this.articleService.getArticlesByTag(tags);
      responseHandler.success({ res, data: articles });
    } catch (error) {
      next(error);
    }
  }

  async getArticlesBySearch(req: Request, res: Response, next: NextFunction) {
    try {
      const { q } = req.query as { q: string };
      const matchWord = q?.trimEnd().split(" ").join("&");
      const containWord = q?.trimEnd().split(" ").join("|");
      const tags = q?.split(" ");
      const category = Object.values(Article_CategorySchema)[1].values.filter(
        (category: Article["category"]) =>
          q
            ?.split(" ")
            .map(
              (word: string) =>
                word.toLowerCase().charAt(0).toUpperCase() + word?.slice(1),
            )
            .includes(category as string),
      );
      const articles: Article[] = await this.articleService.getArticlesBySearch(
        {
          containWord,
          matchWord,
          tags,
          category,
        },
      );
      responseHandler.success({ res, data: articles });
    } catch (error) {
      next(error);
    }
  }
}
