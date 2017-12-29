const express = require('express')
const bodyParser = require('body-parser')

//Create the server
const server = express()

server.get('/', (req, res) => {
  res.send('hello world')
});
