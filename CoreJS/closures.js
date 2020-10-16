//closure : a set of two functions where outer function holds some properties and returns an innerFunction
// the properties that are returned from innerFunction are public and rest remain privately encapsulated

function OuterFunction(name, userid) {
    var age = 21; //public variables
    
    //private scope    
    var password = "password1"; //private variables
    var salary = "$200"; //private variables
    var accountDetails = "$300"; //private variables
    //private scope

    var innerFunction = function (session, country) {
        return {
            //name : name,//short-hand of creating key value pair - if the variable name and the key name are same we just use one
            name,
            userid,
            session,
            country,
            age
        }
    }
    return innerFunction;
}

var closureObject = OuterFunction("Tim","tim@synergisticit.com");
console.log(closureObject("MERNStack","USA"));


//function currying : a setup of closures where a function retruns another function by wrapping up some parameters to it is termed concept of function currying