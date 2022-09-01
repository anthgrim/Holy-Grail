const express = require("express");

const PORT = 3000;
const app = express();

// Serve static files from public
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
