// Import the "Card" model and the "express-async-handler" middleware
const Card = require("../models/cardModel");
const asyncHandler = require("express-async-handler");

// Handler function to get all cards from the database
const getCards = asyncHandler(async (req, res) => {
  try {
    const cards = await Card.find({}); // Retrieve all cards from the database
    res.status(200).json(cards); // Respond with a JSON array of cards
  } catch (error) {
    res.status(500); // Set the HTTP status code to 500 (Internal Server Error)
    throw new Error(error.message); // Throw an error with the error message
  }
});

// Handler function to get a specific card by ID from the database
const getCard = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params; // Get the card ID from the request parameters
    const card = await Card.findById(id); // Find a card by its ID in the database
    res.status(200).json(card); // Respond with the card as JSON
  } catch (error) {
    res.status(500); // Set the HTTP status code to 500 (Internal Server Error)
    throw new Error(error.message); // Throw an error with the error message
  }
});

// Handler function to create a new card in the database
const createCard = asyncHandler(async (req, res) => {
  try {
    const card = await Card.create(req.body); // Create a new card with the request body
    res.status(200).json(card); // Respond with the created card as JSON
  } catch (error) {
    res.status(500); // Set the HTTP status code to 500 (Internal Server Error)
    throw new Error(error.message); // Throw an error with the error message
  }
});

// Handler function to update a card by ID in the database
const updateCard = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params; // Get the card ID from the request parameters
    const card = await Card.findByIdAndUpdate(id, req.body); // Find and update the card by ID
    // If no card is found in the database
    if (!card) {
      res.status(404); // Set the HTTP status code to 404 (Not Found)
      throw new Error(`Cannot find any card with ID ${id}`); // Throw a specific error message
    }
    const updatedCard = await Card.findById(id); // Find the updated card by ID
    res.status(200).json(updatedCard); // Respond with the updated card as JSON
  } catch (error) {
    res.status(500); // Set the HTTP status code to 500 (Internal Server Error)
    throw new Error(error.message); // Throw an error with the error message
  }
});

// Handler function to delete a card by ID from the database
const deleteCard = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params; // Get the card ID from the request parameters
    const card = await Card.findByIdAndDelete(id); // Find and delete the card by ID
    // If no card is found in the database
    if (!card) {
      res.status(404); // Set the HTTP status code to 404 (Not Found)
      throw new Error(`Cannot find any card with ID ${id}`); // Throw a specific error message
    }
    res.status(200).json(card); // Respond with the deleted card as JSON
  } catch (error) {
    res.status(500); // Set the HTTP status code to 500 (Internal Server Error)
    throw new Error(error.message); // Throw an error with the error message
  }
});

// Export the handler functions for use in routes
module.exports = {
  getCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
};
