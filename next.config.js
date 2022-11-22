require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    MAIN_HOST: process.env.MAIN_HOST,
  },
};
