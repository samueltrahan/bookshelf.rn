const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
require("dotenv").config()

const key = process.env.REACT_APP_API_KEY;

app.get('/books', (req, res) => {
  console.log(key)
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.searchTerm}&printType=books&key=${process.env.REACT_APP_API_KEY}`)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => console.log(err));
});


app.listen(port, () => {
  console.log(`Listening on ${port}`)
})