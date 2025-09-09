


let metin = "Dünyanın merkezine yolculuk için alınacakları alalım.";

bul("m");
bul("ü");
bul("D");

function bul(harf) {
	let toplam=0;
      for(let i =0; i<metin.length ; i++){
		if(metin.charAt(i).toLowerCase()===harf.toLowerCase()) {
			toplam+=1;
		} 
	  }
	  console.log("Harf sayısı: " + toplam) ;
}
