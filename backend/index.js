const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ethers } = require('ethers');
const nodemailer = require("nodemailer");
const app = express();
const db_uri = process.env.DB_URI;
mongoose.connect(db_uri);
const port = process.env.PORT;
const signUp = require("./Schema/signup");
const db = mongoose.connection;


db.once("open", async() => {
  console.log("Mongodb Connection Successful");
});

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    methods: ["GET","POST","PUT"],
    allowedHeaders: "*",
    credentials: true,
  })
);

app.post("/signup", async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    try {
      const user = await signUp.findOne({ username });
      if (user) {
        return res.status(401).json({ error: "User Already exists!!" });
      }
      if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords are not matching" });
      }
      const salt = await bcryptjs.genSalt(10);
      const hashedpassword = await bcryptjs.hash(password, salt);
      const sign = new signUp({
        username,
        password: hashedpassword,
      });
      await sign.save();
      res.status(201).json({ message: "User registered Successfully!!" });
    } catch {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  app.post("/login", async (req, res) => {
    try {
      const { username, password, confirmPassword } = req.body;
      if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords are not matching" });
      }
      const user = await signUp.findOne({ username });
      if (!user) {
        res.status(401).json({ error: "User not Found." });
      }
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(402).json({ error: "Invalid Credentials!!" });
      } else {
        res.status(200).json({ message: "User logged in Successfully!!" });
      }
    } catch {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.listen(port, () => {
    console.log("Server Started");
  });