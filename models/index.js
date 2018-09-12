const mongoose = require("mongoose");

mongoose.set("debug", true);
// connect to the DB 'todo-api' if it exists, if not, create it and then connect to it
mongoose.connect("mongodb://localhost/todo-api");

// tell Mongo to allow use of Promises
mongoose.Promise = Promise;

// export the Todo required from todo.js (like importing a destructured object and then exporting it as an individual object)
module.exports.Todo = require("./todo");
