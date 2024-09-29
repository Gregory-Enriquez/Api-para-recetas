-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.32-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para recetas
CREATE DATABASE IF NOT EXISTS `recetas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `recetas`;

-- Volcando estructura para tabla recetas.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla recetas.categorias: ~4 rows (aproximadamente)
INSERT INTO `categorias` (`Id`, `nombre`) VALUES
	(1, 'Snack'),
	(2, 'Desayunos'),
	(3, 'Almuerzos'),
	(4, 'Cenas'),
	(5, 'Refrescos');

-- Volcando estructura para tabla recetas.categoria_receta
CREATE TABLE IF NOT EXISTS `categoria_receta` (
  `receta_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  KEY `receta_id` (`receta_id`),
  KEY `FK__categorias` (`categoria_id`),
  CONSTRAINT `FK__categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK__recetas` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla recetas.categoria_receta: ~1 rows (aproximadamente)
INSERT INTO `categoria_receta` (`receta_id`, `categoria_id`) VALUES
	(1, 3),
	(2, 3);

-- Volcando estructura para tabla recetas.ingredientes
CREATE TABLE IF NOT EXISTS `ingredientes` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL DEFAULT '0',
  `cantidad` float DEFAULT NULL,
  `receta_id` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `receta_id` (`receta_id`),
  CONSTRAINT `FK_ingredientes_recetas` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla recetas.ingredientes: ~3 rows (aproximadamente)
INSERT INTO `ingredientes` (`Id`, `nombre`, `cantidad`, `receta_id`) VALUES
	(2, 'Chiltomas', 5, 1),
	(3, 'Repollo', 1, 2),
	(4, 'Tomates', 10, 2);

-- Volcando estructura para tabla recetas.procedimientos
CREATE TABLE IF NOT EXISTS `procedimientos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  `tiempo` float DEFAULT NULL,
  `receta_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  KEY `receta_id` (`receta_id`),
  CONSTRAINT `FK_procedimientos_recetas` FOREIGN KEY (`receta_id`) REFERENCES `recetas` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla recetas.procedimientos: ~1 rows (aproximadamente)
INSERT INTO `procedimientos` (`Id`, `nombre`, `tiempo`, `receta_id`) VALUES
	(1, 'Coser el maiz, molerlo, etc etc', 3, 1),
	(3, 'Lavar el pescado, sacarle las escamas, empanizar el pesacdo y freirlo en una caserola con acaeite caliente', 1, 2);

-- Volcando estructura para tabla recetas.recetas
CREATE TABLE IF NOT EXISTS `recetas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `descripcion` text NOT NULL,
  `tiempo` int(11) NOT NULL DEFAULT 0,
  `imagen` text DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla recetas.recetas: ~2 rows (aproximadamente)
INSERT INTO `recetas` (`Id`, `nombre`, `descripcion`, `tiempo`, `imagen`) VALUES
	(1, 'Nacatamales de pollo', 'Comida tipica nicargauense hecha a base de masa de maiz, rellena con carne de pollo, arroz, papas,cebolla, chiltoma, ajo etc', 2, NULL),
	(2, 'Pescado Frito', 'Comida tipica de la gastronomia de nicaragua, consiste en pescado frito acompañado de arroz, ensalada de repollo y salsa de tomate', 1, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
