require('dotenv').config(); // Load .env variables for environment-specific configurations

const express = require('express'); // Import Express framework
const axios = require('axios'); // Import Axios for making HTTP requests
const jwt = require('jsonwebtoken'); // Import JSON Web Token library for token generation and verification
const cors = require('cors'); // Import CORS middleware for handling cross-origin requests

const app = express(); // Initialize Express application
const PORT = 5000; // Define the port on which the server will listen

app.use(cors()); // Enable CORS for all origins (consider restricting to specific origins in production)

// Retrieve the secret key from environment variables
const SECRET_KEY = process.env.SECRET_KEY; 

// Middleware function to verify JWT in requests
const verifyToken = (req, res, next) => {
  // Extract token from the 'Authorization' header
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(403); // If no token, respond with Forbidden status

  // Verify the token using the secret key
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err); // Log verification errors
      return res.sendStatus(403); // Respond with Forbidden status if verification fails
    }
    req.user = decoded; // Attach decoded token data to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

// Route to generate a new JWT for authenticated requests
app.get('/api/token', (req, res) => {
  // Sign a new token with user data and expiration time
  const token = jwt.sign({ user: 'exampleUser' }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token }); // Send the token in the response
});

// Route to search iTunes API for media based on query parameters
app.get('/api/search', verifyToken, async (req, res) => {
  const { term, media } = req.query; // Extract search term and media type from query parameters
  try {
    // Make a GET request to the iTunes API with the provided parameters
    const response = await axios.get(`https://itunes.apple.com/search`, {
      params: { term, media },
    });
    res.json(response.data); // Send iTunes API response data back to the client
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from iTunes API' }); // Handle and respond to any errors during the request
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log a message indicating the server is running
});
