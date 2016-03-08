define(function(require,exports,module) {
    var prev = $('.left-btn'),
        next = $('.right-btn'),
        list = $('.item-wrap'),
        container = $('.page-wrap'),
        buttons = $('.bottom-btn>span'),
        timer,
        index = 0,
        indexP = 0,
        auto = false;

    function play() {
        timer = setInterval(function() {
            next.click();
        }, 2000)
    }

    function stopPlay() {
        clearInterval(timer);
    }

    function showBtn(index) {
        $.each(buttons, function() {
            buttons.removeClass('on');
        });
        buttons.eq(index).addClass('on')
    }


    $.each(buttons, function() {
        $(this).click(function() {
            if (!auto) {
                auto = true;
                var myIndex = parseInt($(this).attr('index'));
                if (myIndex != index) {
                    list.animate({
                        left: (myIndex + 1) * -560
                    }, 1000, function() {
                        auto = false;
                        index = myIndex;
                    });
                    showBtn(myIndex);
                }
            }
        });

    });

    function moveBtn(offset, index1, index2, left, i) {
        if (!auto) {
            auto = true;
            list.animate({
                left: parseInt(list.css('left')) + offset
            }, 1000, function() {
                if (index == index1) {
                    index = index2;
                    list.css('left', left)
                } else {
                    index = index + i;
                }
                showBtn(index);
                auto = false;
            })
        }
    }
    next.click(function() {
        moveBtn(-560, 5, 0, -560, 1);
        /* if (!auto) {
             auto = true;
             list.animate({
                 left: parseInt(list.css('left')) - 560
             }, 1000, function() {              
                 if (index == 5) {
                     index = 0;
                     list.css('left', -560)
                 } else {
                     index += 1;
                 }
                 showBtn(index);
                 auto = false;
             })
         }*/

    });

    prev.click(function() {
        moveBtn(560, 0, 5, -3360, -1);
        /*
        if (!auto) {
            auto = true;
            list.animate({
                left: parseInt(list.css('left')) + 560
            }, 1000, function() {
                if (index == 0) {
                    list.css('left', -3360);
                    index = 5;
                } else {
                    index -= 1;
                }
                showBtn(index);
                auto = false;

            });
        }
        */
    });
    container.mouseover(
        stopPlay
    );
    container.mouseout(
        play
    );
    play();
});

/*<script type="text/javascript">
    window.onload = function() {
        var container = document.getElementsByClassName('page-wrap'),
            list = document.getElementsByClassName('item-wrap'),
            prev = document.getElementsByClassName('left-btn'),
            next = document.getElementsByClassName('right-btn'),
            buttons = document.getElementsByClassName('bottom-btn')[0].getElementsByTagName('span'),
            index = 0,
            animated = false,
            timer;
        //showButton()
        function showButton() {
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].className == 'on') {
                    buttons[i].className = '';
                    break;
                }
            }
            buttons[index].className = 'on';
        }

        function animate(offset) {
            animated = true;
            var newLeft = parseInt(list[0].style.left) + offset,
                time = 300, //位移总时间
                interval = 10, //位移间隔时间
                speed = offset / (time / interval); //每次位移量
            function go() {
                if ((speed < 0 && parseInt(list[0].style.left) > newLeft) || (speed > 0 && parseInt(list[0].style.left) < newLeft)) {
                    list[0].style.left = parseInt(list[0].style.left) + speed + 'px';
                    setTimeout(go, interval);

                } else {
                    animated = false;
                    list[0].style.left = newLeft + 'px';
                    if (newLeft > -560) {
                        list[0].style.left = -3360 + 'px';
                    }
                    if (newLeft < -3360) {
                        list[0].style.left = -560 + 'px';
                    };
                }

            }
            go();
        }

        function play(){
        	timer=setInterval(function(){
        		next[0].onclick();
        	},3000);
        }
        function stop(){
        	clearInterval(timer);
        }
        next[0].onclick = function() {
            if (!animated) {

                if (index == 5) {
                    index = 0;
                } else {
                    index += 1;
                }
                showButton();

                animate(-560);
            }
        }
        prev[0].onclick = function() {
            if (!animated) {
                if (index == 0) {
                    index = 5;
                } else {
                    index -= 1;
                }
                showButton();

                animate(560);
            }
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function() {
                if (this.className == 'on') {
                    return;
                }
                var myIndex = parseInt(this.getAttribute('index'));
                var offset = -560 * (myIndex - index);
                if (!animated) {
                    animate(offset);
                }
                index = myIndex;
                showButton();
            }
        }
        container[0].onmouseover=stop;
        container[0].onmouseout=play;
        play();

    }
    </script>*/
