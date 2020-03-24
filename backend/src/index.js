const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Rota e recursos
*/

/*
Metodos HTTP:

GET: Buscar/Listar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizados para cirar ou alterar recursos

*/

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle...
NoSQL: MongoDB, CouchDB...
*/

app.listen(3333);

