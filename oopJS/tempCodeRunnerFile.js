function* idMaker()
{
    var index=0;
    while(true)
       yield index+=3;
}
var gen=idMaker();
for (let index = 0; index < 10; index++) {
    console.log(gen.next().value);   
}
