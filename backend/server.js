

require("dotenv").config();
const express = require("express");


const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("DB ERROR:", err.message);
  });


// Test route
app.get("/", (req, res) => {
  res.send("API Running");
});

const authRoutes = require("./routes/authRoutes");
console.log(authRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

