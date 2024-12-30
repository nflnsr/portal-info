import { z } from 'zod';

export const ArticleScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'title',
  'description',
  'category',
  'topic',
  'writter',
  'tags',
  'like_count',
  'comment_count',
  'created_at',
]);
