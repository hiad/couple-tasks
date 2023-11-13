-- AlterTable
ALTER TABLE `Account` MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `token_type` TEXT NULL,
    MODIFY `scope` TEXT NULL,
    MODIFY `id_token` TEXT NULL,
    MODIFY `session_state` TEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `name` TEXT NULL,
    MODIFY `image` TEXT NULL;
