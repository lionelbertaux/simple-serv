var http = require('http');
var url = require('url');
var querystring = require('querystring');


var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log('----------------New request--------------------')
    console.log('Page: ' +page);
    var params = querystring.parse(url.parse(req.url).query);
    for(var item in params) {
        var key = item;
        var value = params[item];
        console.log('Param: ' + key + ': ' + value);
	if (key == "ack" && value == 1) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify({"data":"beerbeefcafebabe"}));
    }

    }

    var headers = req.headers;
    console.log('Type: ' + req.method);
    console.log(headers);

    res.end();
});

server.listen(8080);
