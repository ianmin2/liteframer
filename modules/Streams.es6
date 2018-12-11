const fs        = require('fs');
const stream    = require('stream');

class Streamer 
{

    // constructor ( filePath,  writeStream )
    // {
    //     let rs =  fs.createReadStream(filePath);
    //     rs.pipe(writeStream);
    // }

    stream ( sourcePath, destinationStream )
    {
        let rs = fs.createReadStream( sourcePath );
        rs.pipe( destinationStream );
    }

    getReadStream ( filePath )
    {
        return fs.createReadStream( filePath );
    }

    getWriteStream ( filePath )
    {
        return fs.createWriteStream( filePath );
    }

    createTransformStream ( fn )
    {
        let str =  new stream.Transform();
        str._transform = fn;
        return str;
    }

}

module.exports = new Streamer();