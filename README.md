# Frontend Application

React.js frontend for Counter and Task management applications.

## Installation

```bash
npm install
```

## Running the Development Server

```bash
npm run dev
```

The application will open on `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
```

## Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **axios** - HTTP client for API calls
- **vite** - Build tool and dev server

## Project Structure

```
src/
├── App.jsx           # Main application component
├── App.css           # Main application styles
├── Counter.jsx       # Counter component
├── Counter.css       # Counter styles
├── Tasks.jsx         # Tasks manager component
├── Tasks.css         # Tasks styles
├── api.js            # API service with axios
├── main.jsx          # React entry point
└── index.css         # Global styles

index.html           # HTML template
vite.config.js       # Vite configuration
package.json         # Dependencies and scripts
```

## Components

### Counter Component
Manages a global counter with increment, decrement, and reset functionality. Communicates with the backend API.

### Tasks Component
Manages a list of tasks with CRUD operations. Features include:
- Add new tasks
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- View task statistics

### App Component
Main application component that manages tab navigation between Counter and Tasks apps.

## API Communication

All API calls are made through the `api.js` service which uses axios. The base URL is `http://localhost:5000/api`

## Features

- ✅ Real-time data synchronization with backend
- ✅ Responsive design for mobile and desktop
- ✅ Beautiful gradient UI with smooth animations
- ✅ Error handling and loading states
- ✅ Tab-based navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add task categories/tags
- Add task filtering and search
- Add dark mode toggle
- Add user authentication
- Add local storage for offline support
- Add drag-and-drop task reordering
- Add task notifications
