// Error middleware function for handling errors in Express routes
const errorMiddleware = (err, req, res, next) => {
  console.log("Error middleware ->"); // Log that this is the error middleware
  const statusCode = res.statusCode ? res.statusCode : 500; // Get the response status code (default to 500)
  res.status(statusCode); // Set the response status code
  res.json({
    message: err.message, // Send the error message in the response
    stack: process.env.NODE_ENV === "development" ? err.stack : null, // Send the error stack trace in development mode
  });
};

module.exports = errorMiddleware;
