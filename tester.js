function watchWindow(property,msg){
var s="Reserved property "+property+" called";
if(msg){
s=msg
}
window.__defineSetter__(property,function(param){console.log(s)})
}


//New reserves words
watchWindow("yield");
watchWindow("let");
