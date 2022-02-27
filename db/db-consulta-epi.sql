-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-02-2022 a las 04:16:36
-- Versión del servidor: 10.1.48-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db-consulta-epi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `webconsultaroles`
--

CREATE TABLE IF NOT EXISTS `webconsultaroles` (
  `idRol` int(11) NOT NULL,
  `rol` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `webconsultaroles`
--

INSERT INTO `webconsultaroles` (`idRol`, `rol`, `fecha_creacion`) VALUES
(1, 'Administrador', '2020-05-05 14:54:20'),
(2, 'Consultor', '2020-05-05 14:54:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `webconsultausuarios`
--

CREATE TABLE IF NOT EXISTS `webconsultausuarios` (
  `idUsuario` int(11) NOT NULL,
  `dni` text NOT NULL,
  `ApellidoPaterno` text NOT NULL,
  `ApellidoMaterno` text NOT NULL,
  `Nombres` text NOT NULL,
  `cuenta` text NOT NULL,
  `clave` text NOT NULL,
  `correo` text NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` int(11) NOT NULL DEFAULT '0',
  `rol` int(11) NOT NULL,
  `intentosLog` int(11) NOT NULL DEFAULT '0',
  `SesionActiva` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `webconsultausuarios`
--

INSERT INTO `webconsultausuarios` (`idUsuario`, `dni`, `ApellidoPaterno`, `ApellidoMaterno`, `Nombres`, `cuenta`, `clave`, `correo`, `fecha_creacion`, `estado`, `rol`, `intentosLog`, `SesionActiva`) VALUES
(1, '77478995', 'Castro', 'Palacios', 'Olger Ivan', 'ocastrop', '$2a$07$usesomesillystringforewjWfwJ5ZbSPk5uShxHbFyVMRYyIIDoK', 'ocastrop@hnseb.gob.pe', '2020-05-05 14:56:57', 1, 1, 0, 0),
(2, '40195996', 'Rosas', 'Sanchez', 'Mónica Nohemí', 'rosasmn', '$2a$07$usesomesillystringforewjWfwJ5ZbSPk5uShxHbFyVMRYyIIDoK', 'rosasmn@hnseb.gob.pe', '2020-05-05 15:00:37', 1, 2, 0, 0),
(3, '09966920', 'Sernaque', 'Quintana', 'Javier Octavio', 'jsernaqueq', '$2a$07$usesomesillystringforewjWfwJ5ZbSPk5uShxHbFyVMRYyIIDoK', 'jsernaqueq@hnseb.gob.pe', '2020-05-05 15:08:28', 1, 2, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `webconsultaroles`
--
ALTER TABLE `webconsultaroles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `webconsultausuarios`
--
ALTER TABLE `webconsultausuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `webconsultaroles`
--
ALTER TABLE `webconsultaroles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `webconsultausuarios`
--
ALTER TABLE `webconsultausuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
