-- CreateTable
CREATE TABLE `usuario` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `contrasenia` VARCHAR(191) NOT NULL,
    `rol` ENUM('paciente', 'doctor', 'enfermera', 'auxiliar', 'otro', 'admin') NOT NULL,

    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paciente` (
    `idPaciente` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario_FK` INTEGER NOT NULL,
    `telefono` INTEGER NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `fechaNac` VARCHAR(191) NOT NULL,
    `cedula` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `paciente_idUsuario_FK_key`(`idUsuario_FK`),
    PRIMARY KEY (`idPaciente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `idDoctor` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario_FK` INTEGER NOT NULL,

    UNIQUE INDEX `doctor_idUsuario_FK_key`(`idUsuario_FK`),
    PRIMARY KEY (`idDoctor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `otro` (
    `idOtro` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario_FK` INTEGER NOT NULL,

    UNIQUE INDEX `otro_idUsuario_FK_key`(`idUsuario_FK`),
    PRIMARY KEY (`idOtro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `paciente` ADD CONSTRAINT `paciente_idUsuario_FK_fkey` FOREIGN KEY (`idUsuario_FK`) REFERENCES `usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `doctor_idUsuario_FK_fkey` FOREIGN KEY (`idUsuario_FK`) REFERENCES `usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `otro` ADD CONSTRAINT `otro_idUsuario_FK_fkey` FOREIGN KEY (`idUsuario_FK`) REFERENCES `usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
