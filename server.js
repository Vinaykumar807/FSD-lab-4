import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let counterValue = 0;
let tasks = [];

// ============== COUNTER ROUTES ==============

// Get current counter value
app.get('/api/counter', (req, res) => {
  res.json({ value: counterValue });
});

// Increment counter
app.post('/api/counter/increment', (req, res) => {
  counterValue++;
  res.json({ value: counterValue, message: 'Counter incremented' });
});

// Decrement counter
app.post('/api/counter/decrement', (req, res) => {
  counterValue--;
  res.json({ value: counterValue, message: 'Counter decremented' });
});

// Reset counter
app.post('/api/counter/reset', (req, res) => {
  counterValue = 0;
  res.json({ value: counterValue, message: 'Counter reset' });
});

// Set counter to specific value
app.post('/api/counter/set', (req, res) => {
  const { value } = req.body;
  if (typeof value === 'number') {
    counterValue = value;
    res.json({ value: counterValue, message: 'Counter set' });
  } else {
    res.status(400).json({ error: 'Invalid value' });
  }
});

// ============== TASK ROUTES ==============

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json({ tasks });
});

// Add a new task
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTask = {
    id: Date.now(),
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  res.status(201).json({
    message: 'Task added',
    task: newTask
  });
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  if (title) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;
  
  res.json({
    message: 'Task updated',
    task
  });
});

// Toggle task completion
app.patch('/api/tasks/:id/toggle', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === parseInt(id));
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  task.completed = !task.completed;
  res.json({
    message: 'Task toggled',
    task
  });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== parseInt(id));
  
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json({ message: 'Task deleted' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
