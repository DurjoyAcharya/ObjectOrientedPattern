//JavaScript this Keyword And Bind Method 
var obj={
    Name:'Tom',
    print:function()
    {
        console.log(this);
    } 
}
obj.print();