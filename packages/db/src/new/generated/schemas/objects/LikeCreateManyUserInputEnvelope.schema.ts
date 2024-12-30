import { z } from 'zod';
import { LikeCreateManyUserInputObjectSchema } from './LikeCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LikeCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => LikeCreateManyUserInputObjectSchema),
      z.lazy(() => LikeCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LikeCreateManyUserInputEnvelopeObjectSchema = Schema;
