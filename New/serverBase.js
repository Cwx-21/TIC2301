const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static("public"));

const USERS = {}; // username -> password (plain text for demo only)

// Serve login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginBase.html"));
});

// Register endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username & password required" });
  if (USERS[username])
    return res.status(400).json({ error: "User already exists" });
  USERS[username] = password;
  res.json({ status: "registered", user: username });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!USERS[username] || USERS[username] !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  res.json({ status: "login successful" });
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
