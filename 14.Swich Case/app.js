
/* let sayi = prompt("1'den 5'e kadar bir sayi giriniz...");

switch(sayi){
	case "1": 
		console.log("Bir");
		break;
	case "2":
		console.log("İki");
		break;
	case "3":
		console.log("Üç");
		break;
	case "4":
		console.log("Dört");
		break;
	case "5":
		console.log("Beş");
		break;
	default:
		console.log("Lütfen 1 ile 5 arasında bir sayı seçiniz")
}

*/

let yesniSatir = "\r\n";

let metin = "1-Pazartesi" + yesniSatir + "2-Salı" + yesniSatir + "3-Çarşamba" + yesniSatir + "4-Perşembe" + yesniSatir + "5-Cuma" + yesniSatir + "6-Cumartesi" + yesniSatir + "7-Pazar" + yesniSatir + "Lütfen 1 ile 7 arasında bir sayı giriniz...";

let gun = prompt(metin);

switch(gun){
	case "1":
		console.log("Pazartesi gününü seçtiniz");
		break;
	case "2":
		console.log("Salı gününü seçtiniz");
		break;
	case "3":
		console.log("Çarşamba gününü seçtiniz");
		break;
	case "4":
		console.log("Perşembe gününü seçtiniz");
		break;
	case "5":
		console.log("Cuma gününü seçtiniz");
		break;
	case "6":
		console.log("Cumartesi gününü seçtiniz");
		break;
	case "7":
		console.log("Pazar gününü seçtiniz");
		break;
	default:
		console.log("Lütfen 1 ile 7 arasında bir sayı seçiniz");
		break;	
}