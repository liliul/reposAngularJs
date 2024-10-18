### Backend Todolist

## mysql
```bash
CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
```
## docker
```bash
// informações do ip do container
docker inspect nomeDocontainer/id | grep IPAddres

// mysql no docker
 docker exec -it nomeDocontainer mysql -u root -p
```

## node
```bash
node server.js
```

## postman ou insomnia
```bash
GET: http://localhost:3000/tasks // send

POST: http://localhost:3000/tasks // raw json
{
    "title": "Noma da tarefa",
    "completed": true/false
}

PUT: http://localhost:3000/tasks/idParaAtualizar // raw json
{
    "title": "Atualizar tarefa",
    "completed": true/false
}

DELETE: http://localhost:3000/tasks/idParaDeletarTarefa

```