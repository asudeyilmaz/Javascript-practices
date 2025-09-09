


function cube (sayi) {
	let sonuc = sayi *sayi*sayi;
	let Karesi = kareAl(sonuc);
	console.log(Karesi + yazdır("Asude"));
}


function kareAl (sayi) {
	let sonuc = sayi*sayi;
	return sonuc;
}

cube(2);

function yazdır(isim) {
	return isim;
}