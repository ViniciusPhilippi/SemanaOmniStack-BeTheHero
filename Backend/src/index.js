const express = require('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

app.use(cors ());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Método HTTP
 * 
 * GET: Buscar informação do back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 * Route Params: parâmetro utilizados para identificar recursos 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: Select * From user
 * Query Builder: table ('users').select('*').where()
 */