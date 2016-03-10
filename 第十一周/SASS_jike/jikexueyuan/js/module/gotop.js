//回到顶部
define(function(require, exports, module) {
    var goTop = $('.gotop span:first-child');
    var top = $(document).scrollTop();
    if (top > 0) {
        goTop.fadeIn(200);
    } else {
        goTop.fadeOut('fast');
    }
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 0) {
            goTop.fadeIn(200);
        } else {
            goTop.fadeOut(200);
        }
    });
    goTop.click(function() {
        goTop.fadeIn(200);
        $('html,body').animate({
            scrollTop: '0'
        }, 300);
    });
    $('.vip_days span').click(function(){
        $('.vip_days').css('display','none');
    });
    $('.apply span').click(function(){
        $('.apply').css('display','none');
    });
});
