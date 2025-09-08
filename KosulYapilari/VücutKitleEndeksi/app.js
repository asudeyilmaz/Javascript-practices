 /*
VKİ = ağırlık (kg) / boy (m)²

 */
const newLine = "\r\n";
let kilo = Number(prompt("kilonuzu giriniz: "));
let boy = Number(prompt("boyunuzu metre cinsinden giriniz (ÖR: 1.62):"));
let vki = kilo / (boy * boy);

if(vki < 18.5) {
	alert("Kilo tipiniz: Zayıf." + newLine + "Endeksiniz: " + vki);
}
else if (vki >= 18.5 && vki <= 24.9) {
	alert("Kilo Tipiniz: Sağlıklı." + newLine + "Endeksiniz: " + vki);
}
else if (vki >= 25 && vki <= 29.9) {
	alert("Kilo tipiniz: Şişman." + newLine + "Endeksiniz:" + vki);
}
else if (vki >= 30 && vki <= 39.9) {
	alert("Kilo tipiniz: Obez" + newLine + "Endeksiniz:" + vki);
}
else if ( vki >= 40) {
	alert("Kilo tipiniz: morbid obez" + newLine + "Endeksiniz:" + vki);
}
