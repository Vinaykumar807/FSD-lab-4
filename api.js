import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add response interceptor for better error handling
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', {
      message: error.message,
      code: error.code,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      status: error.response?.status,
    });
    return Promise.reject(error);
  }
);

// Counter API calls
export const counterAPI = {
  getCounter: () => apiClient.get('/counter'),
  incrementCounter: () => apiClient.post('/counter/increment'),
  decrementCounter: () => apiClient.post('/counter/decrement'),
  resetCounter: () => apiClient.post('/counter/reset'),
  setCounter: (value) => apiClient.post('/counter/set', { value }),
};

// Task API calls
export const taskAPI = {
  getTasks: () => apiClient.get('/tasks'),
  addTask: (title, description) => 
    apiClient.post('/tasks', { title, description }),
  updateTask: (id, title, description) =>
    apiClient.put(`/tasks/${id}`, { title, description }),
  toggleTask: (id) =>
    apiClient.patch(`/tasks/${id}/toggle`),
  deleteTask: (id) =>
    apiClient.delete(`/tasks/${id}`),
};

export default apiClient;
