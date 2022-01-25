alert("Włącz dźwięk!");
setInterval(hide_logo,8000);
setInterval(show_logo_small,8000);
setInterval(show_info,8000);
setInterval(show_start,8000);
function show_logo_small(){
  document.getElementById("logo-small").style.display = "flex";
}
function show_info(){
  document.getElementById("info").style.display = "flex";
}
function show_start(){
  document.getElementById("start").style.display = "flex";
}
function hide_logo(){
  document.getElementById("logo").style.display = "none";
}
function hide(){
  document.getElementById("logo-small").style.opacity = "0";document.getElementById("logo-small").style.height = "0";
  document.getElementById("info").style.opacity = "0";document.getElementById("info").style.margin = "0";
  document.getElementById("start").style.opacity = "0";
  document.getElementById("output").style.display = "flex";

  document.getElementById("start").onclick =function start(){
    var sec = 3;
    if(sec == 0) {stop();}

    var close = setInterval(function(){
      document.getElementById("output").innerHTML = sec ;
      sec--;
      if(sec === -1){clearInterval(close);}
    },1000);
    }
  document.getElementById("output").style.fontSize="4vw";
}
