Api node js com mysql

M infos:
Configurar insomnia:
```bash
1. base environments:

{
	"base_url": "http://localhost:8000"
}

2. POST _.base_url/login
json
{
	"username": "liliu",
	"password": "555"
}

3. POST _.base_url/create
json
{
	"username": "liliu",
	"password": "555"
}

```

comandos do banco de dados: https://sequelize.org/docs/v7/cli/ 

Para o sequelize funcionar tem que instalar os pakages node:
```bash
1. yarn add sequelize-cli -D 
2. yarn add sequelize
3. yarn add mysql2 
```

Comandos do sequelize-cli: 
```bash
1. iniciar o sequelize: yarn sequelize-cli init

2. criar migration: yarn sequelize-cli migration:generate --name nomeDaMigration ex: create-users

3. rodar migration: yarn sequelize-cli db:migrate
```

Mysql docker:
para criar database: CREATE DATABASE apiNodejs;
```bash
create database apiNodejs;
use apiNodejs;

create table users (
    id int not null auto_increment,
    username varchar(30) not null,
    password varchar(30) not null,
    primary key (id)
);
show tables;

insert into apiNodejs.users (id, username, password) values (default, 'naruto', '222');

select * from users;
```

Acessar mysql no container docker:
```bash
docker exec -it curso-mysql mysql -uroot -p
docker inspect nomeDoContainer | grep IPAddress
```
