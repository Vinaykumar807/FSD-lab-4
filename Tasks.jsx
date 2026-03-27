import { useState, useEffect } from 'react';
import { taskAPI } from './api';
import './Tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await taskAPI.getTasks();
      setTasks(response.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      alert('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) {
      alert('Please enter a task title');
      return;
    }

    setLoading(true);
    try {
      const response = await taskAPI.addTask(newTaskTitle, newTaskDesc);
      setTasks([...tasks, response.data.task]);
      setNewTaskTitle('');
      setNewTaskDesc('');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    setLoading(true);
    try {
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTask = async (id) => {
    setLoading(true);
    try {
      const response = await taskAPI.toggleTask(id);
      setTasks(tasks.map(task => 
        task.id === id ? response.data.task : task
      ));
    } catch (error) {
      console.error('Error toggling task:', error);
      alert('Failed to toggle task');
    } finally {
      setLoading(false);
    }
  };

  const handleEditStart = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDesc(task.description);
  };

  const handleEditSave = async (id) => {
    if (!editTitle.trim()) {
      alert('Please enter a task title');
      return;
    }

    setLoading(true);
    try {
      const response = await taskAPI.updateTask(id, editTitle, editDesc);
      setTasks(tasks.map(task => 
        task.id === id ? response.data.task : task
      ));
      setEditingId(null);
    } catch (error) {
      console.error('Error updating task:', error);
      alert('Failed to update task');
    } finally {
      setLoading(false);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="tasks-container">
      <h2>Task Manager App</h2>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="add-task-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="task-input"
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Enter task description (optional)..."
            value={newTaskDesc}
            onChange={(e) => setNewTaskDesc(e.target.value)}
            className="task-textarea"
            disabled={loading}
            rows="2"
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-add"
          disabled={loading}
        >
          ➕ Add Task
        </button>
      </form>

      {/* Task Stats */}
      <div className="task-stats">
        <p>Total Tasks: <strong>{tasks.length}</strong></p>
        <p>Completed: <strong>{completedCount}</strong></p>
        <p>Pending: <strong>{tasks.length - completedCount}</strong></p>
      </div>

      {/* Tasks List */}
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add one to get started! 🚀</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              {editingId === task.id ? (
                <div className="task-edit-form">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="edit-input"
                  />
                  <textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="edit-textarea"
                    rows="2"
                  />
                  <div className="edit-buttons">
                    <button
                      onClick={() => handleEditSave(task.id)}
                      className="btn btn-save"
                      disabled={loading}
                    >
                      ✓ Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="btn btn-cancel"
                    >
                      ✕ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleTask(task.id)}
                      className="task-checkbox"
                      disabled={loading}
                    />
                    <div className="task-text">
                      <h4 className="task-title">{task.title}</h4>
                      {task.description && (
                        <p className="task-description">{task.description}</p>
                      )}
                      <small className="task-date">
                        {new Date(task.createdAt).toLocaleString()}
                      </small>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => handleEditStart(task)}
                      className="btn btn-edit"
                      disabled={loading}
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="btn btn-delete"
                      disabled={loading}
                    >
                      🗑 Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {loading && <p className="loading">Processing...</p>}
    </div>
  );
}
