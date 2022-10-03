const path = require("path");

// Pegando o nome do arquivo atual
console.log(path.basename(__filename));

// Pegando o nome do diretório atual
console.log(path.dirname(__filename));

// Pegando a extensão do arquivo atual
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntando os caminhos de arquivo
console.log(path.join(__dirname, "test", "test.html"));
