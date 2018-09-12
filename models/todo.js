const mongoose = require("mongoose");

// define Todo schema
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank!"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// compile Todo schema into a model
const Todo = mongoose.model('Todo', todoSchema);

mondule.exports = Todo;