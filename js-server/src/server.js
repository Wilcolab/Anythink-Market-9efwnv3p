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

const tasks = ["Write a diary entry from the future", "Create a time machine from a cardboard box", "Plan a trip to the dinosaurs", "Draw a futuristic city", "List items to bring on a time-travel adventure"];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (text) {
        tasks.push(text);
        res.status(201).json({ message: 'Task added successfully' });
    } else {
        res.status(400).json({ message: 'Task text is required' });
    }
});

app.get('/tasks', (req, res) => {
    res.json({ tasks });
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
