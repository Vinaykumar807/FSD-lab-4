# Backend API Documentation

## Base URL
```
http://localhost:5000/api
```

## Counter Endpoints

### Get Counter Value
```
GET /counter
```

**Response:**
```json
{
  "value": 5
}
```

---

### Increment Counter
```
POST /counter/increment
```

**Response:**
```json
{
  "value": 6,
  "message": "Counter incremented"
}
```

---

### Decrement Counter
```
POST /counter/decrement
```

**Response:**
```json
{
  "value": 5,
  "message": "Counter decremented"
}
```

---

### Reset Counter
```
POST /counter/reset
```

**Response:**
```json
{
  "value": 0,
  "message": "Counter reset"
}
```

---

### Set Counter to Specific Value
```
POST /counter/set
```

**Request Body:**
```json
{
  "value": 10
}
```

**Response:**
```json
{
  "value": 10,
  "message": "Counter set"
}
```

---

## Task Endpoints

### Get All Tasks
```
GET /tasks
```

**Response:**
```json
{
  "tasks": [
    {
      "id": 1234567890,
      "title": "Complete project",
      "description": "Finish FSD lab 4",
      "completed": false,
      "createdAt": "2024-03-27T10:30:00.000Z"
    }
  ]
}
```

---

### Create New Task
```
POST /tasks
```

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

**Response:**
```json
{
  "message": "Task added",
  "task": {
    "id": 1234567899,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false,
    "createdAt": "2024-03-27T10:35:00.000Z"
  }
}
```

---

### Update Task
```
PUT /tasks/:id
```

**Request Body:**
```json
{
  "title": "Buy groceries and cook",
  "description": "Milk, eggs, bread, and cook dinner"
}
```

**Response:**
```json
{
  "message": "Task updated",
  "task": {
    "id": 1234567899,
    "title": "Buy groceries and cook",
    "description": "Milk, eggs, bread, and cook dinner",
    "completed": false,
    "createdAt": "2024-03-27T10:35:00.000Z"
  }
}
```

---

### Toggle Task Completion
```
PATCH /tasks/:id/toggle
```

**Response:**
```json
{
  "message": "Task toggled",
  "task": {
    "id": 1234567899,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": true,
    "createdAt": "2024-03-27T10:35:00.000Z"
  }
}
```

---

### Delete Task
```
DELETE /tasks/:id
```

**Response:**
```json
{
  "message": "Task deleted"
}
```

---

## Health Check
```
GET /health
```

**Response:**
```json
{
  "status": "Server is running"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid value"
}
```
or
```json
{
  "error": "Title is required"
}
```

### 404 Not Found
```json
{
  "error": "Task not found"
}
```

---

## Notes
- All data is stored in memory, so it will be lost when the server restarts
- For production, consider using a database like MongoDB or PostgreSQL
- CORS is enabled by default for frontend development
