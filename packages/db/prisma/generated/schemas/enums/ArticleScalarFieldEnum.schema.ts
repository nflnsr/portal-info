import { z } from 'zod';

export const ArticleScalarFieldEnumSchema = z.enum([
  'id',
  'user_id',
  'title',
  'description',
  'like',
  'comment_count',
  'created_at',
  'category',
  'topic',
  'writter',
  'tags',
]);
