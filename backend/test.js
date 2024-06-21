const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, this is the home page, for music go ahead to '/songs/");
});

app.get("/songs", (req, res) => {
  const audioPath = path.join(__dirname, "songs");
  res.sendFile(audioPath);
});

app.listen(PORT, console.log(`App is running on ${PORT}`));
