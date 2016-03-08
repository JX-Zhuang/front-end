$(document).ready(function() {
    $('.main>a').click(function(){  //css选择器，需要看以前的课程
       var ulNode=$(this).next('ul');
       /*if(ulNode.css('display')=='none'){
        ulNode.css('display','block')
       }else{
        ulNode.css('display','none')
       }*/
       //ulNode.toggle('normal');//数字、slow、normal、fast
        ulNode.slideToggle();
    })
    $('.hmain').hover(function(){  //css选择器，需要看以前的课程
       var ulNode=$(this).children('ul');
       /*if(ulNode.css('display')=='none'){
        ulNode.css('display','block')
       }else{
        ulNode.css('display','none')
       }*/
       //ulNode.toggle('normal');//数字、slow、normal、fast
        ulNode.slideToggle();
    })
})