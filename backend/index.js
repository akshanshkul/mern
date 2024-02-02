// create expreee object
const express = require("express");
// call router file router.js 
const router = require("./router");
// i use mongodb for db so create object of mongoose:it is mongodb instance for db request handels
const mongoose = require("mongoose");
// set up port number to run the server on
const cors = require("cors");
// use for add .env file for db connection
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;
// accept api request from other ports (frontend run on 3000 port)
const corsOptions = {
  origin: 'http://127.0.0.1:3000',
  optionsSuccessStatus: 200,
};
const app = express();


// create connection with mongodb 
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

// data in json 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

// check server is up 
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
