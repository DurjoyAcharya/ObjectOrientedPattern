function Employee(name) {
    this.name=name;
    this.say=function()
    {
        console.log(`I am employee ${this.name}`);
    };
}
function EmployeeFactory()
{
    this.create=function(name)
    {
        return new Employee(name);
    };
}
function Vendor(name)
{
    this.name=name;
    this.say=function()
    {
        console.log(`I am vendor ${this.name}`);
    }
}
function VendorFactory()
{
    this.create=function(name)
    {
        return new Vendor(name);
    }
}
function run()
{
    var person=[];
    var EmployeeObject=new EmployeeFactory();
    var VendorObject=new VendorFactory();
    person.push(EmployeeObject.create('Durjoy Acharya'));
    person.push(VendorObject.create('MST Ayesha Siddika'));
    person.push(EmployeeObject.create('Badhon Biswas'));
    person.push(VendorObject.create('Md Rony'));

    person.forEach(element => {
        element.say();
    });
}
run();