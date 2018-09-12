const app = require("express")();
const port = process.env.PORT || 3000;

const todoRoutes = require("./routes/todos");

// todos routes
app.get("/", (req, res) => {
  res.send("Hello from the root route!");
});

app.use('/api/todos', todoRoutes);

app.listen(port, console.log("App is running on port " + port));