const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  SERVER_PORT: process.env.SERVER_PORT || "3000",
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb+srv://amantiwariald18:FX9eSkkLKuD80Eba@heliverse.yl7hjjb.mongodb.net/?retryWrites=true&w=majority&appName=heliverse",
};
