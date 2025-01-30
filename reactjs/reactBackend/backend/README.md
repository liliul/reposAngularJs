## Iniciar projeto
```zsh
yarn dev
```


## Requisisão url
```zsh
# criar usuario
curl -X POST http://localhost:8081/api/users -H "Content-Type: application/json" -d '{"name": "liliul", "email": "githubLiliul@email.com"}'


# listar usuario
curl http://localhost:8081/api/users


# listar usuario pelo id
curl http://localhost:8081/api/users/idUsuario 


# atualizar informação do usuario
curl -X PUT http://localhost:8081/api/users/idUsuario -H "Content-Type: application/json" -d '{"name": "Liliul", "email": "githubLiliul@email.com"}'


# deletar usuario
curl -X DELETE http://localhost:8081/api/users/idUsuario

```