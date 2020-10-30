let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router();
let testUserDateModel = require("./DataModel/TestUserDataModel");


router.get('/saveTestUser', function (req, res) { 
    console.log(req.query) //will contain : {name:"test", age:"tesdf", street:"asdasda" }
    let mongooseUserModel = new testUserDateModel(req.query);

    mongooseUserModel.save((err, data)=>{ //error first callback of mongodb

        if (err) {
            console.log(err)
            res.send("Got Error"+ err)
        } 

        res.json(data)       
    });

})

router.get('/savedUsers', function (req, res) { 
    
    testUserDateModel.find((err, data)=>{ //error first callback of mongodb

        if (err) {
            console.log(err)
            res.send("Got Error"+ err)
        } 
        res.json(data)       
    });

})

router.get('/hello',(req, res)=>{
    res.json({
        "hello":"small letters"
    })
});

router.all('*',(req, res)=>{
    res.sendFile(__dirname+"/index.html")
});

module.exports = router;