const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hi', function (req, res) {
    res.send('Hi World')
  })
 
app.listen(9090)

console.log("Express is listening at 9090");