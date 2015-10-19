function pair(str) {
  str = str.split("");
  str = str.map(function(n){
    if(n=="C"){
      return "CG".split("");
    }
    if(n=="G"){
      return "GC".split("");
    }
    if(n=="A"){
      return "AT".split("");
    }
    if(n=="T"){
      return "TA".split("");
    }
  });
  return str;
}

pair("GCG");
