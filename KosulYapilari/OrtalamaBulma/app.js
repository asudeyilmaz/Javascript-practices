/*
vize1 %30
vize2 %30
final  %40
ortalama ile geçti mi kaldı mı ?
*/

let vize1 = Number(prompt(" 1.sınav notunuzu giriniz."));
let vize2 = Number(prompt("2. sınav notunuzu giriniz:"));
let final = Number(prompt("Final notunuzu giriniz."));

let average = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

if(average >= 60 ) {
	alert("Geçtiniz, Tebrikler :)");
} else {
	alert("Kaldınız..\r\n" + "Ortalamanız: " + average );
}