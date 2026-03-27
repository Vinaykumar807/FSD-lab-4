# Backend Server

Express.js backend API server for Counter and Task management applications.

## Installation

```bash
npm install
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Routes

### Counter API
- `GET /api/counter` - Get current counter value
- `POST /api/counter/increment` - Increment counter by 1
- `POST /api/counter/decrement` - Decrement counter by 1
- `POST /api/counter/reset` - Reset counter to 0
- `POST /api/counter/set` - Set counter to specific value (requires JSON body with `value` field)

### Task API
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task (requires JSON body with `title` and optional `description`)
- `PUT /api/tasks/:id` - Update existing task
- `PATCH /api/tasks/:id/toggle` - Toggle task completion status
- `DELETE /api/tasks/:id` - Delete a task

### Health Check
- `GET /api/health` - Check if server is running

## Dependencies

- **express** - Web framework
- **cors** - Enable cross-origin requests from frontend

## Data Storage

- All data is stored in memory (non-persistent)
- Data resets when server restarts
- For production apps, consider adding a database

## Middleware

- CORS enabled for frontend communication
- JSON body parser for request data

## Future Improvements

- Add input validation
- Add error handling middleware
- Add logging
- Add database integration (MongoDB, PostgreSQL)
- Add user authentication
- Add rate limiting
- Add request logging
