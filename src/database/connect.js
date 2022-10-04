const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.pwslysr.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Não foi possível conectar ao banco de dados!");
      }

      console.log("Conexão ao banco de dados estabelecida com sucesso!");
    }
  );
};

module.exports = connectToDataBase;
