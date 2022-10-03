const fs = require("fs");
const path = require("path");

// Criar um  a pasta
fs.mkdir(path.join(__dirname, "test"), (error) => {
  if (error) {
    return console.log("Pasta já existe!");
  }
  console.log("Pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello, Node! ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo Criado com sucesso!");
  }
);

// Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello, World! ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo alterado com sucesso!");
  }
);

// Lendo um arquivo
fs.readFile(path.join(__dirname, "test", "test.txt"), "utf8", (error, data) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log(data);
});
