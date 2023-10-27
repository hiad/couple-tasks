-- CreateIndex
CREATE INDEX `Account_userId_idx` ON `Account`(`userId`);

-- CreateIndex
CREATE INDEX `Post_createdById_idx` ON `Post`(`createdById`);

-- CreateIndex
CREATE INDEX `Session_userId_idx` ON `Session`(`userId`);
