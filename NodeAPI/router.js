let express = require("express");
//let router = express.Router({caseSensitive:true});
let router = express.Router();
let testUserDateModel = require("./DataModel/TestUserDataModel");
let UserModel = require("./DataModel/UserDataModel");
let ProductModel = require("./DataModel/ProductDataModel"),
CartModel = require("./DataModel/CartDataModel");

//cart api's
router.post("/api/saveUserCart",(req, res)=>{

    CartModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        
        if (err){
            console.log("got an error!");            
            res.send(err);
        }

        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new CartModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the cart for given user
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart;
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });
});

router.post("/api/getUserCart",(req, res)=>{
    CartModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});

//save product
router.post('/api/saveProduct',(req, res)=>{
    console.log(req.body);//json object that has been passed from user component state and then signinup funciton in action
    
    let ProductObjMongo = new ProductModel(req.body); //body : JSON Object passed from UI

    ProductObjMongo.save((err, data, next)=>{//data : the product with _id is returned
        if (err) {
            res.send("Error Occurred While Saving Product "+ err);
        } else{     
            res.json(data);
        }
    });
})

router.get('/api/fetchproducts',(req, res)=>{

    ProductModel.find((err, products)=>{
        if (err) {
            res.send("Error Occurred While Fetching Products "+ err);
        } else{     
            res.send(products);
        }
    })
})


//user api's start here
router.post('/api/signinupuser',(req, res)=>{
    console.log(req.body);//json object that has been passed from user component state and then signinup funciton in action
    
    UserModel.findOne({userName: req.body.userName}, (err, userObject) => { //error first callback
        if (err != null) { //if error occurs at the time of user object search
            console.log("Error :", err);
            res.send({"Err":err});
        } else if (userObject) { //user already exists - sign in
            res.json(userObject);
        } else{            
            let signUpObjUserMongo = new UserModel(req.body); //auto assigns value to
            
            // let signObjForMongo = new signInModel({
            //     userName: req.body.userName,
            //     password: req.body.password,
            //     street: req.body.street,
            //     mobile : req.body.mobile
            //   });

            signUpObjUserMongo.save((err, data, next)=>{//data : the same user object that saved and contains mongodb id
                if (err) {
                    res.send("Error Occurred While Signing Up User "+ err);
                } else{     
                    res.json(data);
                }
            });
        }
    })
})

router.get('/saveTestUser', function (req, res) { 
    //http://localhost:9090/saveTestUser?name=Tim&age=16&street=34%20street%20paris%20france&address.address1=%22my%20new%20address%22
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
    
    // testUserDateModel.find((err, data)=>{ //error first callback of mongodb

    //     if (err) {
    //         console.log(err)
    //         res.send("Got Error"+ err)
    //     } 
    //     res.json(data)       
    // });

    // testUserDateModel.findById("myid",(err, data)=>{ //error first callback of mongodb

    //         if (err) {
    //             console.log(err)
    //             res.send("Got Error"+ err)
    //         } 
    //         res.json(data)
    // });

    testUserDateModel.find((err, data)=>{ //error first callback of mongodb        

        if (err) {
            console.log(err)
            res.send("Got Error"+ err)
        }else{ 
            data = data.filter((user)=>user.name!=undefined)
            res.json(data)
        }
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