import { NextFunction, Request, Response, Router } from "express";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { ArticleRepository } from "./article.repository";
import { validate } from "~/middleware/validate";
import { CreateArticleSchema, UpdateArticleSchema } from "@repo/dto";

const router = Router();

const articleRepository = new ArticleRepository();
const articleService = new ArticleService(articleRepository);
const articleController = new ArticleController(articleService);

router.post(
  "/",
  validate(CreateArticleSchema),
  (req: Request, res: Response, next: NextFunction) => {
    
    return articleController.createArticle(req, res, next);
  },
);

router.put(
  "/:id",
  validate(UpdateArticleSchema),
  (req: Request, res: Response, next: NextFunction) => {
    return articleController.updateArticle(req, res, next);
  },
);

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  return articleController.deleteArticle(req, res, next);
});

router.put(
  "/like/:id",
  (req: Request, res: Response, next: NextFunction) => {
    return articleController.likeArticle(req, res, next);
  },
);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  return articleController.getArticles(req, res, next);
});

router.get("/search", (req: Request, res: Response, next: NextFunction) => {

  return articleController.getArticlesBySearch(req, res, next);
});

router.get("/user/:id", (req: Request, res: Response, next: NextFunction) => {
  return articleController.getArticlesByUserId(req, res, next);
});

router.get("/tag/:tags", (req: Request, res: Response, next: NextFunction) => {
  return articleController.getArticlesByTag(req, res, next);
});

router.get(
  "/category/:category",
  (req: Request, res: Response, next: NextFunction) => {
    return articleController.getArticlesByCategory(req, res, next);
  },
);

router.get(
  "/title/:title",
  (req: Request, res: Response, next: NextFunction) => {
    return articleController.getArticleByTitle(req, res, next);
  },
);

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  return articleController.getArticleById(req, res, next);
});

export default router;
