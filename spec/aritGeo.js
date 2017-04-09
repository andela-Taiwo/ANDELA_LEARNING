function arithmetic(num){
  var arithmetic = false;
  const c = num[1] - num[0];
  for(var i=0 ; i<num.length; i++){
    for(var j=i+1; j<num.length; j++){
      if(num[j] === c+ num[j-1]){
        arithmetic=true;
  		}
  		else{
  		  arithmetic=false;
  		  break;
  		}

  
  
  	}
  		
  }
  return(arithmetic);
}

function geometric(num){
  const r = num[1] /num[0];
	const a = num[0];
  var geometric = false;
  for(var i=0 ; i<num.length; i++){
    for(var j=i+1; j<num.length; j++){
      if(num[j] === a*(Math.pow(r,j))){
        geometric=true;
  		}
  		else{
  		  geometric=false;
  		  break;
  		}

  
  
  	}
  		
  }
  return(geometric);
}


var exports =module .exports = {};

exports.aritGeo=function(num){
	if(num.length === 0){
		return(0)
	}else if(geometric(num)){
	  return("Geometric");
	}else if(arithmetic(num)){
	  return("Arithmetic");
	}
	else{
	  return(-1)
	}

};










