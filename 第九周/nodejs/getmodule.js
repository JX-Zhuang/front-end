var myModule=require('./module');
// hello=new myModule();
// hello.setName('zjx');
// hello.sayHello();
var hello=new myModule.Hello;
hello.setName('zjx');
hello.sayHello();