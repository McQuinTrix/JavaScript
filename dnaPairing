/*
The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.
*/
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
