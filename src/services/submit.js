import axios from 'axios';

export const submitMessage = (message, category) => {
  axios.post('/submit', {
    message,
    category
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
}
