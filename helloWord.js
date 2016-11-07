var http=require("http");
function process_request(req,res){
    var body="Thanks for calling!\n ";
    var content_length=body.length;
    res.writeHead(200,{
       'Content-Length':content_length,
        'Content-Type':'text/plain'
    });
    res.end(body);
}
var s=http.createServer(process_request);
//s.listen(3000);
//var cat={ }; ʵ����ԭ��û���κ���ϵ ԭʼģʽ �����
//function Cat(name,color){
//    return{
//        name:name,
//        color:color
//    }
//}
//var cat1= Cat("��è","��ɫ"); //cat1 cat2û���κ���ϵ ԭʼģʽ�Ľ� ���븴��
//è��ԭ��
function Cat(name,color){
    this.name=name;
    this.color=color;
    this.type=function(){

    };
}
var cat1=new Cat("大猫","黄色");
var cat2=new Cat("大猫大猫","黄色黄色");
console.log(cat1);
console.log(cat1.constructor==Cat);
console.log(cat1 instanceof Cat);
//prototype
Cat.prototype.cat=function(){
        console.log("老鼠");
};
cat1.cat();
cat2.cat();
console.log(cat1.cat == cat2.cat);
console.log(cat1.type == cat2.type);
for(var prop in cat1) { console.log("cat1["+prop+"]="+cat1[prop]); }