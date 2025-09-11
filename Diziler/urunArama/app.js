let urun1 = {
	isim: "ACER Swift",
	kategori: "Teknoloji",
	fiyat: 6.219
}

let urun2 = {
	isim: "ACER Nitro 5",
	kategori: "Teknoloji",
	fiyat: 13.999
}
let urun3 = {
	isim: "LENOVO V15",
	kategori: "Teknoloji",
	fiyat: 10.999
}
let urun4 = {
	isim: "LENOVO V14",
	kategori: "Teknoloji",
	fiyat: 4.399
}
let urun5 = {
	isim: "LENOVO Ideapad",
	kategori: "Teknoloji",
	fiyat: 4.399
}

let urunleri = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullaniciUrunismi = prompt("Bir ürün ismi giriniz.");

filtreliUrunleriDoldur(urunleri);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler){
urunler.forEach(function (urun){
	if(urun.isim.toUpperCase().includes(kullaniciUrunismi.toUpperCase(),0)){
filtreliUrunler.push(urun);
	}
});
}

function filtreliUrunleriYazdir(urunler){
	urunler.forEach(function (urun) {
		console.log("------------------------------------");
		console.log("|" + urun.isim + "|"+ urun.fiyat + "|" + urun.kategori);
		console.log("------------------------------------");

	});
}