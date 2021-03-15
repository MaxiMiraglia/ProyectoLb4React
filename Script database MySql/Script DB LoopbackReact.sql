create database test;
use test;
create table personas (id int auto_increment PRIMARY KEY NOT NULL, username varchar(40) NOT NULL, nombre varchar(40) NOT NULL, apellido varchar(40) NOT NULL, email varchar(40) NOT NULL, password varchar(40) NOT NULL);
create table user (id int auto_increment PRIMARY KEY NOT NULL, username varchar(40) NOT NULL, password varchar(200) NOT NULL, personasId int NOT NULL);
