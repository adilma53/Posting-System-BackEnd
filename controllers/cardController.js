const express = require('express');
const Card = require('../models/productModel');
const asyncHandler = require('express-async-handler')

const addCard = asyncHandler(
    async (req, res) =>
    {
        try
        {
            const card = await Card.create(req.body);
            res.status(200).json(card);
        }
        catch (error)
        {
            res.status(500);
            throw new Error(error.message);
        }
    }
)


// get all data from the server (fetch all cards)
const getAllCards = asyncHandler(
    async (req, res) =>
    {
        try
        {
            const cards = await Card.find({});
            res.status(200).json(cards);
        }
        catch (error)
        {
            res.status(500);
            throw new Error(error.message);
        }
    }
)


// get single card by id
const getSingleCard = asyncHandler(async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const card = await Card.findById(id);
        res.status(200).json(card);
    }
    catch (error)
    {
        res.status(500);
        throw new Error(error.message);
    }
})




// update specific data by using id (update card by id)
const updateCard = asyncHandler(
    async (req, res) =>
    {
        try
        {
            const { id } = req.params;
            const cards = await Card.findByIdAndUpdate(id, req.body);

            if (!cards)
            {
                return res.status(404).json({
                    message: `sorry can't find the card with Id ${id}`
                });
            }

            const updatedCard = await Card.findById(id);
            res.status(200).json(updatedCard);
        }
        catch (error)
        {
            res.status(500);
            throw new Error(error.message);
        }
    }
)


const deleteCard = asyncHandler(
    async (req, res) =>
    {
        try
        {
            const { id } = req.params;
            const cards = await Card.findByIdAndDelete(id);

            if (!cards)
            {
                return res.status(404).json({
                    message: `sorry can't find the card with Id ${id}`
                });
            }

            res.status(200).json(cards);
        }
        catch (error)
        {
            res.status(500);
            throw new Error(error.message);
        }

    }

)

module.exports = {
    addCard,
    getAllCards,
    getSingleCard,
    updateCard,
    deleteCard,

}
