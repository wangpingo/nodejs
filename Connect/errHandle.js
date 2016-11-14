/**
 * Created by 35031 on 2016/11/14.
 */
var connect=require('connect');
var http=require('http');
var api=connect()
        .use(users)
        .use(pets)
        .use(errorHandle);
var app=connect()
        .use(hello)
        .use('/api',api)
        //.use(errorPage)
        .listen(3000);
function hello(req,res,next){
    if(req.url.match(/^\/hello/)){
        res.end('Hello World\n');
    }else{
        next();
    }
}
var db={
  users:[
      {name:'tobi'},
      {name:'loki'},
      {name:'jane'}
  ]
};
function users(req,res,next){
    var match=req.url.match(/^\/user\/(.+)/);
    console.log(match);
    if(match){
        var user=db.users[match[1]];
        console.log(user);
        if(user){
            res.setHeader('Content-Type','application/json');
            res.send(JSON.stringify(user));
        }else{
            var err=new Error('User not found');
            err.notFound=true;
            next(err);
        }
    }else{
        next();
    }
}
function pets(req,res,next){
    if(req.url.match(/^\/pet\/(.+)/)){
        foo();
    }else{
        next();
    }
}
function errorHandle(err,req,res,next){
    console.error(err.stack);
    res.setHeader('Content-Type','application/json');
    if(err.notFound){
        res.statusCode=404;
        res.end(JSON.stringify({error:err.massage}))
    }else{
        res.statusCode=500;
        res.end(JSON.stringify({error:'Internal Server Error'}));
    }
}













