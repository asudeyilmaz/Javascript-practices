/*

153 armstrong

153 = 1*1*1 + 5*5*5 + 3*3*3  =153
*/

let sayi = prompt("Lütfen bir sayı giriniz.");
let toplam = 0;

for( i=0 ; i<sayi.length ; i++) {
	let rakam = sayi.charAt(i);
	toplam+= rakam*rakam*rakam;
}
if(Number(sayi) == toplam) {
	alert("Armstrong sayıdır.");
}else {
	alert("Armstrong sayı değildir.")
}