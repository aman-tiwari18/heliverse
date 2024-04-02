const mongoose = require("mongoose");

const { MONGO_URI } = require("../constants/index");

exports.connectDatabase = () => {
  console.log(MONGO_URI);
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log(`MongoDB Database connected`))
    .catch((error) => console.log(error));
};
