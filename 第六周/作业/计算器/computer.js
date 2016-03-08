 var calStr = document.getElementById('calFrame');
 var num = 0; //第一个数字
 var numShow = '0'; //第二个数字
 var result = 0; //结果
 var operator; //运算符
 var o = false; //判断是否按下运算符
 var quit = false; //防止重复按键的标志

 window.onload = function Click() {
    //清除
     var clear = document.getElementById('clear');
     clear.addEventListener('click', function() {
         num = '';
         result = '';
         calStr.value = '';
     });
     //退格
     var delLast = document.getElementById('back')
     delLast.addEventListener('click', function() {
         calStr.value = calStr.value.slice(0, -1);
     });
     //输入数字
     var numClick = document.getElementsByClassName('num');
     for (var i = 0; i < 10; i++) {
         numClick[i].addEventListener('click', function() {
            command(this);
         })
     }
     //输入点
     var dotClick=document.getElementById('dot');
     dotClick.addEventListener('click',function(){
        for (i = 0; i < calStr.value.length; i++) {
         if (calStr.value[i] != '.') {
             calStr.value = numShow + '.';
         }
     }
     })
 }

 //数字，运算符，计算
 function command(obj) {
     if (o == true) {
         calStr.value = '';
         o = false;
     }
     if (parseFloat(calStr.value) != 0 || calStr.value == '0.') {
         calStr.value = calStr.value + obj.value;
         numShow = calStr.value;
     }
     quit = false;
 }


 //加减乘除
 function operation(obj) {
     caculate();
     operator = obj.value;
 }

 //等于
 function equal() {
     caculate();
     num = 0;
     result = 0;
     numShow = '0';
 }
 //运算
 function caculate() {
     numShow = parseFloat(calStr.value);
     if (num != 0 && quit == false) {
         switch (operator) {
             case '+':
                 result = num + numShow;
                 break;
             case '-':
                 result = num - numShow;
                 break;
             case '×':
                 result = num * numShow;
                 break;
             case '÷':
                 result = num / numShow;
                 break;
             default:
                 break;
         }
         quit = true; //避免重复按键

     } else {
         result = numShow;
     }
     num = result;
     calStr.value = parseFloat(result.toFixed(12));
     o = true;
 }
 

 //sin cos 百分数 平方 正负数
 function specialNum(obj) {
     calStr.value = parseFloat(obj.toFixed(12));
 }
 //平方根
 function squNum() {
     if (parseFloat(calStr.value) >= 0) {
         calStr.value = parseFloat((Math.sqrt(calStr.value)).toFixed(12));
     } else {
         calStr.value = '错误';
     }
 }
 //倒数
 function reciprocal() {
     if (parseFloat(calStr.value) != 0) {
         calStr.value = parseFloat((1 / (calStr.value)).toFixed(12));
     } else {
         calStr.value = '错误';
     }
 }
