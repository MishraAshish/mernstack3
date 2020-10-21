//special javascript functions that give us class like behaviour, the inhertance model still remains tprototype based inheritance

class Calculator{
    constructor(num1 = 2, num2 = 1){
        this.number1 = num1,
        this.number2 = num2
    }

    multiply = ()=>{
        return this.number1*this.number2;
    }

    sum = ()=>{
        return this.number1+this.number2;
    }
}

let calcObj = new Calculator(10, 11);

console.log(calcObj.multiply())
console.log(calcObj.sum())


//CalculateArea : RectanlgeArea, Circle (3.14*radius*radius)