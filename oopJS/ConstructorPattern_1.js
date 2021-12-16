//We Can create Empty Object following like this 
var newObject={}
//or
var newObject1=new Object();
//or
var newObject2=Object.create(Object.prototype);
newObject.SomeKey='Durjoy Acharya';
newObject.email='da-durjoy@outlook.com';
newObject.about=()=>{
    return 'BSc in Computer Science & Engineering';
}
console.log(`Name: ${newObject['SomeKey']}`);
console.log(`Email: ${newObject['email']}`);
console.log(newObject.about());
//ECMAScript 5 only compitable approchces


//set property 
Object.defineProperty(newObject,'SomeKey',{
    value:'For more Control of Properties\'s behavior',
    Writable:true,
    enumerable:true,
    configurable:true
});

var Person=Object.create(null);
//Set Properties
Object.defineProperties(newObject,{
    'SomeKey':{
        'value':'Hello World',
        Writable:true
    },
    'anotherKey':
    {
        'value':'foo bar',
        Writable:false
    }
});

//usage:

var driver=Object.create(Person);
console.log(driver);

//---------------------------------------------------------------------------


