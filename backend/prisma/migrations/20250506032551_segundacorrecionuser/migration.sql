-- AlterTable
ALTER TABLE `usuario` MODIFY `rol` ENUM('paciente', 'doctor', 'enfermera', 'auxiliar', 'otro') NOT NULL DEFAULT 'paciente';
