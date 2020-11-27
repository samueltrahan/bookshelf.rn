const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

const key = process.env.API_KEY;

app.get('/books', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.searchTerm}&key=${key}`)
  .then((response) => {
    console.log(response.data)
    res.send(response.data)
  })
  .catch((err) => console.log(err));
});


app.listen(port, () => {
  console.log(`Listening on ${port}`)
})