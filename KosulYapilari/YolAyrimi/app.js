/* 

1.yol
2.yol
3.yol

yolu seç seçtiği yolu göster.

*/

const newLine = "\r\n";

let chosenPath = prompt("1.Yol" + newLine + "2.Yol" + newLine + "3.Yol" + newLine + "Lütfen bir yol seçiniz. (1,2,3)");

if(chosenPath =="1") {
	alert("1. yolu seçtiniz.");
} else if (chosenPath == "2") {
	alert("2.yolu seçtiniz.");
}else if(chosenPath == "3") {
	alert("3.yolu seçtiniz.");
}else {
	alert("geçersiz yol seçimi.");
}
