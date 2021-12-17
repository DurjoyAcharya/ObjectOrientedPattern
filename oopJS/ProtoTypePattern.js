//ProtoType
// function Person(name,age) {
//     this.name=name;
//     this.age=age;
//     this.hello=function()
//     {
//         console.log('Hello '+this.name);
//     }
// }
// function Person(name,age) {
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.hello=function()
// {
//     console.log('Hello '+this.name);
// }
// var p1=new Person('Durjoy',23);
// var p2=new Person('Mitu',20);
// function PrintMe(val) {
//     console.log(val);
//     console.log('Hello '+this.value);
// }
// var obj={
//     value:'Durjoy Acharya',
//     email:'da-durjoy@outlook.com'
// }
// var obj2={
//     value:'Julfiqar Ali',
//     email:'julfiqur55@outlook.com'
// }

// PrintMe.bind(obj)('Wellcome to Java ');
// PrintMe.bind(obj2)('Wellcome to Python ');

function add(a,b) {
    console.log(this.a);
    return a+b;
}
var x={
    a:5
}
var y={
    a:10
}
console.log(add.bind(x)(10,10));//Apply/call

