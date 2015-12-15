//Complete way to detect a function on any object in browser
//Credit: Peter Michaux

function isHostMethod(object,method){
  var t = typeof object[method];
  return (!!(t=='object' && object[method])) || t == "unknown";
}
