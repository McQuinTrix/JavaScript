/* Merging two strings*/
/*
	Using 'arguments' if we want to expand the 'merge' function
    for more than 2 arguments.
*/
var merge = function(){
    
	var str1 = arguments[0] || "",
        str2 = arguments[1] || "",
        /*
          Using OR operator in case if 'undefined' was passed, it won't
          throw any error below when 'length' property called. 
        */
        output="",
        itr1=0,
        itr2=0;
    
    for(var i = 0;i< str1.length+str2.length; i++){
    	if(i%2 === 0){
            /*to paste the remaining str2 if str1.length<str2.length*/
            if(itr1 === str1.length){
                output += str2.slice(itr2);
                break;
            }
            /*********/
        	output+= str1[itr1];
            itr1++;
        }else{
            /*to paste the remaining str1 if str2.length<str1.length*/
            if(itr2 === str2.length){
                output += str1.slice(itr1);
                break;
            }
            /*********/
        	output+= str2[itr2] || "";
            itr2++;
        }
    }
    return output;
}

alert(merge("abc","123")==="a1b2c3");
