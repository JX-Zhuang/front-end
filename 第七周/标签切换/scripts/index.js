var timeoutid; //延时
$(document).ready(function() {
    $('#tablefirst li').each(function(index) { //each()遍历每个li标签
        var liNode = $(this);
        liNode.mouseover(function() {
            timeoutid = setTimeout(function() {
                $('div.content').removeClass('content');
                $('#tablefirst li.tabin').removeClass('tabin');
                $('div').eq(index).addClass('content');
                liNode.addClass('tabin');
            }, 300)
        }).mouseout(function() {
            clearTimeout(timeoutid)

        })
    })

    //$('#realcontent').load("mytab.html");
    $('#tabsecond li').each(function(index) {
        $(this).click(function() {
            $('#tabsecond li.tabin').removeClass('tabin');
            $(this).addClass('tabin');
            if (index == 0) {
                $('#realcontent').load("mytab.html div");
            }else if (index==1) {
                $('#realcontent').load("mytab.html");
            }else if (index==2) {
                $('#realcontent').load("mytab.html");
            }
        })
    })

})
