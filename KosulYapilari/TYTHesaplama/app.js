/* 
türkçe
fen
 sosyal
 matematik

 ösym 100 puan
 okul max 60 puan veriyor
 */

 

 let secim = prompt(" 1-TYT hesapla"+ "\r\n" + " 2-Çıkış yap" + "\r\n" + "Bir değer seçiniz." );

 switch(secim) {
	case "1":
		let turkceDogruSayisi = Number(prompt("Türkçe doğru sayısı"));
 let turkceYanlisSayisi = Number(prompt("Türkçe yanlış sayısı"));

 let matematikDogruSayisi = Number(prompt("Matematik doğru sayısı"));
 let matematikYanlisSayisi = Number(prompt("Matematik yanlış sayısı"));

 let fenDogruSayisi = Number(prompt("Fen doğru sayısı"));
 let feYanlisSayisi = Number(prompt("Fen yanlış sayısı"));

 let sosyalDogruSayisi = Number(prompt("Sosyal doğru sayısı"));
 let sosyalYanlisSayisi = Number(prompt("Sosyal yanlış sayısı"));

 let okulPuani = Number(prompt("Okul puanı?"));

 let dogruSayisi = matematikDogruSayisi+ turkceDogruSayisi+ fenDogruSayisi+ sosyalDogruSayisi;
let yanlisSayisi = turkceYanlisSayisi+ matematikYanlisSayisi+ feYanlisSayisi+ sosyalYanlisSayisi;
let puan = dogruSayisi - (yanlisSayisi/4) + 100 + okulPuani;
alert("TYT puanınız :" + puan);
		break;
	case "2":
		alert("Çıkış yapıldı..");
		break;
 }