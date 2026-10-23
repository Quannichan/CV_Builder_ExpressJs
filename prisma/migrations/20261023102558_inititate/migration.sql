-- DropForeignKey
ALTER TABLE `Payment` DROP FOREIGN KEY `Payment_iduser_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_iduser_fkey`;

-- DropForeignKey
ALTER TABLE `SharedPosts` DROP FOREIGN KEY `SharedPosts_postId_fkey`;

-- DropForeignKey
ALTER TABLE `SharedPosts` DROP FOREIGN KEY `SharedPosts_userId_fkey`;

-- AlterTable
ALTER TABLE `Post` MODIFY `iduser` INTEGER NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `verifyToken` VARCHAR(255) NULL;

-- CreateIndex
CREATE INDEX `Payment_type_status_idx` ON `Payment`(`type`, `status`);

-- CreateIndex
CREATE INDEX `Post_lang_idx` ON `Post`(`lang`);

-- CreateIndex
CREATE INDEX `User_emailVerified_idx` ON `User`(`emailVerified`);

-- CreateIndex
CREATE INDEX `User_role_idx` ON `User`(`role`);

-- AddForeignKey
ALTER TABLE `SharedPosts` ADD CONSTRAINT `SharedPosts_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SharedPosts` ADD CONSTRAINT `SharedPosts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_iduser_fkey` FOREIGN KEY (`iduser`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_iduser_fkey` FOREIGN KEY (`iduser`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Payment` RENAME INDEX `Payment_iduser_fkey` TO `Payment_iduser_idx`;

-- RenameIndex
ALTER TABLE `Post` RENAME INDEX `Post_idSample_fkey` TO `Post_idSample_idx`;

-- RenameIndex
ALTER TABLE `Post` RENAME INDEX `Post_iduser_fkey` TO `Post_iduser_idx`;

-- RenameIndex
ALTER TABLE `PostSample` RENAME INDEX `PostSample_iduser_fkey` TO `PostSample_iduser_idx`;
