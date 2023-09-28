const express = require("express");
const Card = require("../models/productModel");
const {
  addCard,
  getAllCards,
  getSingleCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

// add data to database (add one card)
router.post("/addcard", addCard);

// get all data from the server (fetch all cards)
router.get("/", getAllCards);

// get specific data from the server using id (fetch card by id)
router.get("/:id", getSingleCard);

// update specific data by using id (update card by id)
router.put("/:id", updateCard);

router.delete("/:id", deleteCard);

module.exports = router;
