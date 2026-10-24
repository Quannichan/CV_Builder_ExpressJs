const express = require("express");
const cors = require("cors");
const { Route } = require("./router/route");
const { testConnection } = require("./config/connectSql");

const app = express();

app.set("trust proxy", true);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({
  limit: "10mb",
  extended: true,
}));

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    process.env.FRONTEND_URL,
  ].filter(Boolean),
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "Content-Type",
    "Accept",
    "Tokenizer",
    "Authorization",
  ],
  credentials: true,
}));

app.get("/api/test", (req, res) => {
  res.send("Hello!");
});

Route(app);

// Không gọi app.listen() hoặc server.listen() trên Vercel.
// Không tự động kiểm tra database ở mỗi lần import module.

module.exports = app;