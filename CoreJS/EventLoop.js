//EventLoop : all those calls which are expected to have delays due to 
//transactions taking time like settimeout, setinterval, server calls (XHR) or file read (async) or any registered callback using Promises
//server - (XHR) xmlHttpRequest api used to make server call

//Everything needs to looked in event loop for stack empty, expect the sutffs present in prioity queue
console.log("Hello Event Loop!")

setTimeout(function (){
    console.log("Call Back1")
        setTimeout(function (){
            console.log("Call Back1.1")
        }, 0);
}, 1000);

setTimeout(function (){
    console.log("Call Back2")
}, 1000);//2000

setTimeout(function (){
    console.log("Call Back3")
}, 1000);//3000

console.log("Good bye i didn't go to event loop!")