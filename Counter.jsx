import { useState, useEffect } from 'react';
import { counterAPI } from './api';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch initial counter value
  useEffect(() => {
    fetchCounter();
  }, []);

  const fetchCounter = async () => {
    setLoading(true);
    try {
      const response = await counterAPI.getCounter();
      setCount(response.data.value);
    } catch (error) {
      console.error('Error fetching counter:', error);
      alert('Failed to fetch counter');
    } finally {
      setLoading(false);
    }
  };

  const handleIncrement = async () => {
    setLoading(true);
    try {
      const response = await counterAPI.incrementCounter();
      setCount(response.data.value);
    } catch (error) {
      console.error('Increment Error:', error);
      const errorMsg = error.code === 'ECONNABORTED' 
        ? 'Connection timeout. Is the backend running on http://localhost:5000?'
        : error.message === 'Network Error'
        ? 'Cannot connect to backend. Start backend with: npm run dev'
        : error.response?.statusText || 'Failed to increment counter';
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleDecrement = async () => {
    setLoading(true);
    try {
      const response = await counterAPI.decrementCounter();
      setCount(response.data.value);
    } catch (error) {
      console.error('Decrement Error:', error);
      const errorMsg = error.code === 'ECONNABORTED' 
        ? 'Connection timeout. Is the backend running on http://localhost:5000?'
        : error.message === 'Network Error'
        ? 'Cannot connect to backend. Start backend with: npm run dev'
        : error.response?.statusText || 'Failed to decrement counter';
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setLoading(true);
    try {
      const response = await counterAPI.resetCounter();
      setCount(response.data.value);
    } catch (error) {
      console.error('Error resetting counter:', error);
      alert('Failed to reset counter');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-buttons">
        <button 
          onClick={handleDecrement} 
          disabled={loading}
          className="btn btn-decrement"
        >
          ➖ Decrement
        </button>
        
        <button 
          onClick={handleReset} 
          disabled={loading}
          className="btn btn-reset"
        >
          🔄 Reset
        </button>
        
        <button 
          onClick={handleIncrement} 
          disabled={loading}
          className="btn btn-increment"
        >
          ➕ Increment
        </button>
      </div>

      {loading && <p className="loading">Updating...</p>}
    </div>
  );
}
