/////**
//// * Created by 35031 on 2016/11/16.
//// */
////asyncTask1("lala", function (data) {
////    console.log(data);
////});
////function asyncTask1(data, callback) {
////
////    callback && callback(data);
////}
//////代码横向发展严重，不利于阅读
////asyncTask1(data, function (data1) {
////    asyncTask2(data1, function (data2) {
////        asyncTask3(data2, function (data3) {
////            asyncTask4(data3, function (data4) {
////                // .........
////            })
////        })
////    })
////});
////asyncTask1(data)
////    .then(function (data1) {
////        return asyncTask2(data1);
////    })
////    .then(function (data2) {
////        return asyncTask3(data2)
////    });
////var promise=new promise(function(resolve,reject){
////   if( / *异步操作成功 */){
////       resolve(value);
////   }else{
////       reject(error);
////   }
////});
////promise.then(function(value){
////    //sucess
////},function(value){
////    //failure
////});
////
////
////function asyncFn1(){
////    var promise=new Promise(function(resolve,reject){
////        setTimeout(function(){
////            console.log('asyncFn1 is done');
////            if(success){
////                resolve('asyncFn1 value');
////            }else{
////                reject('error info');
////            }
////
////        },1000)
////    })
////    return promise;
////}
////function asyncFn1(){
////    var promise=new Promise(function(resolve,reject){
////        setTimeout(function(){
////            console.log('asyncFn1 is done');
////
////                resolve('asyncFn1 value');
////
////        },1000)
////    });
////    return promise;
////}
////function asyncFn2(arg){
////    console.log(arg+"............");
////    var promise=new Promise(function(resolve,reject){
////        setTimeout(function(){
////            console.log('asyncFn2 is done');
////
////            resolve(arg+'asyncFn2 value');
////
////        },1000)
////    });
////    return promise;
////}
////function asyncFn3(arg){
////    var promise=new Promise(function(resolve,reject){
////        setTimeout(function(){
////            console.log('asyncFn3 is done');
////
////            resolve(arg+'asyncFn3 value');
////
////        },1000)
////    });
////    return promise;
////}
////asyncFn1()
////    .then(asyncFn2)
////    .then(asyncFn3)
////    .then(function(arg) {
////        console.log(arg);
////    });
////var fs=require('fs');
////function foo(dir,callback){
////    fs.readdir(dir,function(err,files){
////        var text="";
////        var counter=files.length;
////        for(var i= 0;i<files.length;i++){
////                void function(i){
////                    fs.readFile(files[i],'utf8',function(err,data){
////                        text+=data;
////                        --counter;
////                        if(counter==0){
////                            callback(text);
////                        }
////                    })
////                }(i);
////        }
////    })
////}
////foo('./',function(data){
////    console.log(data);
////});
//var fs=require('fs');
//function readdirP(dir){
//    return new Promise(function(resolve,reject){
//        fs.readdir(dir,function(err,files){
//            if(err){
//                reject(err);
//            }else{
//                resolve(files);
//            }
//        })
//    })
//}
//function readFileP(file){
//    return new Promise(function(resolve,reject){
//        fs.readFile(file,'utf8',function(err,data){
//            if(err){
//                reject(err);
//            }else{
//                resolve(data);
//            }
//        })
//    })
//}
////function foo(dir){
////    return new Promise(function(resolve,reject){
////        var text='';
////        readdirP(dir).then(function(files){
////            return new Promise(function(resolve,reject){
////                var counter=files.length;
////                console.log(counter);
////                for(var i= 0,j=files.length;i<j;++i){
////                    void function(i){
////                        readFileP(files[ii]).then(function(data) {
////                            text += data;
////                            --counter;
////                            if(counter===0) {
////                                resolve(text);
////                            }
////                        });
////                    }(i)
////                }
////            })
////        })
////    })
////}
//function foo(dir) {
//    var promise = readdirP(dir)
//
//        .then(function(files) {
//            var arr=[];
//            for(var i=0, j=files.length; i<j; ++i) {
//                arr.push(readFileP(files[i]));
//            }
//            return Promise.all(arr);
//        })
//
//        .then(function(datas) {
//            return datas.join('');
//        });
//
//    return promise;
//}
//
//foo('./').then(function(data) {
//    console.log(data);
//});
function foo(arg) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(arg + 1);
        }, 1000);
    });
}


//foo(0)
//    .then(foo)
//    .then(foo)
//    .then(function(arg) {
//
//        return arg +1;
//    })
//    .then(foo)
//    .then(function(arg) {
//        console.log(arg);
//    });
foo(0)
    .then(foo)
    .then(foo)
    .then(function(arg) {
        return Promise.resolve().then(function() {
            return arg +1;
        });
    })
    .then(foo)
    .catch(function(err) {
        console.log(err);
    });