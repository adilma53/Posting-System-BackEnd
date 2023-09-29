// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import necessary libraries and modules
const express = require("express"); // Express.js web framework
const mongoose = require("mongoose"); // MongoDB driver
const proudctRoute = require("./routes/productRoute"); // Custom product route module
const errorMiddleware = require("./middleware/errorMiddleware"); // Custom error handling middleware
var cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware

// Create an instance of the Express application
const app = express();

// Set the port for the application to listen on, with a default of 3000
const PORT = process.env.PORT || 3000;

// Get MongoDB connection URL and frontend URL from environment variables
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

// Configure CORS options
var corsOptions = {
  origin: "*", // Allow requests only from the specified frontend
  optionsSuccessStatus: 200, // Set the success status for CORS options
};

// Enable CORS for the Express app using the configured options
app.use(cors(corsOptions));

// Parse incoming JSON requests
app.use(express.json());

// Parse incoming form data
app.use(express.urlencoded({ extended: false }));

// Use the "proudctRoute" for handling requests under the "/api/cards" route
app.use("/api/cards", proudctRoute);

// Define a route for the root URL that sends a "Hello NODE API" message
app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

// Define a route for the "/blog" URL that sends a "Hello Blog, My name is Devtamin" message
app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is Devtamin");
});

// Use the custom error handling middleware
app.use(errorMiddleware);

// Configure Mongoose to allow flexible querying
mongoose.set("strictQuery", false);

// Connect to the MongoDB database using the provided URL
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB"); // Log a successful connection
    // Start the Express app and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error); // Log any errors that occur during database connection
  });
