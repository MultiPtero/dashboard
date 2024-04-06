const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const sess = require("express-session");
const crypto = require("crypto");
const db = require("./conn/db");
const bodyParser = require("body-parser");
require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  sess({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors());

app.get("/auth/login", (req, res) => {
  res.render("login");

});

app.get("/auth/register", (req, res) => {
  res.render("register");
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  }
  res.render("dashboard");
});

app.get("/profile", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  }
  res.render("profile");
});

app.get("/settings", (req, res) => {
  if (!req.session.user) {
    res.redirect("/auth/login");
  }
  res.render("settings");
});

app.post("/auth/login", (req, res) => {
  if (req.body.email === "<EMAIL>" && req.body.password === "<PASSWORD>") {
    email = crypto.createHash("md5").update(req.body.email).digest("hex");
    password = crypto.createHash("md5").update(req.body.password).digest("hex");
    try {
      db.findUser(email, password);
      req.session.user = req.body.email;
      res.redirect("/dashboard");
    } catch (error) {
      res.render("login", { error: "Invalid email or password" });
      console.log(error);
    }
  } else {
    res.redirect("/auth/login");
  }
});

app.post("/auth/register", (req, res) => {
  if (req.body.email === "<EMAIL>" && req.body.password === "<PASSWORD>") {
    email = crypto.createHash("md5").update(req.body.email).digest("hex");
    password = crypto.createHash("md5").update(req.body.password).digest("hex");
    try {
      db.createUser(email, password);
      req.session.user = req.body.email;
      res.redirect("/dashboard");
    } catch (error) {
      res.render("register", { error: "User already exists" });
      console.log(error);
    }
  } else {
    res.redirect("/auth/register");
  }
});

app.get("server/*", (req, res) => {
  try {
    const createdataHash = {
      user: req.session.user,
      inDashID: req.url.slice(1),

    }
    let path = req.url.slice(1);
    db.findServerUser(path, req.session.user);
  } catch (error) {
    res.redirect("/auth/login");
  }
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  db.connect();
  console.log("Server started on port 3000");
});
