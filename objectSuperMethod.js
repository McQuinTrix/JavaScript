Object.prototype.super = function(name){
       var that = this;
       var func = that[name];
       return function(){
              return func.apply(that,arguments);
       }
}

//For Eg: Where to use !

var mammal = function(spex){
    this.salutation = "";
    this.get_name = function(){
        return (this.salutation+" "+spex.name +" is my name, and you are gentleman");
    }
    return this;
}

var coolerMammal = function(spex){
     var that = mammal(spex);
     var prev = that.super("get_name");
     that.get_name = function(){
         return "hey yo! "+prev()+", now lets go party";
     };
     return that;
}

var human = coolerMammal({name: "Mitch"});

human.get_name();
// Output: "hey yo! Mitch is my name, and you are gentleman, now lets go party"

blackGuy.salutation = "Mister";
// Out: "Mister"

blackGuy.get_name();
// "hey yo! Mister Mitch is my name, and you are gentleman, now lets go party"
