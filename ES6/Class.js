//special javascript functions that give us class like behaviour, the inhertance model still remains tprototype based inheritance

class Calculator{
    constructor(num1 = 2, num2 = 1){
        this.number1 = num1,
        this.number2 = num2
    }

    multiply = ()=>{
        return this.number1*this.number2;
    }

    bmw = ()=>{
        return this.number1+this.number2;
    }
}

//let calcObj = new Calculator(10, 11);

//console.log(calcObj.multiply())
//console.log(calcObj.sum())
//CalculateArea : RectanlgeArea, Circle (3.14*radius*radius)

module.exports = {
    Calculator, //classiccal/es5 way :  exporting the module
    Pie : 3.14
    }