/*
  Warnings:

  - Added the required column `lastTryRecAccount` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `lastTryRecAccount` DATETIME(3) NOT NULL;
