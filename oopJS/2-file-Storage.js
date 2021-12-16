const fs = require('fs');
const readline=require('readline');

class DataAccessLayer{
    constructor()
    {
        const proto=Object.getPrototypeOf(this);
        if(proto.constructor===DataAccessLayer)
            throw new Error('Abstract class should not be instanciated');
    }   
    CreateDatabase()
    {
        throw new Error('Method is not implemented');
    }
    CreateCursor()
    {
        throw new Error('Method is not implemented');
    }
}
class Database{
    constructor(dal)
    {
        const proto=Object.getPrototypeOf(this);
        if(proto.constructor===Database)
        {
            throw new Error('Abstract class should not be instanciated');
        }
        this.dal=dal;
    }
    select()
    {
        throw new Error('Method is not implemented');
    }
}
class Cursor
{
    constructor(dal)
    {
        const proto=Object.getPrototypeOf(this);
        if(proto.constructor===Cursor)
            throw new Error('Abstract class should not be instanciated');
        
        this.dal=dal;
        this.current=0;
    }
    [Symbol.asyncIterator]()
    {
        throw new Error('Method is not implemented');
    }
}
class FileLineCursor extends Cursor{
    constructor(dal,fileStorage,query)
    {
        super(dal);
        this.query=query;
        this.lines=readline.createInterface({
            input:fileStorage.fileStream,
            crlfDelay:Infinity,
        })[Symbol.asyncIterator]();       
    }
    [Symbol.asyncIterator]()
    {
        
    }
}