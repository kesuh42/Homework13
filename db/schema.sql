drop database if exists burger_db;
create database burger_db;

USE burger_db;

CREATE TABLE burger(
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);