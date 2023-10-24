<div align="center">

# Sistema CRUD com JavaScript

Projeto com objetivo de fazer um CRUD (Create, Rename, Update, Delete) em JavaScript.

<img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/>
<img alt="Node" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>

</div> <br>

> É necessário ter o banco de dados já instalado na sua máquina.

## Comandos para criar o Banco de dados:

```
create database crud;
use crud;

create table `user`(
	user_id int auto_increment not null,
	user_name varchar(200),
	primary key (user_id)
);

create table purchase_request (
	request_id int auto_increment not null,
	user_id int,
	request_name varchar(100) not null,
	request_desc varchar(100),
	request_price decimal(10,2) not null,
	request_quantities int not null,
	primary key (request_id),
	foreign key (user_id) references `user`(user_id)
);
```

## ⚙️ Como rodar:

1. É necessario que você tenha o Node instalado na sua máquina. [Baixe aqui!](https://nodejs.org/pt-br/download/package-manager)

2. Abra o CMD no local que deseja clonar o repositório e execute este comando:

```
git clone https://github.com/felipe-sant/calculadora-utilizando-classes.git
```

3. Vá no arquivo [database/connection.js](database/connection.js).

4. Troque as informações da linha 9 e 10, colocando o usuário e senha do seu mysql.

5. Para instalar as dependencias e rodar o projeto, vá para a raiz do projeto e digite:

```
npm install
node app.js
```

5. Para fechar o ambiente e sair aperte Ctrl + C:
