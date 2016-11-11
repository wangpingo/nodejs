/**
 * Created by 35031 on 2016/11/11.
 */
setTimeout(function(){
    console.log('first');
    setTimeout(function(){
        console.log("second");
        setTimeout(function(){
            console.log("third");
        },100);
    },500);
},1000);