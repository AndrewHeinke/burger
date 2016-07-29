### Schema

CREATE DATABASE burgers_db;
USE burgers_db;


  CREATE TABLE `burgers` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `burger_name` varchar(100) NOT NULL,
    `devoured` tinyint(1) NOT NULL DEFAULT '0',
    `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
  );
