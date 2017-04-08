function gcd(m,n){
    while(m%n != 0){
       var oldm = m ; 
       var oldn = n ;

       var m = oldn ; 
       var n = oldm%oldn ; 
    }
    return(n);


}

var exports =module .exports = {};

exports.aritGeo=function(num){
	
	if(num.length === 0){
		return(0);
	}
	else{
		for(var i=0 ; i<num.length; i++){
			for(var j=i+1; j<num.length; j++){
				if(num[j]-num[i] === num[j+1] - num[j]){
					return("Arithmetic");
				}
				else if(gcd(num[j],num[i])=== gcd(num[j+i],num[j])){
					return("Geometric");
				}
				else{
					return(-1);
			    
			  	}


			}
		}

	}


};



