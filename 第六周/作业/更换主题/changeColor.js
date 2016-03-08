var bannerStyle = document.getElementById('banner').style; //导航栏
var tagA = document.getElementsByTagName('a') //<a>标签
var count = tagA.length; //<a>标签的个数
//判断localStorage，调用对应的函数
window.onload = function() {
    switch (localStorage.name) {
        case 'red':
            changeColor('#F44C4C', '#E00505', 'red'); //红色
            break;
        case 'blue':
            changeColor('#1E8EC9', '#0C5881', 'blue'); //蓝色
            break;
        case 'green':
            changeColor('#1EC95E', '#028734', 'green'); //绿色
            break;
        case 'orange':
            changeColor('#F0B13E', '#C58001', 'orange'); //橙色
            break;
        default:
            break;
    }
}

function changeColor(firstColor, secondColor, colorName) {
    //导航栏 
    for (i = 0; i < 11; i++) {
        tagA[i].style.backgroundColor = firstColor; //firstColor
        tagA[i].onmouseover = function() {
            this.style.backgroundColor = secondColor; //secondColor
        }
        tagA[i].onmouseout = function() {
            this.style.backgroundColor = firstColor; //firstColor
        }
    }
    //重要文字
    for (i = count - 6; i < count; i++) {
        tagA[i].style.color = secondColor; //secondColor
    }
    //遍历<a>
    for (var i = 11; i < count - 6; i++) {
        tagA[i].onmouseover = function() {
            this.style.color = firstColor; //firstColor
        }
        tagA[i].onmouseout = function() {
            this.style.color = '#000000';
        }
    }
    localStorage.name = colorName; //记录localStorage，colorName
}
