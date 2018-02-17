
var square = (x) => {
    return x * x;
}

console.log(square(9));

var user = {
    name: "Mithun",
    sayHi: function(){
        console.log(`Hi ${this.name}`)
    },
    sayHello: () => {
        console.log(` Hi Arrow ${this.name}`);
    },
    sayHiAlt(){
        console.log(`Hi ${this.name}`);
    }
}

user.sayHi();
user.sayHiAlt();
user.sayHello();

