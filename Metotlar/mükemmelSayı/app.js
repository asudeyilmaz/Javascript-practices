/* 
 6- 28 - 496
 tam bölen sayıların toplamı orjinal sayının 2 katına eşit ise mükemmeldir

 6 = 1, 2, 3, 4, 5, 6 = 12 = 6*2=12

*/


function perfectNumber(number) {
	let toplam = 0;
	for(let i =2 ; i<=number/2; i++){
		if (number%i==0){
			toplam +=i;
		}
	}
	toplam+=1+number;
	if(toplam == (number*2)){
		console.log(number + " mükemmel sayıdır.");
	}else {
		console.log(number + " mükemmel sayı değildir");
	}
}
perfectNumber(28);