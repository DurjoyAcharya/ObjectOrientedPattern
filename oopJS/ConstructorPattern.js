function Person(name,age) {
    this.name=name
    this.age=age
    this.print=function () {
        console.log('Name: '+this.name);
    }
}

// console.log(new Person('DA Acharya',14));
 var p=new Person('Sefu','da-durjoy');
 var p2=new Person('Kalam',9);
 var person=[p,p2];

// person.forEach(element => {
//     console.log(element.age);
//     element.print()
// });
// person.forEach(element => {
//     console.log(element.age);
// });
// for(var obj in p)
// {
//     console.log(obj);
// }
function Book(name,author,price) {
    this.name=name
    this.author=author
    this.price=price
}
var obj=new Book('English Grammer','Nafis Chowdhory',300);
console.log(obj.constructor);





