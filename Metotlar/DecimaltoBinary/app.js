/* decimal to binary 



*/

//10
convertDecimalToBinary(15);
function convertDecimalToBinary(number) {
	let binary = "";
	
	    while(true){
			binary+=(number%2).toString();
			number=Math.floor(number/2);
			if(number==1)
				{
				binary+=1;
				break;
			}
		
		}
		
	let result = reverse(binary);
	console.log(result);
}



function reverse(binary) {
	let Reverse = "";
	for(let i= binary.length-1; i>=0; i--) {
		 Reverse+=binary.charAt(i);
	}
	return Reverse;
}
