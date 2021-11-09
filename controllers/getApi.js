
const GetApi = async (ctx) => {
  try {


    // return response 
    ctx.body = 'Hello World';

  } catch (error) {
    console.error(error);

    // return error  
    ctx.body = 'Error';

  }
};

module.exports = {
  GetApi
};
