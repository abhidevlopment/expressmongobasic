const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//bodeparser Middleware

app.use(bodyParser.json());

//db config

const db = require("./config/keys").mongoURI;

//conect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected......"))
  .catch(err => console.log(err));

//Use routes

app.use("/api/items", items);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server is runnuing on port ${port}`));
