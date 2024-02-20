### Projeto NLW-Expert-polls

Versão do no de v20.11.0
```bash
npm install
```

Criar container dos banco de dados
```bash
docker compose up -d
``` 
Criar .env
```bash
// npx prisma init

DATABASE_URL="postgresql://docker:docker@localhost:5432/polls?schema=public"
```

Iniciar projeto
```zsh
npm run dev
```

Criar as tabela do banco de dados no prisma
```bash
npx prisma migrate dev // depois nome da tabela
```
<br />
ferramentas
 - prisma studio // npx prisma studio 

<br />

ferramentas do prisma na settings.json do vscode
```bash
"[prisma]": {
    "editor.formatOnSave": true
}
```

<br />
<hr />

### Rotas
criar enquete

post:application/json

url: http://localhost:3333/polls

```bash
{
  "title": "Qual anime o desenho é melhor?",
  "options": ["naruto","dragon ball z","liga da justiça","x man evolution"]
}

// titulo da enquete
// depois as opções para votar

// retorna pollId da enquete
```
<br />

retornar informações da enquete criada

get

url: http://localhost:3333/polls/idDaEquenteCriadaPollId


<br />

votando na opção escolhida

post:application/json

url: http://localhost:3333/polls/idDaEquenteCriadaPollId/votes

```bash
{
  "pollOptionId": "idDaOpçãoEscolhida"
}

// id da opção que voce escolheu vindo da requisição get
```
<br />

### Rota do websocket

url: ws://localhost:3333/polls/PollId/results 
