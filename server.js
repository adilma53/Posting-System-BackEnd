const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cardRoutes = require('./routes/cardRoutes');
const errorMiddleware = require('./middleware/cardMiddleWare');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

// make the server understand JSON (its a middleware)
app.use(express.json());
// error middleware
app.use(express.urlencoded({ extended: false }))

// use the rror middleware we set up
app.use(errorMiddleware);


app.use('/api/cards', cardRoutes);


mongoose.set("strictQuery", false);

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
