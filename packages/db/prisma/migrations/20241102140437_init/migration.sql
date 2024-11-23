-- CreateEnum
CREATE TYPE "post_category" AS ENUM ('Nasional', 'Internasional', 'Politik', 'Ekonomi Bisnis', 'Teknologi', 'Olahraga', 'Hiburan', 'Gaya Hidup', 'Kesehatan', 'Edukasi', 'Sains', 'Lingkungan', 'Hukum Kriminal', 'Human Interest', 'Opini Editorial', 'Properti Real Estate', 'Transportasi', 'Pariwisata', 'Kuliner', 'Keuangan Pribadi', 'Agama Spiritualitas', 'Psikologi Pengembangan Diri', 'Komunitas Sosial', 'Sejarah', 'Budaya Pop', 'Ekonomi Kreatif', 'Ekologi Keanekaragaman Hayati');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "category" "post_category",
ADD COLUMN     "topic" TEXT;
