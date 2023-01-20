import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubmitForm from './SubmitForm';
import LogHistory from './LogHistory';

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get('/api/logs');
      setLogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (message, category) => {
    try {
      const response = await axios.post('/api/submit', { message, category });
      if (response.data.message === 'Message submitted successfully') {
        fetchLogs();
        alert('Message submitted successfully');
      } else {
        alert('Error submitting message');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <SubmitForm onSubmit={handleSubmit} />
      <LogHistory logs={logs} />
    </div>
  );
}

export default App;
