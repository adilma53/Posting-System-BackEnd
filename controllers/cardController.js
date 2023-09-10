const express = require('express');
const Card = require('../models/productModel');


const addCard = async (req, res) =>
{
    try
    {
        const card = await Card.create(req.body);
        res.status(200).json(card);
    } catch (error)
    {
        console.log(error.message);
        res.status(500).json({ message: error.message });

    }
}


// get all data from the server (fetch all cards)
const getAllCards = async (req, res) =>
{
    try
    {
        const cards = await Card.find({});
        res.status(200).json(cards);
    }
    catch (error)
    {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}


// get specific data from the server using id (fetch card by id)
const getSingleCard = async (req, res) =>
{
    try
    {
        const { id } = req.params;
        const cards = await Card.findById(id);

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
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}


// update specific data by using id (update card by id)
const updateCard = async (req, res) =>
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
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

const deleteCard = async (req, res) =>
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
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }

}


module.exports = {
    addCard,
    getAllCards,
    getSingleCard,
    updateCard,
    deleteCard,

}
