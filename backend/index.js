const express = require("express");
const { SERVER_PORT } = require("../backend/constants/index");
const { connectDatabase } = require("./database/connection");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

//Routes

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", userRoutes);
app.listen(SERVER_PORT, () =>
  console.log(`Example app listening on port ${SERVER_PORT}!`)
);
