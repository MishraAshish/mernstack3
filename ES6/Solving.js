// (function sum(a,b) {
// 	console.log(a+b)
// })(1,3)


//SolvingFunctionScope : Using ES6

const arr = [10, 12, 15, 21]; //block/lexical scope variable so it resolves itself immediately

//for (var i = 0; i < arr.length; i++) { //var : functional scope so resolves upon function execution
for (let i = 0; i < arr.length; i++) { //let : gets resolved immediately with values
	  
	// (function (params) {	//ES5 way of resolving functional scope holding by immediately executing the function
		
	// 	setTimeout(function() {
			
	// 		console.log('Index: ' + params + ', element: ' + arr[params]);

	// 	}, 2000);

	// })(i)

	setTimeout(function() {
			
		console.log(`Index: ${i} element: ${arr[i]}`);

	}, 2000);
}

//console.log(`i is ${i}`)