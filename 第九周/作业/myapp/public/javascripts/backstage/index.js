$(document).ready(function() {
    $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            $('form').each(function() {
                event.preventDefault();
            });
        }
    });
    //新闻首页
    newsindex();

    function newsindex() {
        $("#news-contanier").empty();
        newsHead("#news-contanier");
        $.ajax({
            type: "GET",
            url: "../../backstagesql",
            dataType: "json",
            success: function(data) {
                indexNews(data);
            },
            error: function(jqXHR) {
                alert("错误：" + jqXHR.status);
            }
        });
    }
    $("#newsindex-btn").click(function() {
        $("#news-contanier").empty();
        newsHead("#news-contanier");
        $.ajax(searchObj);
    });
    var searchObj = {
        type: "GET",
        url: "../../backstagesql",
        dataType: "json",
        success: function(data) {
            indexNews(data);
        },
        error: function(jqXHR) {
            alert("错误：" + jqXHR.status);
        }
    };

    //增加新闻
    $("#insert-btn").click(function(e) {
        e.preventDefault();
        if (($("#newstype").val() == "") || ($("#newstitle").val() == "") || ($("#newsimg").val() == "") || ($("#newscontent").val() == "") || ($("#newstime").val() == "")) {
            alert("不能为空");
        } else {
            insert();
        }
    });

    function insert() {
        $.ajax({
            type: "POST",
            url: "../backstagesql/insert",
            dateType: "json",
            data: {
                newstype: $("#newstype").val(),
                newstitle: $("#newstitle").val(),
                newsimg: $("#newsimg").val(),
                newscontent: $("#newscontent").val(),
                addtime: $("#newstime").val(),
            },
            success: function(data) {
                alert("添加成功");
            },
            error: function(jqXHR) {
                alert("错误:" + jqXHR.status);
            }
        });
    }

    //查询新闻
    $("#search-news-btn").click(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "../backstagesql/select",
            dataType: "json",
            data: {
                id: $("#search-news").val()
            },
            success: function(data) {
                if (data != "") {
                    $("#search-news-contanier").empty();
                    newsHead("#search-news-contanier");
                    searchNews(data[0]); //输出新闻内容
                } else {
                    alert('没有这条新闻');
                }
            },
            error: function(jqXHR) {
                alert("错误：" + jqXHR.status);
            }
        });
    });
    //首页新闻内容
    function indexNews(obj) {
        for (var index = 0; index < obj.length; index++) {
            var addTr = $("<tr>").appendTo("#news-contanier");
            addNewsInner(addTr, "<input type='text' readonly>", obj[index].newstype);
            addNewsInner(addTr, "<input type='text' readonly>", obj[index].newstitle);
            addNewsInner(addTr, "<input type='text' readonly>", obj[index].newsimg);
            addNewsInner(addTr, "<textarea readonly>", obj[index].newscontent);
            addNewsInner(addTr, "<input type='date' readonly>", obj[index].addtime);
            addNewsHead(addTr, obj[index].id);
            operate(addTr); //操作
        }
        deleteButton();
        update();
        save();
    }
    //新闻列表的头部
    function newsHead(obj) {
        var addTr = $("<tr>").appendTo(obj);
        addNewsHead(addTr, "新闻类型");
        addNewsHead(addTr, "新闻标题");
        addNewsHead(addTr, "新闻图片路径");
        addNewsHead(addTr, "新闻内容");
        addNewsHead(addTr, "新闻时间");
        addNewsHead(addTr, "ID");
        addNewsHead(addTr, "操作");
    }
    //添加新闻头部
    function addNewsHead(addId, text) {
        var addTd = $("<td>").appendTo(addId);
        addTd.html(text);
    }
    //添加新闻
    function addNewsInner(addId, tag, text) {
        var addTd = $("<td>").appendTo(addId);
        var addTitle = $(tag).appendTo(addTd);
        addTitle.val(text);
    }

    //查询到的新闻内容
    function searchNews(obj) {
        var addTr = $("<tr>").appendTo("#search-news-contanier");
        addNewsInner(addTr, "<input type='text' readonly>", obj.newstype);
        addNewsInner(addTr, "<input type='text' readonly>", obj.newstitle);
        addNewsInner(addTr, "<input type='text' readonly>", obj.newsimg);
        addNewsInner(addTr, "<textarea readonly>", obj.newscontent);
        addNewsInner(addTr, "<input type='date' readonly>", obj.addtime);
        addNewsHead(addTr, obj.id);
        operate(addTr); //操作
        deleteButton();
        update();
        save();
    }

    //添加操作按钮
    function operate(addId) {
        var addTd = $("<td>").appendTo(addId);
        var operateBtn = [];
        for (var i = 0; i < 3; i++) {
            operateBtn[i] = $("<button>").appendTo(addTd);
        }
        operateBtn[0].addClass("delBtn");
        operateBtn[0].html("删除");
        operateBtn[1].addClass("updateBtn");
        operateBtn[1].html("修改");
        operateBtn[2].addClass("saveBtn").css("display", "none");
        operateBtn[2].html("保存");
    }

    //删除按钮
    function deleteButton() {
        $(".delBtn").click(function(e) {
            e.preventDefault();
            var delTr = $(this).parent().parent();
            var delTd = $(delTr).children();
            $.ajax({
                type: "POST",
                url: "../backstagesql/delete",
                dataType: "json",
                data: {
                    id: $(delTd).eq(5).text()
                },
                success: function(data) {
                    alert("删除成功");
                },
                error: function(jqXHR) {
                    alert("错误：" + jqXHR.status);
                },
            });
            $(delTr).remove();
        });

    }

    //修改按钮
    function update() {
        $(".updateBtn").click(function(e) {
            e.preventDefault();
            var updatelTr = $(this).parent().parent();
            updatelTd = $(updatelTr).children();
            updatelTd.last().children().last().css("display", "block");
            oldTitle = updatelTd.eq(1).children().val(); //需要修改的新闻标题
            $(updatelTd).removeAttr("readonly");
            updatelTd.children().removeAttr("readonly");
            $(updatelTd.eq(1).children()).focus();
        });
    }


    //保存按钮
    function save() {
        $(".saveBtn").click(function(e) {
            e.preventDefault();
            var updatelTr = $(this).parent().parent();
            var updatelTd = $(updatelTr).children();
            $.ajax({
                type: "POST",
                url: "../backstagesql/update", //提交地址
                dataType: "json",
                data: {
                    id: $(updatelTd).eq(5).text(),
                    newstype: updatelTd.eq(0).children().val(),
                    newstitle: updatelTd.eq(1).children().val(),
                    newsimg: updatelTd.eq(2).children().val(),
                    newscontent: updatelTd.eq(3).children().val(),
                    addtime: updatelTd.eq(4).children().val()
                },
                success: function(data) {
                        $(".saveBtn").css("display", "none");
                        updatelTd.children().attr("readonly", "readonly");
                        alert("修改成功");
                },
                error: function(jqXHR) {
                    alert("请输入需要修改的内容");
                }
            });
        });
    }
});
