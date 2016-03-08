$.noConflict();
jQuery.myjQuery=function() {
	alert('Hello World!')
}
jQuery.fn.myjQuery=function(){
	jQuery(this).text('Hello');
}