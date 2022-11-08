import { EventEmitter } from "events";
import express from "express";

const app = express();
const PORT = 8000;

// const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("heyEvent", () => {
  console.log("hi there, how you doing?");
});

app.get("/", (req, res, next) => {
  console.log("you hit the server");
  // res.send("<h1>hello World</h1>");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your Serever running at http://localhost:${PORT}`);
});
