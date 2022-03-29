const express = require("express");
const server = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");

server.use('/', apiRouter);

server.listen(port, (err) => {
  if (err) {
    return console.log(`Jejda! Serwer NIE DZIAŁA z powodu błędu: ${err}`);
  }
  console.log(`Serwer działa na porcie ${port}`);
});
