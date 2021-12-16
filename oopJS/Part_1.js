var obj={};
var obj1=new Object;
console.log(obj);
console.log(obj1);
var Book={
    Name: 'Durjoy Acharya',
    Age: 21,
    details:function(){
        console.log(this.Name+" "+this.Age);
    },
    light:true
};
Book.details()
console.log(Book['Name']);