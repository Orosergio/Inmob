-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2021 a las 05:09:37
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inmobiliaria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE `alquiler` (
  `idAlquiler` int(11) NOT NULL,
  `idTipoAlquiler` int(11) DEFAULT NULL,
  `idInmueble` int(11) DEFAULT NULL,
  `idNivel` int(11) DEFAULT NULL,
  `idHabitacion` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `idInquilino` int(11) DEFAULT NULL,
  `fechaIngreso` datetime DEFAULT NULL,
  `fechaCobro` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alquiler`
--

INSERT INTO `alquiler` (`idAlquiler`, `idTipoAlquiler`, `idInmueble`, `idNivel`, `idHabitacion`, `precio`, `idInquilino`, `fechaIngreso`, `fechaCobro`) VALUES
(9, 1, 26, 0, 0, 15000, 18, '2021-10-21 00:00:00', '2021-10-21 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncios`
--

CREATE TABLE `anuncios` (
  `idAnuncios` int(11) NOT NULL,
  `direccion` varchar(300) DEFAULT NULL,
  `idDepartamento` int(11) DEFAULT NULL,
  `idMunicipio` int(11) DEFAULT NULL,
  `titulo` varchar(150) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `emailAnunciante` varchar(200) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `youtubeVideo` varchar(600) DEFAULT NULL,
  `imagenAnuncio` varchar(600) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `idInmueble` int(11) DEFAULT NULL,
  `idPiso` int(11) DEFAULT NULL,
  `idHab` int(11) DEFAULT NULL,
  `idUsuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `anuncios`
--

INSERT INTO `anuncios` (`idAnuncios`, `direccion`, `idDepartamento`, `idMunicipio`, `titulo`, `descripcion`, `emailAnunciante`, `telefono`, `youtubeVideo`, `imagenAnuncio`, `estado`, `idInmueble`, `idPiso`, `idHab`, `idUsuario`) VALUES
(23, '6ta Calle Avenida América', 7, 77, 'Habitación Grande YYY', 'Se alquila Habitación grande para 4 personas', 'Admin1@gmail.com', 78965412, 'NULL', '1636336841742_habitacion1.jpg', 1, 26, 22, 16, 18),
(24, 'Avenida Elena', 7, 77, 'Habitación Grande Far Far Away', 'Se alquila Habitación grande para 4 personas', 'Admin1@gmail.com', 34396597, 'NULL', '1636336841742_Casa1.jpg', 1, 26, 0, 0, 18),
(25, 'Cerrito del carmen', 7, 77, 'Casa completa en cerrito del carmen', 'Se alquila habitaciones para persona individual o a parejas.', 'Admin2@gmail.com', 20203232, 'NULL', '1636339625087_Casa2.jpg', 1, 26, 0, 0, 17),
(26, '6ta Calle', 7, 77, 'Habitación Grande', 'Se alquila Habitación grande para 4 personas', 'Admin2@gmail.com', 23443233, 'NULL', '1636339625087_Casa4.jpg', 1, 26, 0, 0, 17),
(27, 'Plaza martì', 7, 77, 'Habitación GrandeAAA', 'Se alquila Habitación grande para 4 personas', 'Admin2@gmail.com', 89563202, 'NULL', '1636339625087_Casa4.jpg', 1, 26, 0, 0, 18),
(28, 'PRUEBA DE INGRESO AWS 1', 7, 77, 'Habitación Grande AWS 1', 'Se alquila Habitación grande para 4 personas', 'Admin1@gmail.com', 89652301, 'NULL', '1636344996853_Casa3.jpg', 1, 26, 0, 0, 17),
(29, 'PRUEBA DE INGRESO AWS 1', 7, 77, 'Habitación Grande AWS 2', 'Se alquila Habitación grande para 4 personas', 'Admin2@gmail.com', 98563201, 'NULL', '1636344996853_Casa4.jpg', 1, 26, 0, 0, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacora`
--

CREATE TABLE `bitacora` (
  `idBitacora` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL,
  `proceso` varchar(600) DEFAULT NULL,
  `tabla` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `controlalquiler`
--

CREATE TABLE `controlalquiler` (
  `idControl` int(11) NOT NULL,
  `idAlquiler` int(11) DEFAULT NULL,
  `boletaPago` varchar(600) DEFAULT NULL,
  `fechaBoleta` date DEFAULT NULL,
  `descripcion` varchar(600) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `controlalquiler`
--

INSERT INTO `controlalquiler` (`idControl`, `idAlquiler`, `boletaPago`, `fechaBoleta`, `descripcion`, `estado`) VALUES
(10, 9, '1635803059282_bpEnero.png', '2021-09-25', 'Se adjunta boleta de pago del mes de Enero', NULL),
(14, 9, '1636002402286_bpFebreo.jpg', '2021-09-26', 'Se adjunta boleta de pago del mes de Enero', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `idDepartamento` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`idDepartamento`, `nombre`) VALUES
(1, 'Alta Verapaz'),
(2, 'Baja Verapaz'),
(3, 'Chimaltenango'),
(4, 'Chiquimula'),
(5, 'El Progreso'),
(6, 'Escuintla'),
(7, 'Guatemala'),
(8, 'Huehuetenango'),
(9, 'Izabal'),
(10, 'Jalapa'),
(11, 'Jutiapa'),
(12, 'Petén'),
(13, 'Quetzaltenango'),
(14, 'Quiché'),
(15, 'Retalhuleu'),
(16, 'Sacatepéquez'),
(17, 'San Marcos'),
(18, 'Santa Rosa'),
(19, 'Solola'),
(20, 'Suchitepéquez'),
(21, 'Totonicapán'),
(22, 'Zacapa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `idHabitacion` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `size` double DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `fotografia` varchar(500) DEFAULT NULL,
  `idNivel` int(11) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`idHabitacion`, `nombre`, `size`, `precio`, `fotografia`, `idNivel`, `estado`) VALUES
(16, 'Habitación 1 22', 5.5, 650, '1636326561836_habitacion1.jpg', 22, 1),
(17, 'Habitación 2 22', 5.5, 650, '1636326561836_habitacion2.jpg', 22, 1),
(18, 'Habitación 1', 5.5, 650, '1636327967258_habitacion3.jpg', 25, 1),
(19, 'Habitación 2', 5.5, 650, '1636328420981_habitacion4.jpg', 25, NULL),
(20, 'Habitación 1', 5.5, 650, '1636328420981_habitacion5.jpg', 26, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenanuncios`
--

CREATE TABLE `imagenanuncios` (
  `idImagenAnuncio` int(11) NOT NULL,
  `imagen` varchar(600) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `idAnuncio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inmueble`
--

CREATE TABLE `inmueble` (
  `idInmueble` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `direccion` varchar(550) DEFAULT NULL,
  `zona` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL,
  `deposito` double DEFAULT NULL,
  `noDepositos` int(11) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `imagen` varchar(750) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inmueble`
--

INSERT INTO `inmueble` (`idInmueble`, `nombre`, `direccion`, `zona`, `precio`, `estado`, `deposito`, `noDepositos`, `idUser`, `imagen`) VALUES
(26, 'Hall Town', '8va Avenida 15 calle', 2, 15000, 1, 14500, 4, 17, '1634615078303_House1.jpg'),
(27, 'Oakland Mall', 'Diag. 6 13-01, Cdad. de Guatemala 01010', 10, 23500, 1, 25000, 15, 18, '1634615078303_apt6.jpg'),
(28, 'CasaReal', '6ta avenida A 15-48 zona 1', 11, 6500, 1, 5000, 2, 17, '1636227448579_Casa1.jpg'),
(29, 'Casa las americas', '6ta avenida A 15-48 zona 1', 1, 6500, 1, 14500, 2, 17, '1636227448579_Casa3.jpg'),
(30, 'SolucionPendeja', '6ta avenida A 15-48 zona 1', 11, 6500, 1, 5000, 2, 17, '1636298852726_Casa4.jpg'),
(36, 'FORUM A', '2Avenida 10-50', 10, 32500, 1, 30000, 5, 18, '1636339625064_Casa4.jpg'),
(37, 'HGB', '6ta avenida A 15-48', 11, 15000, 1, 5000, 2, 18, '1636339625064_Casa2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `idMensaje` int(11) NOT NULL,
  `emisor` int(11) DEFAULT NULL,
  `receptor` int(11) DEFAULT NULL,
  `mensaje` varchar(1600) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `idMunicipio` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `idDepartamento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`idMunicipio`, `nombre`, `idDepartamento`) VALUES
(1, 'Chahal', 1),
(2, 'Chisec', 1),
(3, 'Cobán', 1),
(4, 'Fray Bartolomé de las Casas', 1),
(5, 'La Tinta', 1),
(6, 'Lanquín', 1),
(7, 'Panzós', 1),
(8, 'Raxruhá', 1),
(9, 'San Cristóbal Verapaz', 1),
(10, 'San Juan Chamelco', 1),
(11, 'San Pedro Carchá', 1),
(12, 'Santa Cruz Verapaz', 1),
(13, 'Santa María Cahabón', 1),
(14, 'Senahú', 1),
(15, 'Tamahú', 1),
(16, 'Tactic', 1),
(17, 'Tucurú', 1),
(18, 'Cubulco', 2),
(19, 'Granados', 2),
(20, 'Purulhá', 2),
(21, 'Rabinal', 2),
(22, 'Salamá', 2),
(23, 'San Jerónimo', 2),
(24, 'San Miguel Chicaj', 2),
(25, 'Santa Cruz el Chol', 2),
(26, 'Acatenango', 3),
(27, 'Chimaltenango', 3),
(28, 'El Tejar', 3),
(29, 'Parramos', 3),
(30, 'Patzicía', 3),
(31, 'Patzún', 3),
(32, 'Pochuta', 3),
(33, 'San Andrés Itzapa', 3),
(34, 'San José Poaquíl', 3),
(35, 'San Juan Comalapa', 3),
(36, 'San Martín Jilotepeque', 3),
(37, 'Santa Apolonia', 3),
(38, 'Santa Cruz Balanyá', 3),
(39, 'Tecpán', 3),
(40, 'Yepocapa', 3),
(41, 'Zaragoza', 3),
(42, 'Camotán', 4),
(43, 'Chiquimula', 4),
(44, 'Concepción Las Minas', 4),
(45, 'Esquipulas', 4),
(46, 'Ipala', 4),
(47, 'Jocotán', 4),
(48, 'Olopa', 4),
(49, 'Quezaltepeque', 4),
(50, 'San Jacinto', 4),
(51, 'San José la Arada', 4),
(52, 'San Juan Ermita', 4),
(53, 'El Jícaro', 5),
(54, 'Guastatoya', 5),
(55, 'Morazán', 5),
(56, 'San Agustín Acasaguastlán', 5),
(57, 'San Antonio La Paz', 5),
(58, 'San Cristóbal Acasaguastlán', 5),
(59, 'Sanarate', 5),
(60, 'Sansare', 5),
(61, 'Escuintla', 6),
(62, 'Guanagazapa', 6),
(63, 'Iztapa', 6),
(64, 'La Democracia', 6),
(65, 'La Gomera', 6),
(66, 'Masagua', 6),
(67, 'Nueva Concepción', 6),
(68, 'Palín', 6),
(69, 'San José', 6),
(70, 'San Vicente Pacaya', 6),
(71, 'Santa Lucía Cotzumalguapa', 6),
(72, 'Siquinalá', 6),
(73, 'Tiquisate', 6),
(74, 'Amatitlán', 7),
(75, 'Chinautla', 7),
(76, 'Chuarrancho', 7),
(77, 'Guatemala', 7),
(78, 'Fraijanes', 7),
(79, 'Mixco', 7),
(80, 'Palencia', 7),
(81, 'San José del Golfo', 7),
(82, 'San José Pinula', 7),
(83, 'San Juan Sacatepéquez', 7),
(84, 'San Miguel Petapa', 7),
(85, 'San Pedro Ayampuc', 7),
(86, 'San Pedro Sacatepéquez', 7),
(87, 'San Raymundo', 7),
(88, 'Santa Catarina Pinula', 7),
(89, 'Villa Canales', 7),
(90, 'Villa Nueva', 7),
(91, 'Aguacatán', 8),
(92, 'Chiantla', 8),
(93, 'Colotenango', 8),
(94, 'Concepción Huista', 8),
(95, 'Cuilco', 8),
(96, 'Huehuetenango', 8),
(97, 'Jacaltenango', 8),
(98, 'La Democracia', 8),
(99, 'La Libertad', 8),
(100, 'Malacatancito', 8),
(101, 'Nentón', 8),
(102, 'San Antonio Huista', 8),
(103, 'San Gaspar Ixchil', 8),
(104, 'San Ildefonso Ixtahuacán', 8),
(105, 'San Juan Atitán', 8),
(106, 'San Juan Ixcoy', 8),
(107, 'San Mateo Ixtatán', 8),
(108, 'San Miguel Acatán', 8),
(109, 'San Pedro Nécta', 8),
(110, 'San Pedro Soloma', 8),
(111, 'San Rafael La Independencia', 8),
(112, 'San Rafael Pétzal', 8),
(113, 'San Sebastián Coatán', 8),
(114, 'San Sebastián Huehuetenango', 8),
(115, 'Santa Ana Huista', 8),
(116, 'Santa Bárbara', 8),
(117, 'Santa Cruz Barillas', 8),
(118, 'Santa Eulalia', 8),
(119, 'Santiago Chimaltenango', 8),
(120, 'Tectitán', 8),
(121, 'Todos Santos Cuchumatán', 8),
(122, 'Unión Cantinil', 8),
(123, 'El Estor', 9),
(124, 'Livingston', 9),
(125, 'Los Amates', 9),
(126, 'Morales', 9),
(127, 'Puerto Barrios', 9),
(128, 'Jalapa', 10),
(129, 'Mataquescuintla', 10),
(130, 'Monjas', 10),
(131, 'San Carlos Alzatate', 10),
(132, 'San Luis Jilotepeque', 10),
(133, 'San Manuel Chaparrón', 10),
(134, 'San Pedro Pinula', 10),
(135, 'Agua Blanca', 11),
(136, 'Asunción Mita', 11),
(137, 'Atescatempa', 11),
(138, 'Comapa', 11),
(139, 'Conguaco', 11),
(140, 'El Adelanto', 11),
(141, 'El Progreso', 11),
(142, 'Jalpatagua', 11),
(143, 'Jerez', 11),
(144, 'Jutiapa', 11),
(145, 'Moyuta', 11),
(146, 'Pasaco', 11),
(147, 'Quesada', 11),
(148, 'San José Acatempa', 11),
(149, 'Santa Catarina Mita', 11),
(150, 'Yupiltepeque', 11),
(151, 'Zapotitlán', 11),
(152, 'Dolores', 12),
(153, 'El Chal', 12),
(154, 'Ciudad Flores', 12),
(155, 'La Libertad', 12),
(156, 'Las Cruces', 12),
(157, 'Melchor de Mencos', 12),
(158, 'Poptún', 12),
(159, 'San Andrés', 12),
(160, 'San Benito', 12),
(161, 'San Francisco', 12),
(162, 'San José', 12),
(163, 'San Luis', 12),
(164, 'Santa Ana', 12),
(165, 'Sayaxché', 12),
(166, 'Almolonga', 13),
(167, 'Cabricán', 13),
(168, 'Cajolá', 13),
(169, 'Cantel', 13),
(170, 'Coatepeque', 13),
(171, 'Colomba Costa Cuca', 13),
(172, 'Concepción Chiquirichapa', 13),
(173, 'El Palmar', 13),
(174, 'Flores Costa Cuca', 13),
(175, 'Génova', 13),
(176, 'Huitán', 13),
(177, 'La Esperanza', 13),
(178, 'Olintepeque', 13),
(179, 'Palestina de Los Altos', 13),
(180, 'Quetzaltenango', 13),
(181, 'Salcajá', 13),
(182, 'San Carlos Sija', 13),
(183, 'San Francisco La Unión', 13),
(184, 'San Juan Ostuncalco', 13),
(185, 'San Martín Sacatepéquez', 13),
(186, 'San Mateo', 13),
(187, 'San Miguel Sigüilá', 13),
(188, 'Sibilia', 13),
(189, 'Zunil', 13),
(190, 'Canillá', 14),
(191, 'Chajul', 14),
(192, 'Chicamán', 14),
(193, 'Chiché', 14),
(194, 'Chichicastenango', 14),
(195, 'Chinique', 14),
(196, 'Cunén', 14),
(197, 'Ixcán Playa Grande', 14),
(198, 'Joyabaj', 14),
(199, 'Nebaj', 14),
(200, 'Pachalum', 14),
(201, 'Patzité', 14),
(202, 'Sacapulas', 14),
(203, 'San Andrés Sajcabajá', 14),
(204, 'San Antonio Ilotenango', 14),
(205, 'San Bartolomé Jocotenango', 14),
(206, 'San Juan Cotzal', 14),
(207, 'San Pedro Jocopilas', 14),
(208, 'Santa Cruz del Quiché', 14),
(209, 'Uspantán', 14),
(210, 'Zacualpa', 14),
(211, 'Champerico', 15),
(212, 'El Asintal', 15),
(213, 'Nuevo San Carlos', 15),
(214, 'Retalhuleu', 15),
(215, 'San Andrés Villa Seca', 15),
(216, 'San Felipe Reu', 15),
(217, 'San Martín Zapotitlán', 15),
(218, 'San Sebastián', 15),
(219, 'Santa Cruz Muluá', 15),
(220, 'Alotenango', 16),
(221, 'Ciudad Vieja', 16),
(222, 'Jocotenango', 16),
(223, 'Antigua Guatemala', 16),
(224, 'Magdalena Milpas Altas', 16),
(225, 'Pastores', 16),
(226, 'San Antonio Aguas Calientes', 16),
(227, 'San Bartolomé Milpas Altas', 16),
(228, 'San Lucas Sacatepéquez', 16),
(229, 'San Miguel Dueñas', 16),
(230, 'Santa Catarina Barahona', 16),
(231, 'Santa Lucía Milpas Altas', 16),
(232, 'Santa María de Jesús', 16),
(233, 'Santiago Sacatepéquez', 16),
(234, 'Santo Domingo Xenacoj', 16),
(235, 'Sumpango', 16),
(236, 'Ayutla', 17),
(237, 'Catarina', 17),
(238, 'Comitancillo', 17),
(239, 'Concepción Tutuapa', 17),
(240, 'El Quetzal', 17),
(241, 'El Tumbador', 17),
(242, 'Esquipulas Palo Gordo', 17),
(243, 'Ixchiguán', 17),
(244, 'La Blanca', 17),
(245, 'La Reforma', 17),
(246, 'Malacatán', 17),
(247, 'Nuevo Progreso', 17),
(248, 'Ocós', 17),
(249, 'Pajapita', 17),
(250, 'Río Blanco', 17),
(251, 'San Antonio Sacatepéquez', 17),
(252, 'San Cristóbal Cucho', 17),
(253, 'San José El Rodeo', 17),
(254, 'San José Ojetenam', 17),
(255, 'San Lorenzo', 17),
(256, 'San Marcos', 17),
(257, 'San Miguel Ixtahuacán', 17),
(258, 'San Pablo', 17),
(259, 'San Pedro Sacatepéquez', 17),
(260, 'San Rafael Pie de la Cuesta', 17),
(261, 'Sibinal', 17),
(262, 'Sipacapa', 17),
(263, 'Tacaná', 17),
(264, 'Tajumulco', 17),
(265, 'Tejutla', 17),
(266, 'Barberena', 18),
(267, 'Casillas', 18),
(268, 'Chiquimulilla', 18),
(269, 'Cuilapa', 18),
(270, 'Guazacapán', 18),
(271, 'Nueva Santa Rosa', 18),
(272, 'Oratorio', 18),
(273, 'Pueblo Nuevo Viñas', 18),
(274, 'San Juan Tecuaco', 18),
(275, 'San Rafael las Flores', 18),
(276, 'Santa Cruz Naranjo', 18),
(277, 'Santa María Ixhuatán', 18),
(278, 'Santa Rosa de Lima', 18),
(279, 'Taxisco', 18),
(280, 'Concepción', 19),
(281, 'Nahualá', 19),
(282, 'Panajachel', 19),
(283, 'San Andrés Semetabaj', 19),
(284, 'San Antonio Palopó', 19),
(285, 'San José Chacayá', 19),
(286, 'San Juan La Laguna', 19),
(287, 'San Lucas Tolimán', 19),
(288, 'San Marcos La Laguna', 19),
(289, 'San Pablo La Laguna', 19),
(290, 'San Pedro La Laguna', 19),
(291, 'Santa Catarina Ixtahuacán', 19),
(292, 'Santa Catarina Palopó', 19),
(293, 'Santa Clara La Laguna', 19),
(294, 'Santa Cruz La Laguna', 19),
(295, 'Santa Lucía Utatlán', 19),
(296, 'Santa María Visitación', 19),
(297, 'Santiago Atitlán', 19),
(298, 'Sololá', 19),
(299, 'Chicacao', 20),
(300, 'Cuyotenango', 20),
(301, 'Mazatenango', 20),
(302, 'Patulul', 20),
(303, 'Pueblo Nuevo', 20),
(304, 'Río Bravo', 20),
(305, 'Samayac', 20),
(306, 'San Antonio Suchitepéquez', 20),
(307, 'San Bernardino', 20),
(308, 'San Francisco Zapotitlán', 20),
(309, 'San Gabriel', 20),
(310, 'San José El Idolo', 20),
(311, 'San José La Maquina', 20),
(312, 'San Juan Bautista', 20),
(313, 'San Lorenzo', 20),
(314, 'San Miguel Panán', 20),
(315, 'San Pablo Jocopilas', 20),
(316, 'Santa Bárbara', 20),
(317, 'Santo Domingo Suchitepéquez', 20),
(318, 'Santo Tomás La Unión', 20),
(319, 'Zunilito', 20),
(320, 'Momostenango', 21),
(321, 'San Andrés Xecul', 21),
(322, 'San Bartolo', 21),
(323, 'San Cristóbal Totonicapán', 21),
(324, 'San Francisco El Alto', 21),
(325, 'Santa Lucía La Reforma', 21),
(326, 'Santa María Chiquimula', 21),
(327, 'Totonicapán', 21),
(328, 'Cabañas', 22),
(329, 'Estanzuela', 22),
(330, 'Gualán', 22),
(331, 'Huité', 22),
(332, 'La Unión', 22),
(333, 'Río Hondo', 22),
(334, 'San Diego', 22),
(335, 'San Jorge', 22),
(336, 'Teculután', 22),
(337, 'Usumatlán', 22),
(338, 'Zacapa', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `idNivel` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `altura` double DEFAULT NULL,
  `size` double DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `fotografia` varchar(500) DEFAULT NULL,
  `idInmueble` int(11) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nivel`
--

INSERT INTO `nivel` (`idNivel`, `nombre`, `altura`, `size`, `precio`, `fotografia`, `idInmueble`, `estado`) VALUES
(22, 'Nivel 1 Hall', 3.5, 350, 2500, '1634615078315_apt3.jpg', 26, 1),
(23, 'Nivel 2 Hall', 3.5, 350, 3500, '1634615078315_ap1.jpg', 26, 1),
(24, 'Nivel 3 Hall', 3.5, 350, 4000, '1634615078315_ap1.jpg', 26, 1),
(25, 'APARTAMENTO27', 3.5, 350, 2500, '1636300963010_bpMarzo.webp', 27, 1),
(26, 'APARTAMENTO27-2', 3.5, 350, 1500, '1636326320943_Apartamento2.jpg', 27, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoalquiler`
--

CREATE TABLE `tipoalquiler` (
  `idTipoAlquiler` int(11) NOT NULL,
  `nombre` varchar(250) DEFAULT NULL,
  `estado` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipoalquiler`
--

INSERT INTO `tipoalquiler` (`idTipoAlquiler`, `nombre`, `estado`) VALUES
(1, 'Completo', 1),
(2, 'Parcial', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `rol` tinyint(4) DEFAULT NULL,
  `nombreUsuario` varchar(350) DEFAULT NULL,
  `contrasenia` varchar(350) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `dpi` varchar(45) DEFAULT NULL,
  `nombres` varchar(500) DEFAULT NULL,
  `apellidos` varchar(500) DEFAULT NULL,
  `fotocopiaDPI` varchar(600) DEFAULT NULL,
  `estatus` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `rol`, `nombreUsuario`, `contrasenia`, `email`, `dpi`, `nombres`, `apellidos`, `fotocopiaDPI`, `estatus`) VALUES
(17, 0, 'Admin1', '$2a$10$PS76fOFDCYtlotiHqKhLL.KfIZ9vMQ8gFcoUV4l/S7QCv6TxyMYNu', 'Admin1@gmail.com', '12345678901234', 'Admin', 'Account', 'fotocopia.jpg', NULL),
(18, 0, 'Admin2', '$2a$10$xWSf9bv0EdW9F4RJsgBpWOFDDZwzimuEcZsUNB.cmv7SSkkPDJkP.', 'Admin2@gmail.com', '1234567890123', 'Admin2', 'Account', 'fotocopia.jpg', NULL),
(19, 1, 'Marco Polo', '$2a$10$ZA1jiTDHvrwL7VFjxkRNteZGbAJ0tEI5xrUv/QMASWaJegy5WobSK', 'Marco@gmail.com', '1234567890123', 'Marco René', 'Aguilar', 'fotocopia.jpg', NULL),
(20, 1, 'René Saúl', '$2a$10$wCgJGbmO3xNVoIrpgvMNluDF8gfllYM81wq06mlwn4gGwF9mptLn2', 'reneSaul@gmail.com', '1234567890123', 'René Alejandro', 'Saúl Méndez', 'fotocopia.jpg', NULL),
(21, 0, 'Joseph Coel', '$2a$10$tLx42ZDpQX9hGlkyOiTJkeJqCsNbFuZtR4Ayb3XE8Z6xI/DC5JYN.', 'Joseph@gmail.com', '1234567890123', 'Joseph José', 'Raúl Aguilar', 'fotocopia.jpg', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`idAlquiler`),
  ADD KEY `fk_alquiTipo` (`idTipoAlquiler`),
  ADD KEY `fk_alquiInm` (`idInmueble`),
  ADD KEY `fk_alquiInqui` (`idInquilino`);

--
-- Indices de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`idAnuncios`),
  ADD KEY `fk_anuncioDep` (`idDepartamento`),
  ADD KEY `fk_anuncioMun` (`idMunicipio`);

--
-- Indices de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD PRIMARY KEY (`idBitacora`),
  ADD KEY `fk_bitaUsuario` (`IdUsuario`);

--
-- Indices de la tabla `controlalquiler`
--
ALTER TABLE `controlalquiler`
  ADD PRIMARY KEY (`idControl`),
  ADD KEY `fk_controlAquiler` (`idAlquiler`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`idHabitacion`),
  ADD KEY `fk_habNiv` (`idNivel`);

--
-- Indices de la tabla `imagenanuncios`
--
ALTER TABLE `imagenanuncios`
  ADD PRIMARY KEY (`idImagenAnuncio`),
  ADD KEY `fk_imgAnuncio` (`idAnuncio`);

--
-- Indices de la tabla `inmueble`
--
ALTER TABLE `inmueble`
  ADD PRIMARY KEY (`idInmueble`),
  ADD KEY `fk_inmUser` (`idUser`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`idMensaje`),
  ADD KEY `fk_mensEmisor` (`emisor`),
  ADD KEY `fk_mensReceptor` (`receptor`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`idMunicipio`),
  ADD KEY `fk_munidepa` (`idDepartamento`);

--
-- Indices de la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`idNivel`),
  ADD KEY `fk_nivelInm` (`idInmueble`);

--
-- Indices de la tabla `tipoalquiler`
--
ALTER TABLE `tipoalquiler`
  ADD PRIMARY KEY (`idTipoAlquiler`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  MODIFY `idAlquiler` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `idAnuncios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `bitacora`
--
ALTER TABLE `bitacora`
  MODIFY `idBitacora` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `controlalquiler`
--
ALTER TABLE `controlalquiler`
  MODIFY `idControl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `idHabitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `imagenanuncios`
--
ALTER TABLE `imagenanuncios`
  MODIFY `idImagenAnuncio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `inmueble`
--
ALTER TABLE `inmueble`
  MODIFY `idInmueble` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `idMensaje` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `nivel`
--
ALTER TABLE `nivel`
  MODIFY `idNivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `tipoalquiler`
--
ALTER TABLE `tipoalquiler`
  MODIFY `idTipoAlquiler` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD CONSTRAINT `fk_alquiInm` FOREIGN KEY (`idInmueble`) REFERENCES `inmueble` (`idInmueble`),
  ADD CONSTRAINT `fk_alquiInqui` FOREIGN KEY (`idInquilino`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `fk_alquiTipo` FOREIGN KEY (`idTipoAlquiler`) REFERENCES `tipoalquiler` (`idTipoAlquiler`);

--
-- Filtros para la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `fk_anuncioDep` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`),
  ADD CONSTRAINT `fk_anuncioMun` FOREIGN KEY (`idMunicipio`) REFERENCES `municipio` (`idMunicipio`);

--
-- Filtros para la tabla `bitacora`
--
ALTER TABLE `bitacora`
  ADD CONSTRAINT `fk_bitaUsuario` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `controlalquiler`
--
ALTER TABLE `controlalquiler`
  ADD CONSTRAINT `fk_controlAquiler` FOREIGN KEY (`idAlquiler`) REFERENCES `alquiler` (`idAlquiler`);

--
-- Filtros para la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD CONSTRAINT `fk_habNiv` FOREIGN KEY (`idNivel`) REFERENCES `nivel` (`idNivel`);

--
-- Filtros para la tabla `imagenanuncios`
--
ALTER TABLE `imagenanuncios`
  ADD CONSTRAINT `fk_imgAnuncio` FOREIGN KEY (`idAnuncio`) REFERENCES `anuncios` (`idAnuncios`);

--
-- Filtros para la tabla `inmueble`
--
ALTER TABLE `inmueble`
  ADD CONSTRAINT `fk_inmUser` FOREIGN KEY (`idUser`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD CONSTRAINT `fk_mensEmisor` FOREIGN KEY (`emisor`) REFERENCES `usuario` (`idUsuario`),
  ADD CONSTRAINT `fk_mensReceptor` FOREIGN KEY (`receptor`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `fk_munidepa` FOREIGN KEY (`idDepartamento`) REFERENCES `departamento` (`idDepartamento`);

--
-- Filtros para la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD CONSTRAINT `fk_nivelInm` FOREIGN KEY (`idInmueble`) REFERENCES `inmueble` (`idInmueble`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
