function sort(){
   var args = [].slice.call(arguments,0,arguments.length-1);
   return args.sort(arguments[arguments.length-1]);
}

sort('a','z','l',function(a,b){if(a>b){return -1}return 1;});
//-> [z,l,a]
