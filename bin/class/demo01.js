function Person(){
    var name = "Tom";
    this.getName = function () {
        return name;
    }
}

var person = new Person();

console.info(person.name)
console.info(person.__proto__)
console.info(Person)