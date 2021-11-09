
const GetApi = async (ctx) => {
  try {

    
    ctx.body = 'Hello World';

  } catch (error) {
    console.error(error);
    ctx.body = 'Hello World';

  }
};

module.exports = {
  GetApi,
};
