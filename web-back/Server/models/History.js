const mongoose = require("mongoose");
const HistorySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  algorithm: {
    type: String,
    required: true,
  },
});

module.exports.History = mongoose.model("history", HistorySchema);
