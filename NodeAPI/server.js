console.log("This is going to be my server entry file to start express server");
let express = require("express"); //just name of module installed or core modules
let router = require("./router");// complete path of the file/module that has been created
let cors = require("cors");
global.port = process.env.port || 9090;
const bodyParser = require("body-parser");

let app = express(); //initializing the express app
app.use(bodyParser.urlencoded({extended:false})); //middle-ware 
app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

app.use(bodyParser.json({limit:'2mb', extended:false}));
app.use(cors());//inserting cors middleware gloabaly to all api's on 9090 port

app.use("/", router);
// app.use("/user", userRouter);
// app.use("/product", productRouter);

console.log("server is listening at port : "+global.port)
app.listen(global.port);