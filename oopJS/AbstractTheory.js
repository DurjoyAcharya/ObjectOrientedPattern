class AbstractFactory
{
    constructor()
    {
        const proto=Object.getPrototypeOf(this);
        if(proto===AbstractFactory)
            throw new Error('Abstract class should not be instanciated');
    }
    createClass1()
    {
        throw new Error('Method is not implemented');
    }
    createClass2()
    {
        throw new Error('Method is not implemented');
    }
}
class AbstractClass1{
    constructor()
    {
        const proto=Object.getPrototypeOf(this);
        if(proto===AbstractClass1)
            throw new Error('Abstract class should not be instanciated');
    }
    m1()
    {
        throw new Error('Method is not implemented');
    }
}
class AbstractClass2
{
    constructor()
    {
        const proto=Object.getPrototypeOf(this);
        if(proto===AbstractClass2)
            throw new Error('Abstract class should not be instanciated');
    }   
}
class Class1 extends AbstractClass1
{
    Class1_m1(...args)
    {
        console.log(`Called: ${Class1.prototype.Class1_m1} `,...args);
    }
}
class Class2 extends AbstractClass2
{
    Class2_m1(...args)
    {
        console.log('Called: Class2.prototype.Class2_m1',...args);
    }
}
class Factory extends AbstractFactory
{
    createClass1(...args)
    {
        return new Class1(...args)
    }
    createClass2(...args)
    {
        return new Class2(...args)
    }
}
//usage:
const factory=new Factory();
const obj1=factory.createClass1('Value1');
const obj2=factory.createClass2('Value2');
obj1.name='AbstractFactory';
console.dir(obj1);
console.log(obj2);
obj2.Class2_m1('Value90');