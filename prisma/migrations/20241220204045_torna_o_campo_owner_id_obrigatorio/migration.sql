/*
  Warnings:

  - Made the column `owner_id` on table `GiftList` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "GiftList" DROP CONSTRAINT "GiftList_owner_id_fkey";

-- AlterTable
ALTER TABLE "GiftList" ALTER COLUMN "owner_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "GiftList" ADD CONSTRAINT "GiftList_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
