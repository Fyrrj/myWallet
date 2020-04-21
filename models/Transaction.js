const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Wpisz nazwę transakcji"],
  },
  amount: {
    type: Number,
    required: [true, "Wpisz dodatnią lub ujemną wartość transakcji"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
