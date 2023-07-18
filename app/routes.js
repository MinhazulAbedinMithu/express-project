const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Home Route");
  res.status(200).json({ message: "Home Route" });
});

router.get("/health", (req, res) => {
  res.json({ message: "App always working!" });
});

module.exports = router;
