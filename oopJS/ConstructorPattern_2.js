//Basic Contructor Pattern
function University(name,year,place) {
    this.name=name;
    this.year=year;
    this.place=place;

    this.toString=function()
    {
        return `${this.name} Estatablised in ${this.year} Situated in ${this.place}`
    }
}
var uni1=new University('City University',2002,'Savar');
var uni2=new University('Green University',2006,'Mirpur');
var uni3=new University('Eastran University',2005,'Dhaka');

var array=[uni1,uni2,uni3];
array.forEach(element => {
    console.log(element.toString());
});

//----------------------------------------
//Constructor With Prototype
//A Function in JavaScript have a property called prototype
function School(name,year,location) {
    this.name=name;
    this.year=year;
    this.location=location;

    // Note here that we are using Object.prototype.newMethod rather than 
    // Object.prototype so as to avoid redefining the prototype object
    School.prototype.toString=function(){return `${this.name} is eastrablished in ${this.year} situated in ${this.location}`};
}
var sc1=new School('Govt BB boyes High School',1985,'Tangail');
var sc2=new School('Mohera Ananda High School',1925,'Mirzapur');
var sc3=new School('Savar Cantonment School',1975,'Savar');
var array=[sc1,sc2,sc3];
array.forEach(element => {
    console.log(element.toString());
});