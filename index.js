/*********** import starts ***********/

"use strict";
const koa = require("koa");
var bodyParser = require('koa-bodyparser');
const PORT = "8080";

const { router } = require('./routes/routes')


const app = new koa();

app.use(bodyParser());
// app.use(cors());

app.use(router.routes()).use(router.allowedMethods())


/**
 * index port
 */
app.listen(PORT, () =>
    console.log(`Server running on port: http://localhost:${PORT}`)
);
