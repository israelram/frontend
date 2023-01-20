import React, { useState } from 'react';
import styled from 'styled-components';



const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const Label = styled.label`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1em;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  cursor: pointer;
`;

function SubmitForm({ onSubmit }) {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      alert('Please enter a message');
      return;
    }
    if (!category) {
      alert('Please select a category');
      return;
    }
    onSubmit(message, category);
    setMessage('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Sports">Sports</option>
          <option value="Finance">Finance</option>
          <option value="Movies">Movies</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitForm;
