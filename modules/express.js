const express = require("express");

const app = express();

const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Home Page!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Jonathan Pierce",
      email: "jon@pierce.com",
    },
    {
      name: "Gabriela Araujo",
      email: "gabi@araujo.com",
    },
  ];

  res.json(users).status(200);
});

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
