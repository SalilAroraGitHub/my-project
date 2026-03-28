const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API working ✅" });
});

// Port setup
const port = process.env.PORT || 5000; // Render ke liye process.env.PORT use karo
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});