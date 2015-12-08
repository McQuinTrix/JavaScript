//From Prof. JavaScript by Nicolas Zakas
function queryString(){
   //getquery string, if present, without the initial '?'

   var qs = (location.search.length > 0 ? location.search.substring(1):""),

      //Objects to hold all arguments
      args = {},

      //get individual items
      items = qs.length ? qs.split("&") : [],
      item = null,
      name = null,
      value = null,

      //used in for loop
      i = 0,
      len = items.length;

      //assign each item onto args
      for(i=0; i<len; i++){
         item = items[i].split("=");
         name = decodeURIComponent(item[0]);
         value = decodeURIComponent(item[1]);
         if(name.length){
            args[name] = value;
         }
      }
   return args;
}
