const Koa = require("koa");
const Router = require("koa-router");
const render = require("koa-ejs");
const app = new Koa();
const router = new Router();



router.get("/users");

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);