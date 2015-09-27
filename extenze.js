Object.prototype.extenze = function(obj){
     args = [].slice.call(arguments,1);
     for(var i=0; i<args.length; i++){
        for(var j in args[i]){
            obj[j] = args[i][j];
        }
     }
}
}
