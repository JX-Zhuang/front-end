//中间内容
define(function(require,exports,module) {
    $('#midTitle').children().hover(function() {
        var index = $(this).index();
        $('#midTitle').children().each(function() {
            $(this).removeClass('midTitle-show');
        });
        $(this).addClass('midTitle-show');
        $('.midMain').removeClass('midMain-show');
        $('.midMain').eq(index).addClass('midMain-show');

    });
});
