/**
 * Created by 35031 on 2016/11/12.
 */
//var http=require('http');
//var server=http.createServer(function(req,res){
//   req.on('data',function(chunk){
//        console.log('parsed',chunk);
//   });
//    req.on('end',function(){
//        console.log('done parsing');
//        res.end();
//    });
//    req.setEncoding('utf8');
//    req.on('data',function(chunk){
//        console.log(chunk);
//    })
//});
var http=require('http');
var url=require('url');
var items=[];
var server=http.createServer(function(req,res){
    switch (req.method){
        case 'POST':
            var item='';
            req.setEncoding('utf8');
            req.on('data',function(chunk){
                item+=chunk;
            });
            req.on('end',function(){
                items.push(item);
                res.end('OK\n');
            })
            break;
        case 'GET':
            items.forEach(function(item,i){
               res.write(i+")"+item+'/n');
            });
            res.end();
            break;
    }
});