const express = require("express");
const UserModel = require("../src/models/user.model");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", "src/views");

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  if (req.method === "POST") {
    console.log(req.body);
  }

  next();
});

//Enviando um HTML para o front end
app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Home Page!</h1>");
});

//Enviando dados dos registros para um EJS
app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});

  res.render("index", { users });
});

//Buscando todos os registros
app.get("/users", async (req, res) => {
  try {
    const user = await UserModel.find({});

    res.json(user).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Buscando os registros pelo ID
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    res.json(user).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Criando um novo registro
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Alterando um registro
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.json(user).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Deletando um registro
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.json(user).status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
