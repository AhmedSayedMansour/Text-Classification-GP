var express = require("express");
var router = express.Router();
var classifyController = require("../controllers/classify");

/* GET home page. */
router.post("/classify", classifyController.getClass);

module.exports = router;
