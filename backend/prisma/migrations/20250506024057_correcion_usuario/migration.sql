/*
  Warnings:

  - The values [admin] on the enum `usuario_rol` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `permisos` VARCHAR(191) NOT NULL DEFAULT 'user',
    MODIFY `rol` ENUM('paciente', 'doctor', 'enfermera', 'auxiliar', 'otro') NOT NULL;
