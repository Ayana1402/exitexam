// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Todo schema and model
const todoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

// API routes
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/todos', async (req, res) => {
  const { description, completed } = req.body;
  const newTodo = new Todo({
    description,
    completed,
  });

  try {
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    await Todo.findByIdAndUpdate(id, { completed });
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
