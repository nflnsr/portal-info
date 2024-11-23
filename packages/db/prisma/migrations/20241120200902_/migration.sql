/*
  Warnings:

  - You are about to drop the column `post_id` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `article_id` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "article_category" AS ENUM ('Nasional', 'Internasional', 'Politik', 'Ekonomi Bisnis', 'Teknologi', 'Olahraga', 'Hiburan', 'Gaya Hidup', 'Kesehatan', 'Edukasi', 'Sains', 'Lingkungan', 'Hukum Kriminal', 'Human Interest', 'Opini Editorial', 'Properti Real Estate', 'Transportasi', 'Pariwisata', 'Kuliner', 'Keuangan Pribadi', 'Agama Spiritualitas', 'Psikologi Pengembangan Diri', 'Komunitas Sosial', 'Sejarah', 'Budaya Pop', 'Ekonomi Kreatif', 'Ekologi Keanekaragaman Hayati');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_post_id_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_user_id_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "post_id",
ADD COLUMN     "article_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "tes";

-- DropEnum
DROP TYPE "post_category";

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "like" BIGINT NOT NULL DEFAULT 0,
    "comment_count" BIGINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" "article_category",
    "topic" TEXT,
    "writter" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
