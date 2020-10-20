//Using back tick we can write our expressions (${}) withing the string instead of additionally evaluating them

let a =5, b= 10;

console.log("Fifteen is "+(a+b) 
    +"\n This is legacy new line") //legacy


console.log(`Fifteen is ${a+b} and not ${2*(a+b)}
                writing in new line
            `) //using template literal


let user = {
    name : "Christian"
}
let {name} = user;

console.log(`We have generous student with name ${name}`)

//most helpful when we create html in templates
// `<div>
//     <div>
//         ${name}
//     </div>
// </div>`


// for (let index = 0; index < 10000; index++) {
//     console.log(index)    
// }