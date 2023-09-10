const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please inter card title"],
    },
    description: {
      type: String,
      required: [true, "please inter card description"],
    },
    image: {
      type: String,
      required: [true, "please inter card image"],
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
