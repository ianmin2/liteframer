class EventEmitter 
{

    constructor ()
    {
        if( !(this instanceof EventEmitter) )
            throw new TypeError(`EventEmitter is not a function`);

        this. handlers = [];
    }

    addEventListener (type,fn)
    {
        this.handlers.push( [type,fn] );
    }

    removeEventListener ( type,fn=true )
    {
        this.handlers = this.handlers
                        .filter( handler => !(handler[0] == type && (fn==true ? true : handler[1] == fn) ) );
    }

    dispatchEvent ( type,data )
    {
        this.handlers
        .filter(  handler => new RegExp(`^${handler[0].split('*').join('.*')}$`).test( type ))
        .forEach( handler => handler[1]( data,type ));
    }

    getEventListeners ( type )
    {
        if( !type )
            return this.handlers;

        let fns = [];
        this.handlers
        .filter(  handler => handler[0] == type)
        .forEach( handler => fns.push( handler[1]) );
        return fns;
    }

    clearEventListeners ()
    {
        this.handlers = [];
    }

    on( type,fn )
    {
        this.addEventListener( type,fn );
        return this;
    }

    off ( type,fn )
    {
        this.removeEventListener( type,fn );
        return this;
    }

    emit ( type,data ) 
    {
        this.dispatchEvent( type,data );
        return this;
    }

    clear ( type )
    {
        this.clearEventListeners( type );
        return this;
    }

    list ( type )
    {
        return this.getEventListeners();
    }

}

module.exports = new EventEmitter();