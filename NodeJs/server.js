const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('Hi World changed to test world!')
  })

  app.get('*', function (req, res) { //recieves any uri request
    res.send('Default Response API')
  })
 
app.listen(9090)

console.log("Express is listening at 9090");