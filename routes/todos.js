const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello from todos route");
});

module.exports = router;