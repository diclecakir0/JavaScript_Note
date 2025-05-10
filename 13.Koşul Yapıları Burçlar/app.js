// Benzin istasyonu

/*
	1-Dizel : 24.53
	2-Benzin : 22.25
	3-LPG : 11.1

	Gelen müşteriden alacağımız bilgler;
	1-Yakıt türü
	2-Yakıt miktarı
*/

let dizel = 24.53;
let benzin = 22.25;
let lpg = 11.1;

let yeniSatir = "\r\n";

let yakitMetni = "1-Dizel" + yeniSatir + "2-Benzin" + yeniSatir + "3-LPG" + yeniSatir + "Yakıt türünü seçiniz: ";


let yakitTipi = prompt(yakitMetni);
if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
	let yakitMiktari = Number(prompt("Yakıt miktarını giriniz: "));
let bakiye = Number(prompt("Bakiyenizi giriniz: "));
if(yakitTipi == 1){
	//Dizel
	let odenecekTutar = dizel * yakitMiktari;
	if(odenecekTutar<bakiye){
		// bakiyeniz yeterli
		bakiye = bakiye - odenecekTutar;
		alert("Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiye: " + bakiye);
	}else{
		// bakiyeniz yetersiz
		alert("Bakiyeniz yetersiz. Yakıt alma işlemi iptal edildi."+ yeniSatir + "ödenecek tutar" + odenecekTutar + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar:" + (odenecekTutar - bakiye));
	}
} else if(yakitTipi == 2){
	//Benzin
	let odenecekTutar = benzin * yakitMiktari;
	if(odenecekTutar<bakiye){
		// bakiyeniz yeterli
		bakiye = bakiye - odenecekTutar;
		alert("Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiye: " + bakiye);
	}else{
		// bakiyeniz yetersiz
		alert("Bakiyeniz yetersiz. Yakıt alma işlemi iptal edildi."+ yeniSatir + "ödenecek tutar" + odenecekTutar + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar:" + (odenecekTutar - bakiye));
	}
} else if(yakitTipi == 3){
	//LPG
	let odenecekTutar = lpg * yakitMiktari;
	if(odenecekTutar<bakiye){
		// bakiyeniz yeterli
		bakiye = bakiye - odenecekTutar;
		alert("Yakıt alma işlemi başarılı" + yeniSatir + "Kalan bakiye: " + bakiye);
	}else{
		// bakiyeniz yetersiz
		alert("Bakiyeniz yetersiz. Yakıt alma işlemi iptal edildi."+ yeniSatir + "ödenecek tutar" + odenecekTutar + yeniSatir + "Bakiyeniz: " + bakiye + yeniSatir + "Eksik Tutar:" + (odenecekTutar - bakiye));
	}
}
}
else{
	alert("Yanlış yakıt türü girdiniz.");
}