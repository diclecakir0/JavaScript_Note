/*
	? SORULAR
	1-Türkçe 40
	2-Matematik 40
	3-Fen Bilimleri 20
	4-Sosyal Bilimler 20

	--->100 puanı ÖSYM veriyor
	---> Okul Puanı max 60 veriyor

*/

let turkceDogru,
  turkceYanlis = 0;
let matematikDogru,
  matematikYanlis = 0;
let fenDogru,
  fenYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let puan = 0;
let okulPuanı = 0;

let yeniSatir = "\r\n";

let mesaj =
  "TYT Puan Hesaplama" +
  yeniSatir +
  "1-Puan hesaplama" +
  yeniSatir +
  "2-Çıkış Yap";

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuanı = Number(prompt("Okul Puanınızı Giriniz:"));
    turkceDogru = Number(prompt("Türkçe Doğru Sayısını Giriniz:"));
    turkceYanlis = Number(prompt("Türkçe Yanlış Sayısını Giriniz:"));

    matematikDogru = Number(prompt("Matematik Doğru Sayısını Giriniz:"));
    matematikYanlis = Number(prompt("Matematik Yanlış Sayısını Giriniz:"));

    fenDogru = Number(prompt("Fen Bilimleri Doğru Sayısını Giriniz:"));
    fenYanlis = Number(prompt("Fen Bilimleri Yanlış Sayısını Giriniz:"));

    sosyalDogru = Number(prompt("Sosyal Bilimler Doğru Sayısını Giriniz:"));
    sosyalYanlis = Number(prompt("Sosyal Bilimler Yanlış Sayısını Giriniz:"));

    // Doğru Sayısı Hesaplama
    let toplamDogru = turkceDogru + matematikDogru + fenDogru + sosyalDogru;
    // Yanlış Sayısı Hesaplama
    let toplamYanlis =
      turkceYanlis + matematikYanlis + fenYanlis + sosyalYanlis;

    // Kalan doğru sayısı
    let kalanDogru = toplamDogru - toplamYanlis / 4;

    // Puan Hesaplama
    puan = kalanDogru * 4 + 100 + okulPuanı;
    console.log("Puanınız: " + puan);

    break;
  case "2":
    alert("Çıkış yapılıyor...");
    break;
  default:
    alert("Geçersiz seçim yaptınız.");
    break;
}
