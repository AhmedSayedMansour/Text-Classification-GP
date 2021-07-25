var express = require("express");
var router = express.Router();
var historyController = require("../controllers/history");

/* GET home page. */
router.get("/get/history", historyController.getHistory);
router.post("/add/history", historyController.addHistory);
router.post("/delete/history", historyController.deleteHistory);

module.exports = router;
