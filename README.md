# demo1 - (Serverside Scripting) - underviser PSL TEC

API CRUD

Skal kunne downloade og uploade filer

MYSQL Query:
create database if not exists apidatabase;

use apidatabase;

drop table if exists tblapi;

create table tblapi (
	id int not null auto_increment primary key,
    fullname varchar(48) not null,
    email varchar(48) not null,
    student bool,
    lastupdate timestamp default now() on update now()
    );
    
    insert into tblapi 
    (fullname, email, student)
    values ('Adam Adamsen', 'adam@adam.dk', true),
    ('Bent Bentsen', 'bent@bent.dk', true),
    ('Ziegekveit B. Zhonk', 'zig@email.dk', false);
    
    create user if not exists 'apiuser'@'localhost' identified by 'apisoijsofj';
    grant select, insert, update, delete on apidatabase.tblapi to 'apiuser'@'localhost';