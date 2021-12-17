//Inheritance With Proto Type 
// function Animal() {
//     this.name='Obontika';
// }
// function Tiger(name) {
//     Animal.call(this);
//     this.home='Sundorbon';
// }
// var object=new Tiger();
// console.log(object.name);
// function Person(name,Address) {
//     this.name=name;
//     this.Address=Address;
// }
// Person.prototype.Address=function()
// {
//     console.log(`Address: ${this.Address}`);
// }
// function Student(name,...args) {
//     Person.call(this,name);
//     this.args=args;
// }
// Student.prototype.printArrays=function(){
//     this.args.forEach(e=>{
//         console.log(`ID: ${e}`);
//     });
// }
// var array=[1,2,3,4,5,6];
// var obj=new Student('Shariful Islam',array);
// console.log(obj.name);
// obj.printArrays();
// function Person(name) {
//     this.name=name;
// }
// Person.prototype.printName=function()
// {
//     console.log('Name: '+this.name);
// }
// Person.prototype.another=function()
// {
//     console.log('This is another function');
// }
// function Student(name,id)
// {
//     Person.call(this,name);
//     this.id=id;
// }
// Student.prototype=Object.create(Person.prototype);
// Student.prototype.constructor=Student;
// var student=new Student('Durjoy Acharya',1925102002);
// Person.prototype.printName=function()
// {
//     console.log(this.name+' Not Copied');
// }
// Person.prototype.skill='Java';
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//new Key Word Make FUn
// function Animal(name)
// {
//     this.name=name;
// }
// Animal.prototype.print=function()
// {
//     console.log(this.name);
// }
// function newFun(constructor)
// {
//     var obj={}
//     Object.setPrototypeOf(obj,constructor.prototype);
//     var args=Array.prototype.slice.apply(arguments);
//     //console.log(arguments);
//     constructor.apply(obj,args.slice(1));
//     return obj;
// }
// var bird=new newFun(Animal,'Tom','Jerry');
// bird.print();
// var Person=function(name,age)
// {
//     this.name=name;
//     this.age=age;
// }
// var p1=newFun(Person,'Durjoy Acharya',22);

function obj(a,b)
{
    this.a=a;
    this.b=b;
}
var x=new obj(10,10);
console.log(x);