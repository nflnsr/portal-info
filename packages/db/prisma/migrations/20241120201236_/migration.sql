/*
  Warnings:

  - You are about to alter the column `like` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `comment_count` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "like" SET DATA TYPE INTEGER,
ALTER COLUMN "comment_count" SET DATA TYPE INTEGER;
