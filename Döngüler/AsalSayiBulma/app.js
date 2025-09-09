/*

15 = 1, 2, 3, 4 ,5 ,6 ,7.5

*/

// let a = Math.floor(5.5);
// console.log(a);


let sayi = Number(prompt("Lütfen bir sayı giriniz: "));
let sonuc = true;

for(i=2 ; i<=Math.floor(sayi/2) ; i++) {
	if(sayi%i==0){
		sonuc = false;
		break;
	}
}
if(sonuc){
	alert(sayi + " "+ "asaldır.");
}else {
	alert(sayi +" " + "asal değildir!!");
}