define(function(require,exports,module) {
	//require('jquery');
	console.log($);
	$('#test').css('background','blue')
	// 通过exports引入外部提供接口
	exports.doSomething=function(){
		console.log($);		
		$('#test').click(function(){
			alert('aa')
		})
	}

});