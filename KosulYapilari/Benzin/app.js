/* 

dizel : 22.11
LPG : 33.10
benzin : 15.10  

ödenecek tutar
bakiye
kalan tutar
eksik tutar

*/
//! spagettiiii

let dizel= 22.11 , LPG= 33.10, benzin= 15.10;

const newLine = "\r\n" ;
let secim = prompt("1-Dizel" + newLine + "2-LPG" + newLine + "3- Benzin" + newLine + "Lütfen hangisinden alacağınızı seçiniz");
let alianacakLitre =  Number(prompt("Kaç litre alacaksınız?"));
let bakiye = Number(prompt("Bakiyenizi giriniz:"));

if(secim == "1" || secim=="dizel") {
	let ödenecekTutar = dizel * alianacakLitre;
	if (ödenecekTutar <= bakiye) {
		//alabilir
		alert(" Hayırlı olsunn!!"+ newLine + "kalan paran: " + (bakiye-ödenecekTutar));
	} else {
		//alamaz
		alert("Git para yükle al!"+ newLine + " Şu kadar eklersen alabilirsin:" + (ödenecekTutar-bakiye));
	} }

	if(secim =="2" || secim =="lpg") {
        let ödenecekTutar = LPG * alianacakLitre;
		if ( ödenecekTutar <= bakiye) {
			alert(" Hayırlı olsunn!!"+ newLine + "kalan paran: " + (bakiye-ödenecekTutar));
	} else {
		alert("Git para yükle al!" + newLine +" şu kadar eklersen alabilirsin:" + (ödenecekTutar-bakiye));
	}
	}

	if(secim == "3" || secim =="benzin") {
		let ödenecekTutar = benzin * alianacakLitre;
		if ( ödenecekTutar <= bakiye) {
			alert(" Hayırlı olsunn!!"+ newLine + "kalan paran: " + (bakiye-ödenecekTutar));
	} else {
		alert("Git para yükle al!" + newLine +" şu kadar eklersen alabilirsin:" + (ödenecekTutar-bakiye));
	}

	}

