'use strict'
var exports = module.exports={};

exports.fizzBuzz=function(num){

   
    var N =num;

    if((N >=1 && N<10000 ) && typeof(N)==='number'){  
        if(N%3===0 && N%5 ===0 ){
            return("FizzBuzz");
        }
        else if(N%3===0){
            return("Fizz");
        }
        else if(N%5 ===0 ){
            return("Buzz");
        }

        else{
            return(N)
        }
      
                
            
    }
                
    else{
        return(undefined);
        }
};





