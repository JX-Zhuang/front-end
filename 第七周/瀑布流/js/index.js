$(document).ready(function() {
    $(window).on('load', function() {
        imgLocation();
        var dataImg = {
            'data': [{
                'src': '1.jpg'
            }, {
                'src': '2.jpg'
            }, {
                'src': '3.jpg'
            }, {
                'src': '4.jpg'
            }, {
                'src': '5.jpg'
            }, {
                'src': '6.jpg'
            }, {
                'src': '7.jpg'
            }]
        }
console.log(dataImg)
        //滚动鼠标加载图片
        window.onscroll = function() {
             if(scrollSide()){
                $.each(dataImg.data,function(index,value){
                   var box=$('<div>').addClass('box').appendTo($('#container'));
                   var content=$('<div>').addClass('content').appendTo(box);
                   console.log('img/'+$(value).attr('src'))
                    $('<img>').attr('src','img/'+$(value).attr('src')).appendTo(content);
                });
                imgLocation();
            }
        }
    })
})

//加载图片函数
function scrollSide() {
    var box = $('.box');
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    console.log(documentHeight)
    var scrollHeight = $(window).scrollTop();
    return (lastBoxHeight < documentHeight + scrollHeight) ? true : false;

}


//图片的位置
function imgLocation() {
    //创建盒子对象
    var box = $('.box');
    //获得盒子宽度
    var boxWidth = box.eq(0).width();
    //一排放盒子的个数
    var num = Math.floor($(window).width() / boxWidth);
    //获得盒子高度
    var boxArr = [];
    //获得最小高度
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            //最小高度
            var minboxHeight = Math.min.apply(null, boxArr);
            //最小高度的索引
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({
                'position': 'absolute',
                'top': minboxHeight,
                'left': box.eq(minboxIndex).position().left,
            })
            boxArr[minboxIndex] += box.eq(index).height();
        }
    })
}
