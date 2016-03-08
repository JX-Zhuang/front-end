$(document).ready(function() {
    //向下遍历
    /*$('#div1').children().css({
        border: '3px solid red'
    })//children(可选参数)
    $('#div1').find('a').css({
        border: '3px solid red'
    })*/ //find(必选参数)
    //向上遍历。parent() parents() parentUntil()
    /*$('a').parent().css({
    	border:'3px solid red'
    })*/ //直接父类
    /*$('a').parents().css({
    	border:'3px solid red'
    })*/ //所有父类
    /*$('a').parentsUntil('#div1').css({
        border: '3px solid red'
    })*/ //可选区间遍历
    //同级遍历 siblings() next() nextAll() nextUntil() prev() prevAll() prevUntil()
    /*$('h4').siblings().css({
    	border:'3px solid red'
    })*/ //除了h4，都修改
    /*$('h4').next().css({
    	border:'3px solid red'
    })*/ //h4的下一个元素
    /*$('h4').nextAll().css({
        border: '3px solid red'
    })*/ //向下所有
    /*$('h4').nextUntil('h6').css({
        border: '3px solid red'
    })*/ //区间修改
    /*$('h4').prev().css({
        border: '3px solid red'
    })*/
    /*$('h4').prevAll().css({
		border:'3px solid red'
	})*/
    /*$('h4').prevUntil('p').css({
        border: '3px solid red'
    })*/
//遍历之过滤 first() last() eq() filter() not()
	//$('div p').first().css('background-color','red')
	//$('div p').last().css('background-color','red')
	//$('div p').eq(2).css('background-color','red')  eq(传递id，从0开始)
	$('div p').filter('.pId').css('background-color','red') // filter(指定一个标准)
	//$('div p').not('.pId').css('background-color','red') //与filter相反

})
