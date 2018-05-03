
create database burger_db;

use burger_db;

create table burgers(
id int auto_increment not null,
burger_name varchar(50) not null,
devoured boolean default false,
primary key (id)
);