let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack3"); //creates db with name mernstack3 or opens a connection if already present

let UserSchema = new schemaObj({
    name: {type:String, required:true},    
    street: String,
    age:Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let TestUserModel = mongooseObj.model("testUser",UserSchema); //creates a collection with name testUsers and returns mongodb object

module.exports = TestUserModel;