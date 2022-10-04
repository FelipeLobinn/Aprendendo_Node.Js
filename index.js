//const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect");

dotenv.config();
connectToDataBase();

//const person = new Person("Felipe");

//console.log(person.sayMyName());

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
//require("./modules/express");
