// KOŞUL YAPILARI

// Koşul yapıları, belirli bir koşula bağlı olarak kodun belirli bir bölümünü çalıştırmak için kullanılır.
// if yapısı; not değeri 50'den büyükse "Geçtiniz" yazdırır, değilse "Kaldınız" yazdırır.
// NOT: else olmasada bir if yapısı kullanılabilir.



//let not = 35;
// if(not>50){
//	console.log("Geçtiniz");
// }
// else{
//	console.log("Kaldınız");
// } 




// let yas = Number(prompt("Yaşınızı giriniz: "));
// let para = Number(prompt("Para miktarını giriniz: "));

// if(yas>=18 && para >= 1000){
// 	console.log("Ehliyet alabilirsiniz.");
// }else{
// 	console.log("Ehliyet alamazsınız.");
// }


// -------------------DERS ORTALAMASI BULMA-------------------

 // Vize1 %30, vize2 %30, final %40

 let vize1 = Number(prompt("1. Vize Notunuzu Giriniz: "));
 let vize2 = Number(prompt("2. Vize Notunuzu Giriniz: "));
 let final = Number(prompt("Final Notunuzu Giriniz: "));

 let ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);


if (ortalama >=60){
	alert("Tebrikler, geçtiniz.");
}else(
	alert("Üzgünüm, kaldınız.")
)