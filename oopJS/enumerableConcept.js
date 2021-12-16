/**An enumerable property in JavaScript means that a property can be viewed 
 * if it is iterated using the for…in loop or Object.keys() method. 
 * All the properties which are created by simple assignment or property
 *  initializer are enumerable by default. */
const Student={
    id:1925102002,
    name:'Durjoy Acharya',
    age:21,
    email:'da-durjoy@outlook.com'
}

Object.defineProperty(Student,'email',{
    value:'durjoy.tourist@gmail.com',
    configurable:true,
    enumerable:false,
    writable:false
});

console.log(Student.propertyIsEnumerable('name'));
console.log(Student.propertyIsEnumerable('id'));
console.log(Student.propertyIsEnumerable('age'));
console.log(Student.propertyIsEnumerable('email'));