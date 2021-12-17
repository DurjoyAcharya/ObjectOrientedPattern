//JavaScript this Keyword And Bind Method 
// var obj={
//     Name:'Tom',
//     print:function()
//     {
//         console.log(this);
//     } 
// }
// function myfun() {
//    function inner() {
//        console.log(this);
//    }
//    inner();
// }
// myfun();
// var Person={
//     Name:'Durjoy',
//     print:function() {
//         console.log(this.Name);
//     }
// }
// var obj=Person.print;

// console.log(obj);
// function add(num) {
//     return this.value+num;
// }
// var obj={
//     value:50
// }
// var result=add.bind(obj);
// console.log(result(10));
// var person={
//     name:'Tom',
//     print:function () {
//     setTimeout(()=>{
//         console.log('Hello '+this.name);
//     }, 2000);
//   }
// }
// person.print();


