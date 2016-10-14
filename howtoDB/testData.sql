drop table if exists TestData;

create table TestData(
  timestamp DATETIME,
  yaxis DOUBLE
);

insert into TestData values(NOW(),3.14);
insert into TestData values(NOW(),4.443);
insert into TestData values(NOW(),2.434);
insert into TestData values(NOW(),10.34);
insert into TestData values(NOW(),7.33);
insert into TestData values(NOW(),11.12);
o
