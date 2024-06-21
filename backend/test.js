const express = require("express");
const app = express();

const PORT = 3000;
const path = require("path");

app.get('/songs', (req, res) => {
  const filePath = __dirname + '/songs';
  res.send()
})

app.listen(PORT, console.log(`Server is running on ${PORT} port.`))