const koaRouter = require('koa-router');


const { GetApi } = require('../controllers/getApi')
const { PostApi } = require('../controllers/postApi')


const router = new koaRouter()


router.get("/get", GetApi);
router.post("/post", PostApi);



module.exports = {
    router,
};
