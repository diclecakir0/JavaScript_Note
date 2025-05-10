/*
1-Bakiye Görüntüleme
2-Para Yatırma
3-Para Çekme
4-Çıkış

ATM UYGULAMASI
*/

let yeniSatir= "\r\n";
let bakiye= 1000;

let metin=  "1-Bakiye Görüntüleme" + yeniSatir +
			"2-Para Çekme" + yeniSatir +
			"3-Para Yatırma" + yeniSatir +
			"4-Çıkış" + yeniSatir +
			"İşlem Seçiniz: ";
		
let değer = prompt(metin);

switch(değer){
	case "1": 
		alert("Bakiyeniz: " + bakiye + " TL");
		break;
	case "2":
		let cekilecekTutar = Number(prompt("Çekilecek Tutar: "));
		if (cekilecekTutar < bakiye){
			bakiye = bakiye - cekilecekTutar;
			alert("Yeni Bakiyeniz: " + bakiye + " TL");
		}else{
			alert("Bakiyenizden fazla para çekemezsiniz.");
		}
		break;
	case "3":
		let yatırılacakTutar = Number(prompt("Yatırılacak Tutar: "));	
		bakiye = bakiye + yatırılacakTutar;
		break;
	case "4":
		console.log("Çıkış yapıldı.");
		break;
	default:
		alert("Lütfen 1 ile 4 arasında bir değer giriniz.");
		break;
	}
	  