import { z } from 'zod';

export const roleSchema = z.enum(['Admin', 'User']);
