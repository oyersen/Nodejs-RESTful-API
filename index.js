const express = require("express");
const actorRouter = require("./routers/actorRouter");
const logger = require("./middlewares/logger");
const errorHandling = require("./middlewares/errorHandling");

const server = express();
server.use(express.json());
server.use(logger); //middleware actorRouterden önce olmalıdır.Ona gelen istekleri de loglar.

server.use("/actor", actorRouter);

server.get("/", (req, res) => {
  res.send("Express is running");
});

server.use(errorHandling); //middleware actorRouterden sonra olmalıdır.Çünkü actorRouterda hata olursa bu middleware çalışır.

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
