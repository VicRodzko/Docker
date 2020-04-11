/***CREATING TABLE*/
DROP TABLE IF EXISTS `employees`;

CREATE TABLE `employees` (
  id           INT PRIMARY KEY AUTO_INCREMENT  NOT NULL,
  name         VARCHAR(255)                    DEFAULT NULL,
  positions    VARCHAR(255)                    DEFAULT NULL,
  phone        VARCHAR(255)                    DEFAULT NULL,
  location     VARCHAR(255)                    DEFAULT NULL,
  email        VARCHAR(255)                    DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* INSERT DATA */

LOCK TABLES `employees` WRITE;
INSERT INTO `employees` (name, positions, phone, location, email)
VALUES ('ADMIN', 'ADMIN', '80292020327', 'Minsk', 'admin@gmail.com');
INSERT INTO `employees` (name, positions, phone, location, email)
VALUES ('ADMIN2', 'ADMIN2', '80292020327', 'Minsk2', 'admin2@gmail.com');
UNLOCK TABLES;

DROP PROCEDURE IF EXISTS sp_GetEmployees;
DELIMITER //
CREATE PROCEDURE sp_GetEmployees()
  BEGIN
    SELECT * FROM `employees`;
  END //
DELIMITER ;
/**Drop StoreProcedure**/
CALL sp_GetEmployees();
/******************************************************************/






