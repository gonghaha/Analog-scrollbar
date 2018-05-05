window.onload = function (){
  var box = document.getElementsByClassName("box")[0];
  var content = document.getElementsByClassName("content")[0];
  var right = document.getElementsByClassName("right")[0];
  var scroll = document.getElementsByClassName("scroll")[0];
  var scrollHeight = right.offsetHeight/content.offsetHeight*right.offsetHeight
  scroll.style.height = scrollHeight +"px";

  scroll.onmousedown = function(){
    var scrollPoint = event.pageY - scroll.offsetTop - box.offsetTop;
    document.onmousemove = function(event){
      window.getSelection().removeAllRanges();
      var target =event.pageY - box.offsetTop - scrollPoint;
      if(target<0){
        target = 0;
        scrollPoint = event.pageY - scroll.offsetTop - box.offsetTop;
      }else if (target > box.offsetHeight - scroll.offsetHeight) {
        target = box.offsetHeight - scroll.offsetHeight;
        scrollPoint = event.pageY - scroll.offsetTop - box.offsetTop;
      }
      scroll.style.top = target + "px";
      content.style.top = -(target/right.offsetHeight)*content.offsetHeight + "px";
    }
  }

  document.onmouseup = function(){
    document.onmousemove = null;
  }
}
