const bodyParser = require('body-parser')
const express = require('express')
const app = express()  //invocation of a function

//express allows us to create multiple applications and we can mount them as per our routes
const adminApp = express();

//global variables present to be used to access file name and path
//console.log(__dirname) 
//console.log(__filename);

app.use(bodyParser.json({limit:'2mb', extended:false}));
app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

app.get('/', function (req, res) {
    //console.log(req) //
    //res.send('Hello World')
    res.sendFile(__dirname+"/index.html")
})

//getuserbyid/:id
app.get('/test/:name/:id', function (req, res) { //request params //http://localhost:9090/test/Jack/66?name=Chris&age=55
    //console.log(req)
    res.send('Hi World changed to test world!'+req.params["name"]+ +req.params["id"] +JSON.stringify(req.query))
    //res.json(req.query); //http://localhost:9090/test/Jack?name=Chris&age=55
})

app.use("/admin",adminApp); // mounted a new application module

adminApp.get('/hello',(req, res)=>{
    res.json({
      "Application":"Admin",
      "Msg" : "New app is mounted"
    })
})

adminApp.post('/hello',(req, res)=>{
  res.json({
    "Application":"Admin",
    "Msg" : "New app is mounted"
  })
})

app.get('/hello',(req, res)=>{ //localhost:9090/style.css, localhost:9090/fileupload.js, localhost:9090/myphoto.jpeg
  //console.log("Request", req)
  console.log("Request IP Address", req.ip)


  res.json({
    "Application":"Main Application",
    "Msg" : "Response from Main App",
    "IP Address" : req.ips,
    "Method" : req.method,
    "Fresh" : req.fresh,
    "Stale" : req.stale
  })
})

app.all('/getUsers',(req, res)=>{
  res.json({
    "Application":"Main Application",
    "Msg" : "This is implemented to serve any http verb not just Get, Put, Post, Delete and Patch"
  })
})

app.all('*', function (req, res) { //recieves any uri request //wild card operator
    res.send('Default Response API')
})
 
app.listen(9090)

console.log("Express is listening at 9090");