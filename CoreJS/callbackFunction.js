//callbacks : are functions that we can pass as parameters

function name(params) {
    return "Sir "+params; 
}


function print(callback, params){
    //callback - is a function
    //params - are parameters used to execute callback function 
    console.log("Printing "+ callback(params))
}

print(name, "Tim");

//print(name("Tim"),"tim") - this passes the function with out put we need to avoid