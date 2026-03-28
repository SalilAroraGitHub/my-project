const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API working ✅" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});