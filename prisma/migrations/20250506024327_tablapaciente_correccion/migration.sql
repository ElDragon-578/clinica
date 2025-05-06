/*
  Warnings:

  - Added the required column `apellido` to the `paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `paciente` ADD COLUMN `apellido` VARCHAR(191) NOT NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
