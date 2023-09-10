const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cardRoutes = require('./routes/cardRoutes');


const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;



// make the server understand JSON (its a middleware)
app.use(express.json());

app.use('/api/cards', cardRoutes);



// connect to mongodb
mongoose.
  connect(MONGO_URL)
  .then(() =>
  {
    console.log('connected to MongoDB')
    app.listen(PORT, () =>
    {
      console.log(`ADIL Node API app is running on port ${PORT}`);
    });
  }).catch((error) =>
  {
    console.log(error);
  })
