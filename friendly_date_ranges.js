/* Function to find month */
function Monther(month1){
    var aa = ["","January","February","March","April","May","June","July","August","September","October","November","December"];
    return aa[month1];
  }
/**************************/
/* Function to find date */
  function Dater(date1){
    var place = "";
    switch(Number(date1[date1.length-1])){
      case 1:
        place = "st";
        break;
      case 2:
        place = "nd";
        break;
      case 3:
        place = "rd";
        break;
      default:
        place = "th";
        break;
    }
    switch(Number(date1[date1.length-2])){
      case 1:
        place = "th";
        break;
      default:
        break;
    }
    return Number(date1)+place;
  }
/************************************/
/** Month Day Combiner*/
function MonthDayFinder(stringy){
    var all = stringy.split("-").join("");
    var month = Number(all.substring(4,6));
    var date = all.substring(6);
    date = Dater(date);
    month = Monther(month);
    return month+" "+date;
  }
/************************/
function friendly(str) {
  
  if(str[0]==str[1]){
    return [ MonthDayFinder(str[0])+", "+str[0].substring(0,4)];
  }
  
  if(str[0].substring(0,4)==str[1].substring(0,4)){
    if(str[0].substring(5,7)==str[1].substring(5,7)){
      return [MonthDayFinder(str[0]),Dater(str[1].substring(8))];
    }else{
      return [MonthDayFinder(str[0]),MonthDayFinder(str[1])+", "+str[0].substring(0,4)];
    }
  }else{
    var all1 = str[0].split("-").join("");
    var year1 = Number(all1.substring(0,4));
    var month1 = Number(all1.substring(4,6));
    
    var all2 = str[1].split("-").join("");
    var year2 = Number(all2.substring(0,4));
    var month2 = Number(all2.substring(4,6));
    
    if(year2-year1 > 1 || month1-month2 == 0){
      return [MonthDayFinder(str[0])+", "+year1,MonthDayFinder(str[1])+", "+year2];
    }
    if(year2-year1 == 1){
      console.log([MonthDayFinder(str[0]),MonthDayFinder(str[1])+", "+year2]);
      return [MonthDayFinder(str[0]),MonthDayFinder(str[1])];
    }
  }
}
/************************/
friendly(['2015-07-01', '2015-07-04']);
