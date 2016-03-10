//头部导航
define(function(require,exports,module) {
    $('.headTab').hover(function() {
        $('#headTabHide').css('display', 'block');
    },function(){
        $('#headTabHide').css('display', 'none');
    });
    $('#headTabHide').hover(function(){
    	$(this).css('display', 'block');
    },function(){
    	$(this).css('display', 'none');
    });
    $('.headTab').children().each(function() {
        var index = $(this).index() - 1;
        $(this).hover(function() {      	
            $('.hTabHInner').eq(index).css('background', '#f7f7f7');
        }, function() {
            $('.hTabHInner').eq(index).css('background', '#fff');
        });
    });
    $('.hTabHInner').each(function(){
    	$(this).hover(function() {      	
            $(this).css('background', '#f7f7f7');
        }, function() {
            $(this).css('background', '#fff');
        });
    });
});
