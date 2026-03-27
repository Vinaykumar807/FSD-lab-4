# Quick Start Guide

## Step 1: Install Backend Dependencies

Open a terminal in the `backend` folder:

```bash
cd backend
npm install
```

This will install Express and CORS.

## Step 2: Start the Backend Server

In the same terminal:

```bash
npm run dev
```

You should see:
```
Backend server running on http://localhost:5000
```

## Step 3: Install Frontend Dependencies

Open a **NEW terminal** and navigate to the `frontend` folder:

```bash
cd frontend
npm install
```

This will install React, Vite, and Axios.

## Step 4: Start the Frontend Server

In the frontend terminal:

```bash
npm run dev
```

You should see something like:
```
  VITE v5.0.0  ready in XX ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

The browser should automatically open to `http://localhost:3000`

## Step 5: Test the App

### Counter Tab
- Click ➕ Increment to increase the counter
- Click ➖ Decrement to decrease the counter
- Click 🔄 Reset to reset to 0
- Watch the values update from the backend API

### Tasks Tab
- Type a task title and optional description
- Click ➕ Add Task
- Check the checkbox to mark as complete
- Click ✎ Edit to modify a task
- Click 🗑 Delete to remove a task
- View statistics (Total, Completed, Pending)

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:
- Kill the process using the port
- Or modify the port in the respective config file

### CORS Error
Make sure:
- Backend is running on `http://localhost:5000`
- Frontend is running on `http://localhost:3000`
- CORS is enabled in backend/server.js

### API Not Responding
- Check that backend server is running
- Check browser console for errors
- Verify API endpoint URL in frontend/src/api.js

## Next Steps
1. Add a database (MongoDB, PostgreSQL)
2. Add user authentication
3. Add task categories and filtering
4. Deploy to Heroku/Vercel
5. Add dark mode toggle
