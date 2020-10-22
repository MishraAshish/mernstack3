//Promise : Proxy which doesn't knows the output at start of
//promise call back function with two objects to perform operation on resolved or rejected state
let promiseObj = new Promise(function(resolve, reject) 
{  
    setTimeout(function() {   //async callback               
        resolve({
            "status":200,
            "statusMsg":"success",
            "msg":"We are resolved"
        });
    }, 1000)

    setTimeout(function() {   //async callback               
        reject({
            "status":400,
            "statusMsg":"rejected",
            "msg":"Promise gets rejected"
        });
    }, 1000)
})
promiseObj.then((statuObj) => {  
    console.log(statuObj)
}).catch((statuObj) => {  
    console.log(statuObj)
});
console.log(promiseObj)

// create a promise object to retun user name and age if its success and return no user exists if it rejected