$(document).ready(function() {
    $('#pId').click(function() {
        $('.pClass').text('我已经改变了')
    })
    $('#clickMeBtn').click(function() {
            //$('#pId').toggle(2000);
            $('#pId').append('123')
        })
        /*
        $('button').dblclick(function(){
        	$('.pClass').text('双击了')
        })
        $('button').mouseenter(function(){
        	$('.pClass').text('放在上面了')
        })
        $('button').mouseout(function(){
        	$('.pClass').text('拿走了')
        })
        $('#over').mouseover(function(){
        	$('.pClass').text('over')
        })
        $('#enter').mouseenter(function(){
        	$('.pClass').text('enter')
        })*/

    /*$(function() {
            $('#test').click(function(e){
            	console.log(e)
            });
            alert($('.myImg').length)
        })
    	$('#clickMeBtn').on('click',clickBtn1);
    	$('#clickMeBtn').on('click',clickBtn2);
    	$('#clickMeBtn').off('click',clickBtn1);
    	//事件的冒泡
    	$('body').on('click',bodyHandler);
    	$('#divPaoId').on('click',divHandler);
    	$('#pao').on('click',pHandler1);
    	$('#pao').on('click',pHandler2);*/


    //自定义事件
    /*$('#clickMe').click(function(){
    	var e=jQuery.Event('MyEvent');
    	$('#clickMe').trigger(e);
    })
    $('#clickMe').bind('MyEvent',function(event){
    	console.log(event);
    })*/
    //获取myPId的text，获得myA的href,获得myInput的value
    $('#clickMe').click(function() {
            alert($('#myInput').val())
        })
        //淡入淡出
    $('#btnOut').click(function() {
        $('#div1').fadeOut(1000);
        $('#div2').fadeOut(1000);
        $('#div3').fadeOut(1000);

    })
    $('#btnIn').click(function() {
        $('#div1').fadeIn(1000);
        $('#div2').fadeIn(1000);
        $('#div3').fadeIn(1000);

    })
   /* $('#btnToggle').click(function() {
        $('#div1').fadeToggle(1000);
        $('#div2').fadeToggle(1000);
        $('#div3').fadeToggle(1000);

    })*/
    $('#btnTo').click(function() {
        $('#div1').fadeTo(1000, 0.5);
        $('#div2').fadeTo(1000, 0.5);
        $('#div3').fadeTo(1000, 0.5);

    })
    $('#btnHide').click(function() {
    	$('#div1').slideUp(500).slideDown(500);//隐藏
    })
     $('#btnShow').click(function() {
    	$('#div1').slideDown(500);//出现
    })
     $('#btnToggle').click(function() {
    	$('#div1').slideToggle(500);//出现/隐藏
    })
     $('#divCss').addClass('addCss1')
     $('#divCss').click(function(){
     	//$(this).addClass('addCss2')
     	//$(this).removeClass('addCss1')
     	$(this).toggleClass('addCss2')
     })

})

//追加内容
function appendText() {
    var textHtml = "<p>html方法追加内容</p>";
    var textJq = $('<p></p>').text('jquery的方法追加内容');
    var textJsdom = document.createElement('p');
    textJsdom.innerText = 'dom方法追加内容';
    $('#pId').append(textHtml, textJq, textJsdom);
}
/*
function bodyHandler(event){
	conLog(event);

}
function divHandler(event){
	conLog(event);
}
function pHandler1(event){
	conLog(event);
	//event.stopPropagation()
	event.stopImmediatePropagation()
}
function pHandler2(event){
	conLog(event);
	//event.stopPropagation()
}
function conLog(event){
	console.log(event);
}

function clickBtn1(){
	alert('clickBtn1')
}
function clickBtn2(){
	alert('clickBtn2')
}*/
