/**
 * Created by 35031 on 2016/11/13.
 */
var connect=require('connect');
function logger(req,res,next){
    console.log('%s %s',req.method,req.url);
    next();
}
function hello(req,res){
    res.setHeader('Content-Type','text/plain');
    res.end('hello word');
}
connect()
    .use(logger)
    .use(hello)
    .listen(3000);