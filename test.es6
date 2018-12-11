// const fs            = require('fs')
// const path          = require(`path`);
// const express       = require(`express`);
// const app           = express();
// const PORT          = 3001;

// const streamer          = require(`./modules/Streams.es6`);
// const emitter           = require(`./modules/Events.es6`);


// let toUpperCase = streamer.createTransformStream((data,enc,cb)=>cb(null,data.toString().toUpperCase()));


// emitter.on(`download`, (details) =>
// {
//    streamer.stream(details.src,details.dest);
// })


// let fl  =   path.join(__dirname,`/videos/Designing A Fantastic UX With Psychology.mp4`);
// let txt =   path.join(__dirname,`/text/text.txt`);


// app.route(`/`)
// .all( (req,res) =>
// {
//     res.send(`OK`);
// })

// app.route(`/video`)
// .all((req,res) =>
// {
//     res.setHeader('content-type' ,'video/mp4')
//     emitter.emit(`download`, { src : fl, dest: res } );
// })

// app.route(`/uppercase`)
// .all((req,res) =>
// {
//     streamer.getReadStream(txt).pipe(toUpperCase).pipe(res);
// })

// app.route(`/file`)
// .all((req,res) =>
// {
//     res.send("OK");
//     // res.send(fs.readFileSync(txt,'utf8'));
// })

// app.listen(PORT,(e) => console.log(e?e.message:`Listening at http://localhost:${PORT}`))



let til = require(`./until.es6`);

// til([1,2,3,4,5,6,7,8,9,'x'],console.log)
// til([1,2,3,4,5,6,7,8,9,'x'].reverse(),console.log)
// til([1,2,3,4,5,6,7,8,9,'x'].reverse().reverse(),console.log)
// til([1,2,3,4,5,6,7,8,9,'x'],console.log)