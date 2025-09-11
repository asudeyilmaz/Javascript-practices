let kitap1 = {isim: "Her Şeyi Düşünme", yazar: "Anne Bogel", fiyat: 25, raf: "1.4RAF"}
let kitap2 = {isim: "Hiçbir Karşılaşma Tesadüf Değildir", yazar: "Hakan Mengüç", fiyat: 35, raf: "2.1RAF"}
let kitap3 = {isim: "Insan Neyle Yaşar", yazar: "Tolstoy", fiyat: 34, raf: "3.5RAF"}
let kitap4 = {isim: "Zafer Sızlanarak Kazanılmaz", yazar: "Haluk Tatar", fiyat: 25, raf:"4.2RAF"}
let kitap5 = {isim: "Şeker Portakalı", yazar: "José Mauro de Vasconcelos", fiyat: 12, raf:"5.3RAF"}

let kitaplar = [kitap1,kitap2, kitap3, kitap4, kitap5];


/* ------------------------
  |     |          |       |
  |------------------------|
  |     |  raf22  |      |
  |------------------------|
  |raf11 |          |       |
  |------------------------|

 şeklinde raf oluşturucaz  5sütun 5 satır içericek */

 //objeleri oluşturalım

 let raf11 = { kod: "1.1RAF", goster:false}
 let raf12 = { kod: "1.2RAF", goster:false}
 let raf13 = { kod: "1.3RAF", goster:false}
 let raf14 = { kod: "1.4RAF", goster:false}
 let raf15 = { kod: "1.5RAF", goster:false}

 let raf21 = { kod: "2.1RAF", goster:false}
 let raf22 = { kod: "2.2RAF", goster:false}
 let raf23 = { kod: "2.3RAF", goster:false}
 let raf24 = { kod: "2.4RAF", goster:false}
 let raf25 = { kod: "2.5RAF", goster:false}

 let raf31 = { kod: "3.1RAF", goster:false}
 let raf32 = { kod: "3.2RAF", goster:false}
 let raf33 = { kod: "3.3RAF", goster:false}
 let raf34 = { kod: "3.4RAF", goster:false}
 let raf35 = { kod: "3.5RAF", goster:false}

 let raf41 = { kod: "4.1RAF", goster:false}
 let raf42 = { kod: "4.2RAF", goster:false}
 let raf43 = { kod: "4.3RAF", goster:false}
 let raf44 = { kod: "4.4RAF", goster:false}
 let raf45 = { kod: "4.5RAF", goster:false}

 let raf51 = { kod: "5.1RAF", goster:false}
 let raf52 = { kod: "5.2RAF", goster:false}
 let raf53 = { kod: "5.3RAF", goster:false}
 let raf54 = { kod: "5.4RAF", goster:false}
 let raf55 = { kod: "5.5RAF", goster:false}

 /* alttan üste alınca hiyerarşi doğru olacak */

 let raflar = [
	[raf51,raf52,raf53,raf54,raf55],
	[raf41,raf42,raf43,raf44,raf45],
	[raf31,raf32,raf33,raf34,raf35],
	[raf21,raf22,raf23,raf24,raf25],
	[raf11,raf12,raf13,raf14,raf15]];

	function rafOlustur(){
		console.clear();
		let satir = "";
		for(let i = 0 ; i<raflar.length ; i++) {
		for(let j=0; j<5 ; j++){
			satir+="|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") ;
		}
		console.log(satir);
		console.log("--------------------");
		satir="";
	}
	}

	function kodBul(kitapIsmi) {
		let rafKod=null;
		kitaplar.forEach(function(kitap){
			if(kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
				rafKod=kitap.raf;
				
			}
		});
		return rafKod;
	}

	function raftaGoster(rafKodu) {
		for(let i = 0 ; i<raflar.length; i++) {
			for(let j= 0 ; j<5 ; j++) {
				if(raflar[i][j].kod==rafKodu) {
					raflar[i][j].goster=true;
					break;
				}
			}
		}
	}

	rafOlustur();

	let kitapİsmi = prompt("Lütfen bir kitap ismi giriniz.");
	let rafKod = kodBul(kitapİsmi);

	if(rafKod!= null) {
raftaGoster(rafKod);
rafOlustur();
	}else{
alert("Girdiğiniz kitap kütüphanemizde bulunmamaktadır.")
	}