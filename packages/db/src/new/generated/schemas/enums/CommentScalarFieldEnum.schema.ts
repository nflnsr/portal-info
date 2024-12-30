import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'article_id',
  'user_id',
  'comment',
  'created_at',
]);
