//合作企业 学校 媒体
define(function(require,exports,module) {
    var companyInner = $('#company div:last-child'),
        companyPrev = $('#company .left-btn'),
        companyNext = $('#company .right-btn'),
        schoolInner = $('#school div:last-child'),
        schoolPrev = $('#school .left-btn'),
        schoolNext = $('#school .right-btn'),
        mediaInner = $('#media div:last-child'),
        mediaPrev = $('#media .left-btn'),
        mediaNext = $('#media .right-btn'),
        move = false;
        //左按键
        function prev(inner){
        	if (!move) {
            move = true;
            inner.animate({
                'left': parseInt(inner.css('left')) + 140
            }, 500, function() {
                if (parseInt(inner.css('left')) > -140) {
                    inner.css('left', -1400);
                }
                move = false;
            });
        }
        }
        //右按键
        function next(inner){
        	if (!move) {
            move = true;
            inner.animate({
                'left': parseInt(inner.css('left')) - 140
            }, 500, function() {
                if (parseInt(inner.css('left')) < -1260) {
                    inner.css('left', 0);
                }
                move = false;
            });
        }
        }
    
    //合作院校
    schoolPrev.click(function(){
    	prev(schoolInner);
    });
    schoolNext.click(function(){
    	next(schoolInner);
    });
    //合作企业
    companyPrev.click(function(){
    	prev(companyInner);
    });
    companyNext.click(function(){
    	next(companyInner);
    });
    //媒体
    mediaPrev.click(function(){
    	prev(mediaInner);
    });
    mediaNext.click(function(){
    	next(mediaInner);
    });

});