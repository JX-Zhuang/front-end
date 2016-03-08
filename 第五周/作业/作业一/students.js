function level() {
    var score = document.getElementById('score').value; //分数
    var x; //几等生
    switch (true) {
        case score <= 100 && score >= 90: //100>=score>=90，一等生   
            x = "一";
            break;
        case score < 90 && score >= 80: //90>score>=80,二等生
            x = "二";
            break;
        case score < 80 && score >= 70: //80>score>=70,三等生
            x = "三";
            break;
        case score < 70 && score >= 60: //70>score>=60,四等生
            x = "四";
            break;
        case score < 60 && score >= 50: //60>socre>=50,五等生
            x = "五";
            break;
        case score < 50 && score >= 40: //50>score>=40,六等生
            x = "六";
            break;
        case score < 40 && score >= 30: //40>score>=30,七等生
            x = "七";
            break;
        case score < 30 && score >= 20: //30>score>=20,八等生
            x = "八";
            break;
        case score < 20 && score >= 10: //20>score>=10,九等生
            x = "九";
            break;
        case score < 10 && score >= 0: //10>score>=0,十等生
            x = "十";
            break;
        default:
            break;
    }
    if (score <= 100 && score >= 0) {
        alert("你的成绩是" + score + "分，你是" + x + "等生");
    } else {
        alert("您输入的成绩有误，请重新输入！");
    }
}
