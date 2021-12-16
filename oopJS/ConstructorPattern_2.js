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