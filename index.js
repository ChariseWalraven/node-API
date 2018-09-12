const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

const todoRoutes = require("./routes/todos");

// todos routes
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(port, console.log("App is running on port " + port));
