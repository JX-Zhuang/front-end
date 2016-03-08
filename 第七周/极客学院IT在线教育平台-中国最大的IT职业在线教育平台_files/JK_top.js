

 var timestamp=new Date().getTime();
  var img = new Image();
  var url = "http://log.jikexueyuan.com/log_top.gif?"+timestamp+"_"+Math.random();img.onerror = img.onload = function(event) {
            setTimeout(function() {
                return true
            }
            , 300)
        }
        ;
  img.src = url;

