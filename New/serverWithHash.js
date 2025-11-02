const express = require("express");
const bodyParser = require("body-parser");
const argon2 = require("argon2");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static("public"));

const USERS = {}; // username -> password hash

// Serve client
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "loginWithServerHash.html"));
});

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Username & password required" });
  if (USERS[username])
    return res.status(400).json({ error: "User already exists" });

  try {
    const hash = await argon2.hash(password);
    USERS[username] = hash;
    res.json({ status: "registered", user: username });
  } catch (err) {
    res.status(500).json({ error: "Hashing failed" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const storedHash = USERS[username];
  if (!storedHash)
    return res.status(401).json({ error: "Invalid credentials" });

  try {
    if (await argon2.verify(storedHash, password)) {
      res.json({ status: "login successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch {
    res.status(500).json({ error: "Verification failed" });
  }
});

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("certs/key.pem"),
  cert: fs.readFileSync("certs/cert.pem"),
};

// Start HTTPS server
https.createServer(options, app).listen(PORT, "127.0.0.1", () => {
  console.log(`✅ HTTPS server running at https://127.0.0.1:${PORT}`);
});