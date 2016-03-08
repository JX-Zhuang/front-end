function compute() {
    var number1 = parseFloat(document.getElementById("number1").value); //第一个数字
    var number2 = parseFloat(document.getElementById("number2").value); //第二个数字
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var operator = document.getElementById("operator").value; //运算符
    var result; //结果
    if (a == number1 && b == number2) { //判断number1，number2都为数字
        switch (true) {
            case operator == '+': //加
                result = number1 + number2;
                break;
            case operator == '-': //减
                result = number1 - number2;
                break;
            case operator == '*': //乘
                result = number1 * number2;
                break;
            case operator == '/': //除
                result = number1 / number2;
                break;
            default:
                break;

        }
        document.getElementById("number1").value = result;
    } else {
        alert("您输入的数字有误，请重新输入"); //输入错误时，输出的结果
    }
}
