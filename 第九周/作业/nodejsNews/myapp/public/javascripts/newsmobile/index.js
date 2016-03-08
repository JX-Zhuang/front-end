//新闻首页
$(document).ready(function() {
    news();
    //新闻按钮
    $(".news-btn").click(function() {
        var text = $(this).html();
        $("#news-container").empty();
        $.ajax({
            type: "POST",
            url: "../../newsmobilesql",
            dataType: "json",
            data: {
                newstype: text
            },
            success: function(data) {
                showNews(data);
            },
            error: function(jqXHR) {
                alert("错误：" + jqXHR.status);
            },
        });
    });
    //发送请求
    function news() {
        $("#news-container").empty();
        $.ajax({
            type: "POST",
            url: "../../newsmobilesql",
            dataType: "json",
            data: {
                newstype: "科技"
            },
            success: function(data) {
                showNews(data);
                
            },
            error: function(jqXHR) {
                alert("错误：" + jqXHR.status);
            },
        });
    }
    //显示新闻
    function showNews(obj) {
        for (var index = obj.length-1; index >= 0; index--) {
            var newsRow = $("<div class='row'>").appendTo("#news-container"),
                col5 = $("<div class='col-xs-5'>").appendTo(newsRow),
                newsImg = $("<img src='" + obj[index].newsimg + "' class='img-responsive'>").appendTo(col5),
                col7 = $("<div class='col-xs-7 '>").appendTo(newsRow),
                newsTitle = $("<p class='newsTitle'>").appendTo(col7),
                newsTime = $("<span class='newsTime'>").appendTo(col7);
            $("<hr class='divider'>").appendTo(newsRow);
            newsTitle.html(obj[index].newstitle);
            //时间转化UTC->GTM
            var time=new Date(obj[index].addtime.replace('T16:00:00.000Z',''));
            var timestamp=Date.parse(time)+24*3600*1000;
            var timeGTM=new Date(timestamp);
            var month;
            var date;
            if (timeGTM.getMonth()+1<10) {
                month="0"+(timeGTM.getMonth()+1);
            }else{
                month=timeGTM.getMonth()+1;
            }
            if (timeGTM.getDate()<10) {
                date="0"+timeGTM.getDate();
            }else{
                date=timeGTM.getDate();
            }
            newsTime.html(timeGTM.getFullYear()+'-'+month+'-'+date);
        }

    }
});
