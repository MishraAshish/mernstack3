//Async : A way to have multi-threading in javascript like other object oriented programming language

function resolveAfter2Seconds() {

    return new Promise((resolve,reject) => {
                setTimeout(() => {
                    reject({
                        "statuscode" : 200,
                        "statusmsg" :'rejected'
                        });
                }, 2000);
    });

}
  
console.log("async Execution starts");

async function asyncCall() { //so interpreter will ask to create a new thread for this function to execute and will return on await
    console.log('calling async waiting call');
    
    await resolveAfter2Seconds()
    .then(obj=>{
        console.log(obj) 
     }).catch(obj=>{
        console.log(obj)
    }); // this will stay here with new thread without impacting other executions
    //console.log(result);
    // expected output: 'resolved'
    console.log('this needs to wait in separate thread');
} 

asyncCall();

console.log("Async Invocation done!");


//create a promise that gets resolved after 3 seconds in a function
//use this function to be called in an async function
//in async function put await to read this as resolved
//upon resolve we get userDetails printed out over there
// do similar implementation for reject as well