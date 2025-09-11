
/*
1011

sağdan sola doğru 2 üssü 0 , 2üssü 1 şeklinde sayının indexi 0 olana kadar artarak 
sayı ile çarpılır
(2**0) * index[3](yani sonuncu 1) şeklinde 
sonra hepsi toplanır.

*/



function convertBinaryToDecimal(binary){
	let toplam = 0;
	let ust = 0;
	for( let i =binary.length-1; i>=0; i--){
		if (binary.charAt(i)!=0){
			
			toplam+=binary.charAt(i) * Math.pow(2,ust);
		}
		ust++;
	}
	console.log(toplam);
}

convertBinaryToDecimal("101111");