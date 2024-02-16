//console.log("Backend Learning");
require('dotenv').config()
//import expres from "express"
const express = require('express')

//app var using express
const app = express()

//listening on this port
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('connect on twitter')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>please login with your credentials</h1>')
  })

app.get('/youtube', () => {
  res.send('<h2>please login with your credentials</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
restart if something changed

*/