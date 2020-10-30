let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router();

router.get('/hello',(req, res)=>{
    res.json({
        "hello":"small letters"
    })
});

router.all('*',(req, res)=>{
    res.sendFile(__dirname+"/index.html")
});

module.exports = router;