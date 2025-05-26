-- CreateTable
CREATE TABLE `citas` (
    `idCita` INTEGER NOT NULL AUTO_INCREMENT,
    `strat` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
