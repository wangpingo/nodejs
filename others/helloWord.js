var http = require("http");
function process_request(req, res) {
    var body = "Thanks for calling!\n ";
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(process_request);
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
//function Cat(name,color){
//    this.name=name;
//    this.color=color;
//    this.type=function(){
//
//    };
//}
//var cat1=new Cat("大猫","黄色");
//var cat2=new Cat("大猫大猫","黄色黄色");
//console.log(cat1);
//console.log(cat1.constructor==Cat);
//console.log(cat1 instanceof Cat);
////prototype
//Cat.prototype.cat=function(){
//        console.log("老鼠");
//};
//cat1.cat();
//cat2.cat();
//console.log(cat1.cat == cat2.cat);
//console.log(cat1.type == cat2.type);
//for(var prop in cat1) { console.log("cat1["+prop+"]="+cat1[prop]); }
//五种继承方式 1,构造函数绑定。2，propotype模式。3，直接继承propertype。4，利用空对象做中介。5，拷贝继承
function Animal() {
    this.species = "动物";
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
//1, 构造函数绑定
function Cat(name,color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
//var cat1=new Cat("大黄","黄色");
//console.log(cat1.species);
//2，propotype模式
//var cat=new Cat("大黄","黄色");
//Cat.prototype=new Animal();
//Cat.prototype.constructor=Cat;
//console.log(cat.species);
//直接继承prototype
//Cat.prototype=Animal.prototype;
//Cat.prototype.constructor=Cat;
//var cat=new Cat("大猫","黄色");
//console.log(cat.species);
//console.log(Animal.prototype.constructor);
//var F=function(){
//};
//F.prototype=Animal.prototype;
//Cat.prototype=new F();
//Cat.prototype.constructor=Cat;
//console.log(Animal.prototype.constructor); // Animal
function extend(Child, Parent) {

    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    //Child.uber = Parent.prototype;
}
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物