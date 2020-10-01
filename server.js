const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');

const key = process.env.API_KEY;

app.get('/books', (req, res) => {
  axios.get()
  res.send()
});


app.listen(port, () => {
  console.log(`Listening on ${port}`)
})