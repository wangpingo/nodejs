/**
 * Created by 35031 on 2016/11/8.
 */
var fs = require('fs');
var stream = fs.createReadStream('./helloWord.js');
stream.on('data', function (chunk) {
    console.log(chunk);
});
stream.on('end', function () {
    console.log("finished");
});
stream.on('error', function () {
    console.log("未找到文件");
});
var http = require('http');

http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        fs.createReadStream('./无标题.png').pipe(res);
    }).listen(3000);
console.log("http://localhost:3000");