//Default Parameters : are assigned in parameters as default values instead of undefined 
//and if values are not passed it assigns the default alue to it


function add(param1 = 5, param2 = 5) {
    //param2 = undefined
    return param1 + param2;
}

console.log(add(5,10));