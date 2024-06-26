-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: gamestore
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories` (
  `accessoryID` int NOT NULL AUTO_INCREMENT,
  `accessoryTitle` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `accessoryImage` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `accessoryManufacturer` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `accessoryCategories` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `accessoryDescription` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `offer` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`accessoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories`
--

LOCK TABLES `accessories` WRITE;
/*!40000 ALTER TABLE `accessories` DISABLE KEYS */;
INSERT INTO `accessories` VALUES (1,'Xbox Wireless Controller','https://m.media-amazon.com/images/I/51ZUlhG3n-L._AC_UF1000,1000_QL80_.jpg','Microsoft','Accesorio','El Xbox Wireless Controller es el control inalámbrico de la Xbox Series X, cuenta con un diseño mejorado y un botón de compartir.',0,1915.45),(2,'Nintendo Switch Pro Controller','https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UF1000,1000_QL80_.jpg','Nintendo','Accesorio','El Nintendo Switch Pro Controller es un control inalámbrico para la Nintendo Switch, con un diseño similar al de los controles de consolas tradicionales.',0,1878.09),(3,'PlayStation VR','https://m.media-amazon.com/images/I/61LfMet7s4L.jpg','Sony Interactive Entertainment','Accesorio','PlayStation VR es un sistema de realidad virtual para PlayStation 4, que permite a los usuarios experimentar juegos de realidad virtual.',0,640.81),(4,'Xbox Elite Wireless Controller Series 2','https://m.media-amazon.com/images/I/61r-M-8KuuL._AC_UF1000,1000_QL80_.jpg','Microsoft','Accesorio','El Xbox Elite Wireless Controller Series 2 es un control de alto rendimiento para Xbox One y Windows 10, con personalización y durabilidad mejoradas.',0,573.07),(5,'Nintendo Labo','https://m.media-amazon.com/images/I/71U+hQVbbQL.jpg','Nintendo','Accesorio','Nintendo Labo es una serie de kits de construcción interactivos para la Nintendo Switch, que se combinan con software de videojuegos.',1,942.94),(6,'PlayStation Camera','https://m.media-amazon.com/images/I/712rqzvqmzL._AC_UF894,1000_QL80_DpWeblab_.jpg','Sony Interactive Entertainment','Accesorio','La PlayStation Camera es una cámara para la PlayStation 4 que permite el seguimiento preciso del movimiento y la captura de videojuegos.',1,2995.47),(7,'Xbox Kinect','https://m.media-amazon.com/images/I/61mCNStKeoL._AC_UF1000,1000_QL80_.jpg','Microsoft','Accesorio','Xbox Kinect es un sensor de movimiento desarrollado por Microsoft para la Xbox 360 y la Xbox One, que permite a los usuarios controlar juegos y aplicaciones sin necesidad de un controlador físico.',1,135.34),(8,'Xbox Adaptive Controller','https://i5.walmartimages.com.mx/mg/gm/3pp/asr/536422f6-e283-4c97-b441-2cfd9f4d722f.9243990f8dd78a7b603d47092b27b501.jpeg','Microsoft','Accesorio','El Xbox Adaptive Controller es un controlador diseñado para personas con discapacidades, con botones programables y puertos de entrada personalizados.',1,700.18),(9,'Xbox 360 Wireless Racing Wheel','https://m.media-amazon.com/images/I/71ScjfApIIL.jpg','Microsoft','Accesorio','El Xbox 360 Wireless Racing Wheel es un volante inalámbrico para la Xbox 360, diseñado para juegos de carreras.',1,91.59),(10,'Nintendo Wii Remote','https://m.media-amazon.com/images/I/51tA+vYRgrL.jpg','Nintendo','Accesorio','El control remoto de Nintendo Wii es el controlador principal para la consola Nintendo Wii, conocido por su capacidad de detección de movimiento.',1,1360.72),(11,'Xbox One Chat Headset','https://m.media-amazon.com/images/I/61OZNtJfmyL.jpg','Microsoft','Accesorio','El Xbox One Chat Headset es un auricular con micrófono para la Xbox One, diseñado para chat de voz en línea.',1,522.22),(12,'PlayStation 4 DualShock 4 Back Button Attachment','https://ae01.alicdn.com/kf/S5e78cfd292ca41ce9c8a17d4b924a611f.jpg_640x640q90.jpg','Sony Interactive Entertainment','Accesorio','El DualShock 4 Back Button Attachment es un accesorio para el controlador DualShock 4 de la PlayStation 4, que agrega botones traseros programables.',1,1532.24);
/*!40000 ALTER TABLE `accessories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consoles`
--

DROP TABLE IF EXISTS `consoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consoles` (
  `consoleID` int NOT NULL AUTO_INCREMENT,
  `consoleTitle` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `consoleImage` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `consoleManufacturer` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `consoleCategories` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `consoleDescription` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `offer` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`consoleID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consoles`
--

LOCK TABLES `consoles` WRITE;
/*!40000 ALTER TABLE `consoles` DISABLE KEYS */;
INSERT INTO `consoles` VALUES (13,'PlayStation 5','https://m.media-amazon.com/images/I/41p8FiLGtrL._AC_UF1000,1000_QL80_.jpg','Sony Interactive Entertainment','Consola','La PlayStation 5 es una consola de videojuegos de la marca Sony Interactive Entertainment, sucesora de la PlayStation 4.',0,12114.53),(14,'Xbox Series X','https://ss423.liverpool.com.mx/xl/1100132318.jpg','Microsoft','Consola','La Xbox Series X es una consola de videojuegos de la marca Microsoft, sucesora de la Xbox One.',0,10395.00),(15,'Nintendo Switch','https://m.media-amazon.com/images/I/51Gz7IimgoL._AC_UF1000,1000_QL80_DpWeblab_.jpg','Nintendo','Consola','La Nintendo Switch es una consola de videojuegos híbrida, se puede usar como una consola de sobremesa y también como una consola portátil.',0,4650.50),(16,'PlayStation 4','https://m.media-amazon.com/images/I/41A5YRynOAL.jpg','Sony Interactive Entertainment','Consola','La PlayStation 4 es una consola de videojuegos de la marca Sony Interactive Entertainment, sucesora de la PlayStation 3.',0,5484.35),(17,'Nintendo 64','https://i5.walmartimages.com.mx/mg/gm/3pp/asr/0dde7ba6-d91b-477e-9fc8-600ae6f1561a.c70daf8d381713d1881f023428e4ff34.jpeg','Nintendo','Consola','La Nintendo 64 es una consola de videojuegos de quinta generación desarrollada por Nintendo. Fue lanzada en 1996 y es conocida por sus juegos en 3D como Super Mario 64 y The Legend of Zelda: Ocarina of Time.',1,1823.50),(18,'Sega Dreamcast','https://m.media-amazon.com/images/I/A1RmHOZxFKL.jpg','Sega','Consola','El Sega Dreamcast es una consola de videojuegos de sexta generación desarrollada por Sega. Fue lanzada en 1998 y fue la primera en incluir un módem para juegos en línea.',1,2213.50),(19,'PlayStation 3','https://m.media-amazon.com/images/I/41JSRhUZTIL._AC_UF1000,1000_QL80_DpWeblab_.jpg','Sony Interactive Entertainment','Consola','La PlayStation 3 es una consola de videojuegos de séptima generación desarrollada por Sony. Fue lanzada en 2006 y fue la primera en incluir un reproductor de discos Blu-ray.',1,1500.50),(20,'Xbox 360','https://m.media-amazon.com/images/I/71u5IC+Ln7L._AC_UF1000,1000_QL80_DpWeblab_.jpg','Microsoft','Consola','La Xbox 360 es una consola de videojuegos de séptima generación desarrollada por Microsoft. Fue lanzada en 2005 y fue la sucesora de la Xbox original.',1,1932.50),(21,'PlayStation Portable (PSP)','https://m.media-amazon.com/images/I/615gWr9r13L.jpg','Sony Interactive Entertainment','Consola','La PlayStation Portable es una consola de videojuegos portátil desarrollada por Sony. Fue lanzada en 2004 y fue la primera consola portátil de Sony.',1,1600.50),(22,'Nintendo GameCube','https://i5.walmartimages.com.mx/mg/gm/3pp/asr/d99c7db2-99f1-43b9-a9f1-30f61e302029.38d186afffb9624fa222585e575c54da.jpeg','Nintendo','Consola','La Nintendo GameCube es una consola de videojuegos de sexta generación desarrollada por Nintendo. Fue lanzada en 2001 y fue la sucesora de la Nintendo 64.',1,1437.50),(23,'Xbox','https://www.lukiegames.com/cdn-cgi/image/quality%3D85/assets/images/xbox/xbox_sys_orig_reg-449890.jpg','Microsoft','Consola','La Xbox es una consola de videojuegos de sexta generación desarrollada por Microsoft. Fue lanzada en 2001 y fue la primera consola de videojuegos de Microsoft.',1,2432.99),(24,'Control inalámbrico DualSense','https://m.media-amazon.com/images/I/717ZSznYGXL.jpg','Sony Interactive Entertainment','Accesorio','El DualSense es el control inalámbrico de la PlayStation 5, incluye retroalimentación háptica y gatillos adaptables.',1,7487.30);
/*!40000 ALTER TABLE `consoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `gameID` int NOT NULL AUTO_INCREMENT,
  `gameTitle` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gameImage` varchar(500) COLLATE utf8mb4_general_ci NOT NULL,
  `gameDeveloper` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gameDesigner` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gameReleaseDate` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gameCategories` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `gameDescription` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `offer` tinyint(1) DEFAULT '0',
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`gameID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'God of War','https://i.pinimg.com/736x/2e/97/43/2e9743e1252fccdcd073575d7d2d2a3e.jpg','SIE Santa Monica Studio','David Jaffe','22 de marzo de 2005','Aventura, Acción','God of War es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment.',0,988.04),(2,'The Legend of Zelda: Breath of the Wild','https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg','Nintendo EPD','Hidemaro Fujibayashi','3 de marzo de 2017','Aventura, Acción','The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura de mundo abierto desarrollado por Nintendo.',0,744.53),(3,'Red Dead Redemption 2','https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png','Rockstar Games',' ','26 de octubre de 2018','Aventura, Acción','Red Dead Redemption 2 es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona.',0,758.51),(4,'Super Mario Odyssey','https://m.media-amazon.com/images/I/81sS-oqpkLS.jpg','Nintendo EPD','Kenta Motokura','27 de octubre de 2017','Aventura, Plataformas','Super Mario Odyssey es un videojuego de plataformas de mundo abierto para la Nintendo Switch, en el que Mario y Cappy emprenden un viaje por diversos reinos para salvar a la Princesa Peach de Bowser, quien planea casarse con ella.',0,555.67),(5,'Dark Souls III','https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png','FromSoftware',' ','24 de marzo de 2016','Rol, Acción','Dark Souls III es un videojuego de rol de acción desarrollado por FromSoftware y distribuido por Bandai Namco Entertainment.',1,502.81),(6,'Minecraft','https://m.media-amazon.com/images/I/91K+4IJ2+ZL._AC_UF1000,1000_QL80_.jpg','Mojang Studios',' ','18 de noviembre de 2011','Construcción, Aventura','Minecraft es un videojuego de construcción, de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como Notch), y posteriormente desarrollado por su empresa, Mojang Studios, y ahora por Microsoft Studios.',1,847.05),(7,'Grand Theft Auto V','https://products.eneba.games/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg','Rockstar North',' ','17 de septiembre de 2013','Aventura, Acción','Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por la compañía británica Rockstar North y distribuido por Rockstar Games.',1,720.23),(8,'Cyberpunk 2077','https://assets.xboxservices.com/assets/f4/75/f475ff8f-4217-4040-99fb-bf86ed0fccb4.jpg?n=Cyberpunk-2077_GLP-Page-Hero-0_1083x1222.jpg','CD Projekt',' ','10 de diciembre de 2020','Rol, Acción','Cyberpunk 2077 es un videojuego de rol desarrollado y publicado por CD Projekt. Está ambientado en el mundo abierto de Night City, una megalópolis obsesionada por el poder, el glamur y la modificación corporal.',1,56.69),(9,'FIFA 22','https://m.media-amazon.com/images/I/817dIPZKz9L._AC_UF1000,1000_QL80_.jpg','EA Vancouver',' ','1 de octubre de 2021','Deportes, Simulación','FIFA 22 es un videojuego de simulación de fútbol desarrollado y publicado por Electronic Arts como parte de la serie FIFA.',1,129.38),(10,'Death Stranding','https://image.api.playstation.com/vulcan/img/rnd/202010/2715/O0M4r1YyNK0x8KkmiKRiuQha.png','Kojima Productions',' ','8 de noviembre de 2019','Aventura, Acción','Death Stranding es un videojuego de acción-aventura desarrollado por Kojima Productions y publicado por Sony Interactive Entertainment para PlayStation 4 y 505 Games para Microsoft Windows.',1,476.82),(11,'Animal Crossing: New Horizons','https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg','Nintendo EPD',' ','20 de marzo de 2020','Simulación, Aventura','Animal Crossing: New Horizons es un videojuego de simulación social desarrollado y publicado por Nintendo para la Nintendo Switch.',1,992.65),(12,'The Last of Us Part II','https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png','Naughty Dog',' ','19 de junio de 2020','Aventura, Acción','The Last of Us Part II es un videojuego de acción-aventura y horror de supervivencia desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.',1,522.91);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggestions`
--

