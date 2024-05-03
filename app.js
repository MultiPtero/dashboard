/**
 * |-| [- |_ | /\ ( ~|~ `/ |_
 *
 * MultiPtero 14.11.0 ― Cascade Ridge
 *
 * This file represents the main entry point of the MultiPtero application.
 * It loads the necessary packages, settings, and databases.
 * It also handles the routing and rendering of web pages.
 * @module index
 */

"use strict";
const { appSettings } = require("./settings.json");
const settings = appSettings;
// Load logging.
require("./misc/console.js")();

// Load packages.
global.Buffer = global.Buffer || require("buffer").Buffer;

if (typeof btoa === "undefined") {
  global.btoa = (str) => Buffer.from(str, "binary").toString("base64");
}
if (typeof atob === "undefined") {
  global.atob = (b64Encoded) =>
    Buffer.from(b64Encoded, "base64").toString("binary");
}

// Load settings.

const defaultThemeSettings = {
  index: "index.ejs",
  notfound: "index.ejs",
  redirect: {},
  pages: {},
  mustbeloggedin: [],
  mustbeadmin: [],
  variables: {},
};

//load mongoDB
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const db = new MongoClient(settings.database, {
  useUnifiedTopology: true,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
  } else {
    console.log("Connected to MongoDB");
  }
});

module.exports.db = db;

// Load websites.
const express = require("express");
const session = require("express-session");
const fs = require("fs");
const chalk = require("chalk");
const ejs = require("ejs");
const fetch = require("node-fetch");

const app = express();
require("express-ws")(app);

// Load express addons.

// Load the website.

module.exports.app = app;

app.use(
  session({
    secret: settings.website.secret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  express.json({
    inflate: true,
    limit: "500kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined,
  })
);

const listener = app.listen(settings.website.port, function () {
  console.clear();
  console.log(
    chalk.white(" Application is online at ") +
      chalk.gray(chalk.underline(settings.url + "/"))
  );
});

let cache = true;
app.use(function (req, res, next) {
  const manager = settings.ratelimits;
  const rateLimit = manager[req._parsedUrl.pathname];
  if (rateLimit) {
    if (cache) {
      setTimeout(async () => {
        const queryParams = new URLSearchParams(req.query).toString();
        const queryString = queryParams ? `?${queryParams}` : "";
        res.redirect(
          `${
            req._parsedUrl.pathname.startsWith("/")
              ? req._parsedUrl.pathname
              : "/" + req._parsedUrl.pathname
          }${queryString}`
        );
      }, 1000);
      return;
    } else {
      cache = true;
      setTimeout(async () => {
        cache = false;
      }, rateLimit * 1000);
    }
  }
  next();
});

// Load the API files.
const apiFiles = fs.readdirSync("./api").filter((file) => file.endsWith(".js"));

const apiFile = require(`./api/${apiFiles[0]}`);

apiFiles.forEach((file) => {
  apiFile.load(app, db);
});

app.all("*", async (req, res) => {
  if (req.session.pterodactyl) {
    const userId = await db.get(`users-${req.session.userinfo.id}`);
    if (req.session.pterodactyl.id !== userId) {
      return res.redirect("/login?prompt=none");
    }
  }

  const indexjs = require("./app.js");
  const theme = indexjs.get(req);
  const newsettings = settings;
  const mustBeLoggedIn = theme.settings.mustbeloggedin.includes(
    req._parsedUrl.pathname
  );
  if (mustBeLoggedIn && (!req.session.userinfo || !req.session.pterodactyl)) {
    return res.redirect(
      `/login${
        req._parsedUrl.pathname.startsWith("/")
          ? `?redirect=${req._parsedUrl.pathname.slice(1)}`
          : ""
      }`
    );
  }
  if (theme.settings.mustbeadmin.includes(req._parsedUrl.pathname)) {
    ejs.renderFile(
      `./views/${theme.settings.notfound}`,
      await eval(indexjs.renderdataeval),
      null,
      async function (err, str) {
        delete req.session.newaccount;
        delete req.session.password;
        if (!req.session.userinfo || !req.session.pterodactyl) {
          if (err) {
            console.log(err);
            return res.render("500.ejs", { err });
          }
          res.status(200);
          return res.send(str);
        }

        const cacheaccount = await fetch(
          `${settings.pterodactyl.domain}/api/application/users/${await db.get(
            `users-${req.session.userinfo.id}`
          )}?include=servers`,
          {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${settings.pterodactyl.key}`,
            },
          }
        );
        if ((await cacheaccount.statusText) === "Not Found") {
          if (err) {
            console.log(err);
            return res.render("500.ejs", { err });
          }
          return res.send(str);
        }
        const cacheaccountinfo = JSON.parse(await cacheaccount.text());

        req.session.pterodactyl = cacheaccountinfo.attributes;
        if (!cacheaccountinfo.attributes.root_admin) {
          if (err) {
            console.log(err);
            return res.render("500.ejs", { err });
          }
          return res.send(str);
        }

        ejs.renderFile(
          `./views/${
            theme.settings.pages[req._parsedUrl.pathname.slice(1)]
              ? theme.settings.pages[req._parsedUrl.pathname.slice(1)]
              : theme.settings.notfound
          }`,
          await eval(indexjs.renderdataeval),
          null,
          function (err, str) {
            delete req.session.newaccount;
            delete req.session.password;
            if (err) {
              console.log(err);
              return res.render("500.ejs", { err });
            }
            res.status(200);
            res.send(str);
          }
        );
      }
    );
    return;
  }
  ejs.renderFile(
    `./views/${
      theme.settings.pages[req._parsedUrl.pathname.slice(1)]
        ? theme.settings.pages[req._parsedUrl.pathname.slice(1)]
        : theme.settings.notfound
    }`,
    { settings }, // Pass settings object to the EJS template
    null,
    function (err, str) {
      delete req.session.newaccount;
      delete req.session.password;
      if (err) {
        console.log(err);
        return res.render("500.ejs", { err });
      }
      res.status(200);
      res.send(str);
    }
  );
});

module.exports.get = function (req) {
  return {
    settings: fs.existsSync(`./views/pages.json`)
      ? JSON.parse(fs.readFileSync(`./views/pages.json`).toString())
      : defaultThemeSettings,
  };
};

module.exports.islimited = async function () {
  return !cache;
};

module.exports.ratelimits = async function (length) {
  if (cache) return setTimeout(indexjs.ratelimits, 1);
  cache = true;
  setTimeout(async function () {
    cache = false;
  }, length * 1000);
};
