//constructor function : these are special type of functions that used to create,
//class type of behaviour using functions and having prototype chain

function user(name, address, age) {
    this.name = name,
    this.age = age,
    this.address = address,
    this.getName = function () {
        return this.name;
    }
}

var student = new user("Randy","My Own Universe",21);
student.lastAttended = "Graduation";

student.getAddress = function () {
    return this.address;
}

student.getQualification = function () {
    return this.lastAttended;
}

console.log(student.getName());
console.log(student.getQualification());
console.log(student.getAddress());