function translate(str) {
  var vows = ["a","e","i","o","u"];
  if(vows.some(function(n){return n == str[0];})){
    return str+"way";
  }else{
    i=0;
    do{
      str = str.split("");
      shift = str.shift();
      str.push(shift);
      str = str.join("");
      console.log(str);
      i++;
    }while(!vows.some(function(n){return n == str[0];}))
    return str+"ay";
  }
}

translate("consonant");
