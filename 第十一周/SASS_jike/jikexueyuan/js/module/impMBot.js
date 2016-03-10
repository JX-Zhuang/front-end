//轮播下边
define(function(require,exports,module) {
    var inner = $('.impMBot-inner'),
        prev = $('.impMBot .left-btn'),
        next = $('.impMBot .right-btn'),
        text =$('#text');
        move = false;
    //左按键
    prev.click(function() {
        if (!move) {
            move = true;
            inner.animate({
                'left': parseInt(inner.css('left')) + 187
            }, 500, function() {
                if (parseInt(inner.css('left')) > -187) {
                    inner.css('left', -748);  
                }
                move = false;
            });
        }
    });

    //右按键
    next.click(function() {
        if (!move) {
            move = true;
            inner.animate({
                'left': parseInt(inner.css('left')) - 187
            }, 500, function() {
                if (parseInt(inner.css('left')) < -748) {
                    inner.css('left', -187); 
                }
                move = false;
            });
        }
    });
    //search搜索框
    text.focus(function(){
    	$('#submit').addClass('submit-focus');
        $('.hot-words').css('display','none');
    });
    text.blur(function(){
    	$('#submit').removeClass('submit-focus');
        $('.hot-words').css('display','block');
    });
});
