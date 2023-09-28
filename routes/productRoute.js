// Import necessary libraries and modules
const express = require("express"); // Express.js web framework
const Card = require("../models/cardModel"); // Import the "Card" model
const {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController"); // Import controller functions for handling card routes

// Create an Express Router instance
const router = express.Router();

// Define routes and associate them with controller functions
router.get("/", getCards); // GET request to get all cards
router.get("/:id", getCard); // GET request to get a card by ID
router.post("/", createCard); // POST request to create a new card
router.put("/:id", updateCard); // PUT request to update a card by ID
router.delete("/:id", deleteCard); // DELETE request to delete a card by ID

module.exports = router; // Export the router for use in the main application
