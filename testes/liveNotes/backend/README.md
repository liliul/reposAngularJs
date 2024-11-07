criar banco de dados: node db.js

testar conecxão 
```
curl --request POST \
--url http://localhost:3000/notes \
--header 'content-type: application/x-www-form-urlencoded' \
--data 'content=hello world'

```