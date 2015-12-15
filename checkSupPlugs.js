//to Determine if browser has Netscape style plugins
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);

//to determine if browser support basic DOM level 1 capabilities
var hasDOM1 = !!(document.getElementById && document.createElement && document.getElementsByTagName);
