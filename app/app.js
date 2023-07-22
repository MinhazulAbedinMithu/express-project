const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();

const myDB = require("../db/db");
myDB.create("user_1", 10);
myDB.create("user_2", 10);

myDB.create("user_3", 10);

myDB.create("user_4", 10);

// const tickets = myDB.find();
// console.log({ tickets });
// const winners = myDB.draw(2);
// console.log({ winners });

app.use(require("./middleware"));
app.use(require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
