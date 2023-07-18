require("dotenv").config();
const express = require("express");

const app = require("./app/app");
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is Listening at PORT : ${PORT}`);
});
