function test() {
    alert(2);
    return 'me test';
}
Function.prototype.before = function(fn) {
    var _self = this;
    return function() {
        if (fn.apply(this, arguments)==false) {
            return false;
        }
        return _self.apply(_self, arguments);
    }
};
Function.prototype.after = function(fn) {
    // body...先执行test()
    var _self = this;
    return function() {
     var result= _self.apply(_self, arguments);
     if (result==false) {
     	return false;
     }
        // body...
        fn.apply(this, arguments);
        return result;
    }
};
//挂载 slef => test 执行before回调 执行slef after执行回调
test.after(function() {
    alert(3);
}).before(function() {
    alert(1);
    //return false;
})();
