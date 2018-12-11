class Until 
{
    constructor ( d=[], fn )
    {
        d = this.toArray( d );
        d.forEach( dx => fn( dx ));
    }

    toArray( d )
    {
        return ( d instanceof Array ) ? d : ( typeof( d ) == "string" ) ? d.split(',') : ( d instanceof Object ) ? Object.values( d ) : d.toString().split(',');
    } 

};

// let i = new Until([1,2,3,4,5,6,7,'x'],console.log);
module.exports = ( d,fn ) =>
{
    return new Until( d,fn );
};