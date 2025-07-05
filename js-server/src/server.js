const express = require('express');

const app = express();
const PORT = 8001;

// Middleware for parsing JSON
app.use(express.json());

// Basic middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint (optional)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/health to check server status`);
});

module.exports = app;
