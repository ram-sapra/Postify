const express = require("express");
const fs = require("fs");

const app = express();
const port = 4000;
const path = require("path");

app.set("view engine", "pug");

// app.set("views", path.join(__dirname, "views"));

app.get("/songs", (req, res) => {
  const folderPath = "./songs";
  const response = fs.readdirSync(folderPath);
  let html = [];
  response.map((element) => {
    html.push(element);
  });
  res.render("index", { html });
});

app.use("/songs", express.static(path.join(__dirname, "./songs")));

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});

// const express = require('express');
// const path = require('path');
// const app = express();

// app.get('/songs/:name', (req, res) => {
//     const filePath = path.join(__dirname, 'songs', req.params.name);
//     res.sendFile(filePath);
// })
