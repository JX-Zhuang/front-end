$(document).ready(function() {
    //单例设计模式
    //<header>里面的事件
    var header = {
        init: function() {
            var me = this;
            me.render();
            me.bind();
        },
        render: function() {
            var me = this;
            me.set = $('.set');
            me.more = $('.outer');
        }, //页面元素
        bind: function() {
                var me = this;
                me.set.hover(function() {
                    setTimeout('$(".set-inner").toggle()', 400)
                });
                me.more.hover(function() {
                    setTimeout('$(".right ").toggle()', 400);
                    $('.rightInner').css({
                        'height': document.body.clientHeight + 41,
                    });
                });
            } //绑定事件
    };
    header.init();
    //搜索框 聚焦和失焦
    var focus;
    $('.searchInput').focus(function(event) {
        $(this).css('borderColor', '#4791ff');
        focus = true;
    });
    $('.searchInput').blur(function() {
        $(this).css('borderColor', '#b8b8b8');
        $(this).hover(function() {
                if (focus == false) {
                    $(this).css('borderColor', '#999999');
                }
            },
            function() {
                if (focus == false) {
                    $(this).css('borderColor', '#b8b8b8');
                }
            }
        );

        focus = false;
    });
    //中间内容
    $('.tab li').each(function(index) {
        $(this).hover(function() {
            $(this).toggleClass('tabOver')
        });
        $(this).click(function() {
            $('.tab li').removeClass('tabClick');
            $('.focus').removeClass('tabClick');
            $('.focus>span').removeClass();
            $('.focus>span').addClass('focusIcon');
            $(this).addClass('tabClick');
            $('.middleInner').removeClass('middleInnerShow');
            $('.middleInner').eq(index + 1).addClass('middleInnerShow');

        });
    });
    //我的关注
    $('.focus').hover(function() {
        $('.focus').toggleClass('tabOver');
    });
    $('.focus').click(function() {
        $('.focus').addClass('tabClick');
        $('.focus>span').removeClass();
        $('.focus>span').addClass('focusIconClick');
        $('.tab li').removeClass('tabClick');
        $('.middleInner').removeClass('middleInnerShow');
        $('.middleInner').eq(0).addClass('middleInnerShow');

    });
    //中间设置
    /*$('.middleSet').click(function() {
            $('.setPage').slideToggle('slow')
        });*/
    //我的导航
    $('.myFocus').click(function() {
        $('.myFocusInner').slideToggle('fast');
        $('.myFocus').toggleClass('myFocusClick');
    });
    //返回顶部
    $('#goTop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    var t; //判断向上滑动还是向下滑动的变量
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        //tab在顶端
        if (height >= 275) {
            if (height < t) { //向上,导航出现
                $('.tabInner').addClass('tabTopInner');
                $('.tabTop').show();
                $('.tabInner').show();
                $('.tabTopInner').offset({
                    left: (document.body.clientWidth - 890) * 0.5
                });
            } else if (height > t) { //向下，导航消失
                $('.tabTop').hide();
                $('.tabTopInner').hide();
            } else {
                $('.tabTopInner').offset({
                    left: (document.body.clientWidth - 890) * 0.5
                });
            }
            t = height;
        } else if (height < 231) {
            $('.tabTop').hide();
            $('.tabInner').removeClass('tabTopInner');
        }
        //返回顶部
        if (height != 0) {
            $('#goTop').css('display', 'block');
            //搜索框到达顶部
            if (height >= 173) {
                $('.searchTop').addClass('fixedTop');
                $('.search').addClass('logoTop');
                $('.main form').css('marginTop', '-38px');
                $('.logo-top').show();
                $('#middle').addClass('middleTop');
                $('footer').addClass('middleTop');
                $('.logoTop').offset({
                    left: (document.body.clientWidth - 890) * 0.5
                });
            } else {
                $('.searchTop').removeClass('fixedTop');
                $('.search').removeClass('logoTop');
                $('.main form').css('marginTop', '0')
                $('.logo-top').hide();
                $('#middle').removeClass('middleTop');
                $('footer').removeClass('middleTop')
            }
        } else {
            $('#goTop').css('display', 'none');
        }
    });
    $('.video').click(function() {
        $(window).scroll(function() {
            //图片对象
            var dataImg = {
                0: [{
                    'src': '1.jpg',
                    'title': '十月围城',
                    'type': 'film'
                }, {
                    'src': '2.jpg',
                    'title': '芈月传',
                    'type': 'teleplay'
                }, {
                    'src': '7.jpg',
                    'title': '大力神',
                    'type': 'film'
                }, {
                    'src': '8.jpg',
                    'title': '越狱第一季',
                    'type': 'teleplay'
                }],
                1: [{
                    'src': '19.jpg',
                    'title': '奔跑吧兄弟 第三季',
                    'type': 'variety'
                }, {
                    'src': '27.jpg',
                    'title': '琅琊榜',
                    'type': 'teleplay'
                }, {
                    'src': '28.jpg',
                    'title': '爱探险的朵拉第七季',
                    'type': 'animation'
                }, {
                    'src': '29.jpg',
                    'title': '花千骨',
                    'type': 'teleplay'
                }],
                2: [{
                    'src': '30.jpg',
                    'title': '圣斗士星矢之冥王神话',
                    'type': 'animation'
                }, {
                    'src': '31.jpg',
                    'title': '小宇宙',
                    'type': 'film'
                }, {
                    'src': '32.jpg',
                    'title': '精武风云:陈真',
                    'type': 'film'
                }, {
                    'src': '33.jpg',
                    'title': '大秧歌',
                    'type': 'teleplay'
                }],
                3: [{
                    'src': '34.jpg',
                    'title': '英国佬',
                    'type': 'film'
                }, {
                    'src': '35.jpg',
                    'title': '夏洛特烦恼',
                    'type': 'film'
                }, {
                    'src': '36.jpg',
                    'title': '奔跑吧兄弟电影版',
                    'type': 'film'
                }, {
                    'src': '37.jpg',
                    'title': '昆虫总动员',
                    'type': 'film'
                }]
            };
            //是视频瀑布流
            if (document.body.clientHeight <= innerHeight + $(window).scrollTop()) {
                //把新的div添加到最后
                var videoOuter = $('<div>').addClass('videoOuter').appendTo('.videoInner');
                //随机添加图片           
                var i = Math.floor(Math.random() * 4);
                //添加图片
                $.each(dataImg[i], function(index, value) {
                    var videoBox = $('<div>').addClass('videoBox').appendTo('.videoOuter:last');
                    var videoBoxA = $('<a href="" title="">').appendTo(videoBox);
                    var videoText = $('<div>').addClass('videoText').appendTo(videoBox);
                    var videoBar = $('<a href="">').addClass('videoBar').appendTo(videoBox);
                    videoBar.addClass($(value).attr('type'));
                    $('<img>').attr({
                        'src': 'img/video/' + $(value).attr('src'),
                        'title': $(value).attr('title')
                    }).appendTo(videoBoxA);
                    $('<a href>').text($(value).attr('title')).appendTo(videoText);
                });

            }
        });
    });

});
