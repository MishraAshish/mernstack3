//call and apply : used to change the context of function at runtime, 
//only difference is apply can take parameters in the form of array

let obj1 = { name : "Christian", age : 19 }
let obj2 = { name : "Jack", age : 21 }

function printDetail(address1, address2) {
    console.log("context ", this);

    console.log("Name " + this.name)
    console.log("Age " + this.age)

    console.log("address1 " + address1)
    console.log("address2 " + address2)
}

//printDetail.call(obj1,"Earth","Moon") // this sets the context at run time to obj1

//printDetail.apply(obj2,["Mars","Jupiter"]) // this sets the context at run time to obj2


//bind : is used to supply the context whenever execution happens and preserve that as well, 
//and doesn't executes immediately

let objBind = {
    name : "Jack", 
    age : 20,
    printDetail : function () {
        console.log("Context ", this); 
        let that = this;

        setTimeout(function () {
            console.log("Context ", this); 
            console.log("Name "+ this.name); 
            console.log("Name That "+ that.name); 
        }.bind(this),3000)
    }
}

//objBind.printDetail();


//use of bind -
//5. output and how to fix it
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
//console.log(hero.getSecretIdentity());