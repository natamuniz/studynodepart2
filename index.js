const express = require("express");

const server = express();

server.get("/curso:id", () => {
  const id = req.query.id;

  return resizeBy.json({ curso: `Curso: ${id}` });
});

server.listen(3000);
