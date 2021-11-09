
const PostApi = async (ctx) => {
    try {
        let obj = ctx.request.body
      
        ctx.body = obj;
    } catch (error) {
        console.error(error);
        let obj = {
            status: false,
        };
        ctx.body = obj;

    }
};

module.exports = {
    PostApi,
};
