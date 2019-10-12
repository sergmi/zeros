module.exports = function zeros(expression) {
function multiplycation(first,second){
	let a=[],b=[],PER=0,PERU=0,PERE=0,k,i,RESULT,RES=[],RESU=[],RESE=[];
	first+='';
	second+='';
	a=first.match(/\d/g).reverse();
	b=second.match(/\d/g).reverse();

	for(k=0;k<b.length;k++){
		PER=0;
		for(i=0;i<a.length;i++){
			if(i==0){
				PERE=0;
			}
			RESULT=a[i]*b[k]+PER+PERE;
			
			PERE=0;
			if(RESULT>9){
				if(RES[i+k]){
					RESU[i+k]=RES[i+k]+Number(String(RESULT).match(/\d$/));
					if(RESU[i+k]>9){
						RES[i+k]=Number(String(RESU[i+k]).match(/\d$/));
						PERU=Number(String(RESU[i+k]).match(/\d/));
					}
					else{
						RES[i+k]=RESU[i+k];
					}
				}
				else {			
					RES[i+k]=Number(String(RESULT).match(/\d$/));
				}
			
				PER=Number(String(RESULT).match(/\d/))+PERU;
				PERU=0;

				if(i==a.length-1&&PER){RES.push(PER);}
			}
			else {
				if(RES[i+k]){
					
					RESE[i+k]=RES[i+k]+RESULT;

					if(RESE[i+k]>9){
						RES[i+k]=Number(String(RESE[i+k]).match(/\d$/));
						PERE=Number(String(RESE[i+k]).match(/\d/));
						if(i==a.length-1&&PERE){RES.push(PERE);}
					}
					else{
						RES[i+k]=RESE[i+k];
					}
				}
				else {			
					RES[i+k]=RESULT;
				}
				PER=0;
				
			}
		}
		
	}
RES=RES.reverse().join('');

return RES;
}

function factorial(n){  
		if(n==0){
		return 1;
		}
		else if(n!=1){
			return multiplycation(n,factorial(n-1));
		}else {
			return n;
		}
}

function factorial_double(n){  
		if(n==0){
		return 1;
		}
		else if(n!=1){
			return multiplycation(n,factorial_double(n-2));
		}else {
			return n;
		}
}


let f1=expression.match(/\d+(?=!!)/g),res=1,i,k,result;
	
if(f1){for (i=0;i<f1.length;i++){
	res=multiplycation(res,factorial_double(+f1[i]));
	expression=expression.replace('!!','');
}}
	
let f2=expression.match(/[1-9][0-9]*(?=!)/g);

if(f2){for (k=0;k<f2.length;k++){
	res=multiplycation(res,factorial(+f2[k]));
}}

res=res.match(/0*$/)[0].length;
return res;
}//==========
