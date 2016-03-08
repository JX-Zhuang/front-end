define(function(require,exports,module) {
	// 通过require引入依赖
	require('jquery');
	var index=require.async('index',function(index_callback){
		index_callback.doSomething();
	});
});