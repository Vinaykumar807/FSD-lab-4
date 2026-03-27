# FSD Lab 4 - Counter & Task App

A full-stack application built with React (frontend) and Node.js/Express (backend).

## Features

### Counter App
- ✅ Increment counter
- ✅ Decrement counter
- ✅ Reset counter to 0
- ✅ Real-time updates from backend

### Task Manager App
- ✅ Add new tasks with title and description
- ✅ View all tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ View task statistics (total, completed, pending)
- ✅ Timestamps for each task

## Project Structure

```
FSD lab 4/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── package.json       # Backend dependencies
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── App.css        # App styling
│   │   ├── Counter.jsx    # Counter component
│   │   ├── Counter.css    # Counter styling
│   │   ├── Tasks.jsx      # Tasks component
│   │   ├── Tasks.css      # Tasks styling
│   │   ├── api.js         # API service with axios
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   └── README.md
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

   Backend will run on `http://localhost:5000`

### Frontend Setup

1. In a new terminal, navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend will open on `http://localhost:3000`

## API Endpoints

### Counter Endpoints
- `GET /api/counter` - Get current counter value
- `POST /api/counter/increment` - Increment counter
- `POST /api/counter/decrement` - Decrement counter
- `POST /api/counter/reset` - Reset counter to 0
- `POST /api/counter/set` - Set counter to specific value

### Task Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion status
- `DELETE /api/tasks/:id` - Delete task

## Technology Stack

**Backend:**
- Node.js
- Express.js
- CORS

**Frontend:**
- React 18
- Vite
- Axios
- CSS3

## Usage

1. Once both servers are running, open your browser to `http://localhost:3000`

2. **Counter App:**
   - Click "+Increment" to increase counter
   - Click "-Decrement" to decrease counter
   - Click "🔄 Reset" to set counter to 0

3. **Task Manager App:**
   - Enter task title and optional description
   - Click "➕ Add Task" to create
   - Check the checkbox to mark task as complete
   - Click "✎ Edit" to modify a task
   - Click "🗑 Delete" to remove a task
   - View statistics at the top

## Future Enhancements
- Add task categories/tags
- Add due dates for tasks
- Add task filtering/search
- Add user authentication
- Add database persistence (MongoDB/PostgreSQL)
- Add dark mode toggle
- Add task priority levels

## License
MIT
