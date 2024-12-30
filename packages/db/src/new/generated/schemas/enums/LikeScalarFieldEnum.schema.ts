import { z } from 'zod';

export const LikeScalarFieldEnumSchema = z.enum([
  'user_id',
  'article_id',
  'liked_at',
]);
