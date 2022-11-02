const express = require("express");
const router = require("./src/router/friendsRouter");
const { logger, sayHi } = require("./src/middlewares/logger");
const connectDb = require("./src/Config/config");

//const sayHi = require('./src/middlewares/sayHi')
const app = express();
app.use(express.json());
//Middlewares

app.get("/", (req, res) => {
  res.status(200).send(`Homepage`);
});

app.use("/data", router);

//connectDb()
app.listen(8000, async () => {
  await connectDb();
  console.log(`server is up and running on port 8000`);
});
