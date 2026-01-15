const express = require("express");
const app = express();
const stories = require("./stories.json");

app.get("/stories", (req, res) => {
  res.json(stories);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running on", PORT));
