-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2023 a las 00:56:39
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_acatlan`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `id_usuario`, `id_producto`, `cantidad`) VALUES
(2, 1, 1, 17),
(4, 1, 2, 6),
(7, 1, 4, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `precio` decimal(20,2) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `precio`, `imagen`) VALUES
(1, 'LG 19M38A-B.AWM Monitor 19in, VGA, Color Negro', '1399.00', 'imagen1.jpg'),
(2, 'Garmin Smartwatch Fenix 7 Solar, Touch, Bluetooth, Android/iOS, Negro - Resistente al Agua', '20499.00', 'imagen2.jpg'),
(3, 'Soporte de Organizador de Bolígrafos de Escritorio', '269.00', 'imagen3.jpg'),
(4, 'Asistente de Voz Amazon Echo Dot 5.a Generación con Alexa ', '1599.00', 'imagen4.jpg'),
(5, 'Refrigerador LG Top Mount 20 Pies Plata LT57BPSX', '12999.00', 'imagen5.avif'),
(6, 'Lavasecadora LG Digital WD12VVC4S6S 12kg', '13999.00', 'imagen6.webp'),
(7, 'Oster Horno Tostador Osterizer TSSTTV10LTB1MX silver', '1159.00', 'imagen7.jpg'),
(8, 'RabbitStorm Soporte para Computadora Portátil , Base giratoria de 360 °', '299.00', 'imagen8.jpg'),
(9, 'Teclado y mouse inalámbricos para juegos', '1566.04', 'imagen9.jpg'),
(10, 'HP All In One 205 G8 AMD Ryzen 3 8 GB 512 GB Ssd 23.8’’ Windows 11 Home', '12064.00', 'imagen10.jpg'),
(11, 'Silla de Oficina Tuvalu Negra', '2199.00', 'imagen11.avif'),
(12, 'Hub USB 7 Puertos con Switch Propio para Cada USB Color Negro', '145.00', 'imagen12.jpg'),
(13, 'Gabinete Ocelot Gaming OGMC01. Factor de Forma ATX, Micro ATX y Mini ITX', '949.00', 'imagen13.jpg'),
(14, 'SAMSUNG The Freestyle Skins para proyector portátil Inteligente', '660.45', 'imagen14.jpg'),
(15, 'Apple iPhone 11, 64GB, Rojo (Reacondicionado)', '6648.00', 'imagen15.jpg'),
(16, 'Organizador de escritorio y accesorios de oficina', '599.00', 'imagen16.jpg'),
(17, 'Aooice Cargador Inalámbrico Rápido, 20W Qi Wireless Charger Pad', '299.00', 'imagen17.jpg'),
(18, 'Teléfono IP SMB de 2 Líneas, 1 Cuenta SIP con 3 teclas de función programables y conferencia de 3 vías. 5VCD', '821.00', 'imagen18.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `usuario`, `correo`, `pass`, `imagen`) VALUES
(1, 'Jonathan', 'Córdoba', 'jonathan', 'jonathan@gmail.com', '12345', 'img-645af5db5fd849.06972124.jpg'),
(2, 'Luis', 'Martínez', 'luis', 'luis@gmail.com', '23456', ''),
(3, 'Pablo', 'López', 'pablito', 'pablo@gmail.com', 'pablo123', ''),
(4, 'Ana', 'Gómez', 'anita', 'ana@gmail.com', 'ana42', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_producto` (`id_producto`),
  ADD KEY `idx_usuario` (`id_usuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `idx_producto` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`) ON UPDATE CASCADE,
  ADD CONSTRAINT `idx_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
