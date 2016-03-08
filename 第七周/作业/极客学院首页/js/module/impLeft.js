//左边的导航
define(function(require,exports,module) {
    var newIndex;
    $('#impLeft').children().each(function() {
        var index = $(this).index();
        $(this).hover(function() {
            $(this).css({
                'border-left': '2px solid #54bc65',
                'border-right':'0',
                'color': '#54bc65'
            });
            $(this).children().css('display', 'none');
            $('.impLeft-inner').css('display', 'block');
            $('.impLeft-inner-text').eq(index).css('display', 'block');
            newIndex = index;
        }, function() {
            $(this).css({
                'border-left': '1px solid #e4e4e4',
                'border-right': '1px solid #e4e4e4',
                'color': '#333'
            });
            $(this).children().css('display', 'block');

            $('.impLeft-inner').css('display', 'none');
            $('.impLeft-inner-text').eq(index).css('display', 'none');
        });


    });
    $('.impLeft-inner').hover(function() {
        $(this).css('display', 'block');
        $('.impLeft-inner-text').eq(newIndex).css('display', 'block');
        $('#impLeft').children().eq(newIndex).css({
            'border-left': '2px solid #54bc65',
            'border-right':'0',
            'color': '#54bc65'
        });
        $('#impLeft').children().eq(newIndex).children().css('display', 'none');


    }, function() {
        $(this).css('display', 'none');
        $('.impLeft-inner-text').eq(newIndex).css('display', 'none');
        $('#impLeft').children().eq(newIndex).css({
            'border-left': '1px solid #e4e4e4',
            'border-right': '1px solid #e4e4e4',
            'color': '#333'
        });
        $('#impLeft').children().eq(newIndex).children().css('display', 'block');

    });

});