DROP TABLE IF EXISTS `suggestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggestions` (
  `suggestionID` int NOT NULL AUTO_INCREMENT,
  `suggestionName` varchar(255) DEFAULT NULL,
  `suggestionMail` varchar(255) DEFAULT NULL,
  `suggestionContent` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`suggestionID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggestions`
--

LOCK TABLES `suggestions` WRITE;
/*!40000 ALTER TABLE `suggestions` DISABLE KEYS */;
INSERT INTO `suggestions` VALUES (1,'mi nombre','armandoh.ibarra@gmail.com','Lorem ipsum'),(2,'Octavio pusmor','octavio@gmail.com','Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra ridiculus maecenas fermentum tempus, accumsan curabitur lectus sollicitudin mus placerat imperdiet donec senectus netus aliquet. Blandit mollis vivamus egestas aptent risus habitant justo eu sociis, malesuada nisl et cursus porta nostra cubilia proin, ultrices faucibus gravida dignissim hendrerit ad a nascetur.'),(3,'luis','luis@gmai.com','Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra ridiculus maecenas fermentum tempus, accumsan curabitur lectus sollicitudin mus placerat imperdiet donec senectus netus aliquet. Blandit mollis vivamus egestas aptent risus habitant justo eu sociis, malesuada nisl et cursus porta nostra cubilia proin, ultrices faucibus gravida dignissim hendrerit ad a nascetur.'),(4,'Nombre','miCorreo@gmail.com','Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos cum, imperdiet eros cubilia ridiculus rutrum dictumst ultrices nascetur luctus litora, curabitur class semper gravida platea ullamcorper tellus primis. Mollis mattis lectus ad netus himenaeos quis magna duis diam iaculis scelerisque, etiam natoque quisque porta dignissim mi orci dictum taciti sapien.'),(5,'mi nombre','armandoh.ibarra@gmail.com','Lorem ipsum'),(6,'mi nombre','armandoh.ibarra@gmail.com','Lorem ipsum');
/*!40000 ALTER TABLE `suggestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `userMail` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `userPassword` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `creditCard` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `expirationDate` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ccv` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'armando','armando@gmail.com','Mayusculas12.',NULL,NULL,NULL),(2,'John Doe','john.doe@example.com','T9v!k2x@#q','4539876453201476','2029-11-21','123'),(3,'John Doe','john.doe@example.com','T9v!k2x@#q','4539876453201476','2029-11-21','123'),(4,'Lucy Williams','lucy.williams@example.com','h!G3k#5Lm1','4539876453201476','2027-06-14','745'),(5,'Mark Jones','mark.jones@example.com','A8!b@3sLq1','6011000990139424','2026-09-30','432'),(6,'a','a','a','123123','2024-05-16','123'),(7,'a','a','a','1','2024-04-30','123'),(8,'mark.jones@example.com','','A8!b@3sLq1','','',''),(9,'mark.jones@example.com','','A8!b@3sLq1','','',''),(10,'a','a','a','1','2024-04-30','123'),(11,'a','a','a','1','2024-04-30','123'),(12,'a','a','a','1','2024-04-30','123'),(13,'a','a','a','1','2024-04-30','123'),(14,'a','a','a','1','2024-04-30','123'),(15,'a','a','a','1','2024-04-30','123'),(16,'a','a','a','1','2024-04-30','123'),(17,'a','a','a','1','2024-04-30','123'),(18,'a','a','a','1','2024-04-30','123'),(19,'a','a','a','1','2024-04-30','123'),(20,'a','a','a','1','2024-04-30','123'),(21,'a','a','a','1','2024-04-30','123'),(22,'a','a','a','1','2024-04-30','123'),(23,'a','a','a','1','2024-04-30','123'),(24,'a','a','a','1','2024-04-30','123'),(25,'a','a','a','1','2024-04-30','123'),(26,'a','a','a','1','2024-04-30','123'),(27,'a','a','a','1','2024-04-30','123'),(28,'a','','a','-11','','2'),(29,'a','','a','-11','','2'),(30,'a','a','1','222','2024-05-02','123'),(31,'a','a','1','222','2024-05-02','123'),(32,'a','a','1','222','2024-05-02','123'),(33,'','','','','',''),(34,'octavio pusmor','daftpunkXD12@gmail.com','Mayusculas12.','1234123412341234','2024-05-22','123'),(35,'','','','','',''),(36,'','','','','',''),(37,'','','','','',''),(38,'armando isai hernandez ibarra','armandoh@gmail.com','123','1231231231','','123'),(39,'armando@gmail.com','','Mayusculas12.','123','',''),(40,'armando@gmail.com','','123','','',''),(41,'armando@gmail.com','','123','','',''),(42,'armando@gmail.com','','123','','',''),(43,'armando@gmail.com','','123','','',''),(44,'armando@gmail.com','','123','','',''),(45,'armando@gmail.com','','111','','',''),(46,'armando@gmail.com','','Mayusculas12.','','',''),(47,'armando@gmail.com','','123','','',''),(48,'armando@gmail.com','','123','','',''),(49,'armando@gmail.com','','123','','',''),(50,'armando@gmail.com','','123','','',''),(51,'armando@gmail.com','','Mayusculas12.','','',''),(52,'armando@gmail.com','','Mayusculas12.','','',''),(53,'armando@gmail.com','','Mayusculas12.','','',''),(54,'Mark Jones','mark.jones@example.com','A8!b@3sLq1','6011000990139424','2026-09-30','432'),(55,'Mark Jones','mark.jones@example.com','A8!b@3sLq1','6011000990139424','2026-09-30','432'),(56,'armando isai hernandez ibarra','armando@gmail.com','Mayusculas12.','1234123412341234','2002-01-01','123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-27 22:45:01
