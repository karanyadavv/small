/*
  Warnings:

  - The `publishStatus` column on the `Articles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[slug]` on the table `Articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PublishStatus" AS ENUM ('draft', 'published');

-- AlterTable
ALTER TABLE "Articles" ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "publishStatus",
ADD COLUMN     "publishStatus" "PublishStatus" NOT NULL DEFAULT 'draft';

-- CreateIndex
CREATE UNIQUE INDEX "Articles_slug_key" ON "Articles"("slug");
