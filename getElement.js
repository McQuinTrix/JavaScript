/**
  Nic Zakas Prof JavaScript
**/
function getElement(id){
  if(document.getElementById){
    return document.getElementById(id);
  }else if(document.all){
    return document.all[id];
  }else{
    return new Error("No way to catch Element!");
  }
}
