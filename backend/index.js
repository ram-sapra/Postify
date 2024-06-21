const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000; // You can choose any port you prefer

// Middleware to serve static files from the 'songs' directory
app.use("/static", express.static(path.join(__dirname, "songs")));

// Route to list the names of the songs
app.get("/", (req, res) => {
  const songsDir = path.join(__dirname, "songs");

  fs.readdir(songsDir, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to scan directory: " + err);
    }

    // Filter to only include audio files if needed
    const songFiles = files.filter((file) => file.endsWith(".mp3")); // Adjust the extension as needed

    res.send(`
            <h1>List of Songs</h1>
            <ul>
                ${songFiles
                  .map(
                    (song) =>
                      `<video controls autoplay> <source src="/songs/${song}" type="audio/mpeg">${song}</video>`
                  )
                  .join("")}
            </ul>
        `);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
