const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["Node JS", "JavaScript", "React Native"];

server.use((req, res, next) => {
  console.log("Requisição chamada");

  return next();
});

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.get("/cursos/:index", () => {
  const { index } = req.params;

  return resizeBy.json(cursos[index]);
});

server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;
  return res.json(cursos);
});

server.listen(3000);
