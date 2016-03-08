function compare() {
    var arr = ['a', 'x', 'b', 'd', 'm', 'a', 'k', 'm', 'p', 'j', 'a'];
    var result = new Object();
    //建立新对象result={arr[x]:{count:,position:}}
    var count = 0; //次数
    for (var x = 0; x < arr.length; x++) { //遍历arr 
        var key = arr[x]; //键值
        var item = result[key]; // 键值对应的对象 
        if (item) { //item有值，说明前面遍历过相同的元素
            item.count += 1; //次数加一
            item.position.push(x); //把同一个字母的位置放在一起
        } else { //出现一次的字母
            result[key] = {
                count: 1,
                position: [x]
            }
        }
    }
    var keys = Object.keys(result);
    //对象result的key值，即所有不相同的字母
    var arrCount = new Array(); //定义数组，把次数放在里面
    for (var x = 0; x < keys.length; x++) { //遍历result
        arrCount.push(result[keys[x]].count);
        //把对象result的子对象的count值放在arrCount数组里
        if (x == keys.length - 1) {
            //遍历完所有元素，开始找最多次数的元素
            var countmax = Math.max.apply(Math, arrCount);
            //找到最多次数
            for (var x = 0; x < keys.length; x++) {
                //遍历数组arrCount
                if (arrCount[x] == countmax) { //找到x
                    document.getElementById('print').innerHTML = "出现次数最多的字母" + keys[x]; //字母
                    document.getElementById('count').innerHTML = "次数" + result[keys[x]].count; //次数
                    document.getElementById('position').innerHTML = "位置" + result[keys[x]].position; //位置
                }
            }
        }
    }
}
