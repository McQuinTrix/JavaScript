//For Opera, user agent strin cannot be trusted
//Look for window.opera(Present in all Opera 5 and later

var ua = navigator.userAgent;

if(window.opera){
  engine.ver = window.opera.version()//available in 7.6 and higher for lower use User-agent
  engine.opera = parseFloat(engine.ver);
}

//Webkit using browser contain the string "AppleWebKit"

else if(/AppleWebKit\/(\S+)/.test(ua)){
  engine.ver = RegExp["$1"]; //returnin from last test of regular expression
  engine.webkit = parseFloat(engine.ver);
}

//detecting KHTML with Konquerer
else if(/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
  engine.ver = RegExp["$1"];
  engine.khtml = parseFloat(engine.ver);
}
//Detect Gecko & MSIE
else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
  engine.ver = RegExp[“$1”];
  engine.gecko = parseFloat(engine.ver);
} else if (/MSIE ([^;]+)/.test(ua)){
  engine.ver = RegExp[“$1”];
  engine.ie = parseFloat(engine.ver);
}

//to detect chrome, detect vendor: Google Inc. & for Safari: vendor: Apple
