(function(){
  var count = 1,
      delay = 20,
      timer,
      complete;
  
  timer = function timer(){
    setTimeOut(function inner(){
      // Do the AJAX call
      if(count<3){ //If the AJAX call failed, do it again with a limitation
        count += 1;
        timer();
      }else{
        complete();// when the Ajax call completed
      }
    }, delay);
  };
  
  complete = function(){
    //Ajax has done its work
  }
  
  timer(); //Starting the ajax stuff
  
}());
