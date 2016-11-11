/**
 * Created by 35031 on 2016/11/11.
 */
var flow=require('nimble');
flow.series([function(callback){
    setTimeout(function(){
        console.log('first');
        callback();
    },1000);
},function(callback){
    setTimeout(function(){
        console.log('second');
        callback();
    },500);
},function(callback){
    setTimeout(function(){
        console.log('last');
        callback();
    },100)}]);