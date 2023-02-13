// var express = require('express')
// var bodyParser = require('body-parser')

// var app = express()
// app.use(bodyParser.text({
//     type: function(req)
// {
//         return 'text';
// }}))
// app.post('/', (req, res)=>{
//     console.log(req,body)
//     res = res.status(200)
//     var contentType = req.get('Content-Type');
//     if(ContentType){
//         console.log("content type:" + contentType);
//         res = res.type(contentType)
//     }
//     res.send(req.body)
// })

// app.listen(process.env.PORT || 8080);

// module.exports = app; // for testing

//curl -d "echo" -H "Content-Type: text" -X POST http://localhost:8008
var server = require("http").createServer();

server.on("request", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            let bodyString = body.concat().toString();
            console.log(bodyString);
            response.end(bodyString);
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.error(err);
    });
});
server.listen(process.env.PORT || 8080, () => {
    console.log("Server listening at 8080");
});

module.exports = server; // for testing