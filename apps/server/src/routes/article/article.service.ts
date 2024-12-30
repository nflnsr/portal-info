import { ArticleRepository } from "./article.repository";
import {
  Article,
  Article_Category,
  CreateArticleType,
  UpdateArticleType,
} from "@repo/dto";

export class ArticleService {
  private articleRepository: ArticleRepository;

  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository;
  }

  async getArticles(): Promise<Article[]> {
    return await this.articleRepository.getArticles();
  }

  async getArticleById(id: number): Promise<Article | null> {
    return await this.articleRepository.getArticleById(id);
  }

  async createArticle(article: CreateArticleType): Promise<Article> {
    return await this.articleRepository.createArticle(article);
  }

  async updateArticle(
    id: number,
    article: UpdateArticleType,
  ): Promise<Article> {
    return await this.articleRepository.updateArticle(id, article);
  }

  async deleteArticle(id: number): Promise<Article | void> {
    return await this.articleRepository.deleteArticle(id);
  }

  async likeArticle(id: number): Promise<Article> {
    return await this.articleRepository.likeArticle(id);
  }

  async getArticleByTitle(title: string): Promise<Article[] | null> {
    return await this.articleRepository.getArticlesByTitle(title);
  }

  async getArticleByCategory(
    category: Article["category"],
  ): Promise<Article[] | null> {
    return await this.articleRepository.getArticlesByCategory(category);
  }

  async getArticlesByUserId(userId: number): Promise<Article[]> {
    return await this.articleRepository.getArticlesByUserId(userId);
  }

  async getArticlesByTag(tags: string): Promise<Article[]> {
    return await this.articleRepository.getArticlesByTag(tags);
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
    return await this.articleRepository.getArticlesBySearch({
      containWord,
      matchWord,
      tags,
      category,
    });
  }
}
