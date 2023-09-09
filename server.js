const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// routes
app.get("/", (req, res) => {
  res.send("hello from the server");
});
