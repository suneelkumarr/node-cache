const express = require('express')
const app = express()
// const axios = require('axios')
const fetch = require('node-fetch-cache')
port = process.env.PORT || 4500
const getBook = (req, res) => {
    fetch('http://localhost:3000/content/get_graph_data?cnt_id=163')
    .then(async response => {
        if (!response.ok) {
          await response.ejectFromCache();
          throw new Error('Non-okay response from google.com');
        } else {
          return response.json();
        }
      })
    .then(json => res.send(json))
    .catch(err => {
      res.send('The book you are looking for is not found !!!');
    });
};

app.get('/book',getBook);
app.get('/',(req,res)=>{
    res.send("hello welcome")
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`)
})