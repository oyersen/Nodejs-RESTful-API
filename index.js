const express = require("express");
const actorRouter = require("./routers/actorRouter");

const server = express();
server.use(express.json());
server.use("/actor", actorRouter);

server.get("/", (req, res) => {
  res.send("Express is running");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
