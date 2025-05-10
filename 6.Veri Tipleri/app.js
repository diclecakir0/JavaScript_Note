/*
? Veri Türleri
-> primitive veri türleri
1- String --> let isim = "Dicle Çakır"
2- Number --> let yas = 25
3- Boolean --> let evliMi = false, evliMi = true 
4- Null --> let evliMi = null; değişkenin değeri boş anlamına gelir
5- Undefined -->  let a; // değişken tanımlanmış ama değeri yok

? 
-> reference veri türleri
6- Object;
let kisi = {
	isim: "Dicle Çakır",
	yas: 25,
	evliMi: false
}

kisi["isim"] // "Dicle Çakır" değerini döndürür, obje değerlerine bu şekildede ulaşabiliriz.

let rakamlar = [1, 2, 3, 4, 5]; // arrayler'de obje veri türüdür.

7- Function 

let topla = function(){
	console.log("Topla");
}

topla(); // fonksiyon çağırma

*/

// Not: console.log(typeof(isim)); // isim değişkeninin veri tipini öğrenmek için typeof kullanıyoruz

//------------------------DİZİ VE YAZI METHODLARI------------------------

/*
	push --> dizinin sonuna ekleme methodu
	const isimler = ["Dicle", "Hazbiye"];
	isimler.push("Çakır");
	console.log(isimler); // ["Dicle", "Hazbiye", "Çakır"] döner

*/

/*
	unshift --> dizinin başına ekleme methodu
	const isimler = ["Dicle", "Hazbiye"];
	isimler.unshift("Çakır");
	console.log(isimler); // ["Çakır", "Dicle", "Hazbiye"] döner
*/ 

/*
	manuel eleman değiştirme
	const isimler = ["Dicle", "Hazbiye"];
	isimler[0] = "Çakır"; // dizinin 0. indexini değiştiriyoruz
	console.log(isimler); // ["Çakır", "Hazbiye"] döner
*/

/*
	shift --> dizinin başındaki elemanı siler
	const isimler = ["Dicle", "Hazbiye"];
	isimler.shift(); // dizinin başındaki elemanı siler
	console.log(isimler); // ["Hazbiye"] döner
*/

/*
	pop --> dizinin sonundaki elemanı siler
	const isimler = ["Dicle", "Hazbiye"];
	isimler.pop(); // dizinin sonundaki elemanı siler
	console.log(isimler); // ["Dicle"] döner
*/

//------------------------ YAZI METHODLARI------------------------

/*
	concat (+) --> iki stringi birleştirir
	const isim = "Dicle";
	const soyisim = "Çakır";
	console.log(isim + "" + soyisim); // "Dicle Çakır" döner
*/

/*
	toUpperCase() --> stringi büyük harfe çevirir
	const isim = "Dicle";
	console.log(isim.toUpperCase()); // "DICLE" döner
*/

/*
	toLowerCase() --> stringi küçük harfe çevirir
	const isim = "DICLE";
	console.log(isim.toLowerCase()); // "dicle" döner
*/

/*
	length --> stringin karakter olarak uzunluğunu döner, dizinin kaç elemanı olduğunu döner.
	const isim = "Dicle";
	console.log(isim.length); // 5 döner
*/ 

/*
	includes() --> stringin içinde bir değer var mı yok mu kontrol eder
	const isim = "Dicle Çakır Hazbiye";
	console.log(isim.includes("Dicle")); // true döner
*/

/*
	replace(arananDeğer, değiştirilecekDeğer) --> stringin içinde bir değeri değiştirir yani, stringiniçinde 1. parametreyi arar ve eğer bulursa 2. parametreyle değiştirir.
	const isim = "Dicle Çakır Hazbiye";
	console.log(isim.replace("Dicle", "Hazbiye")); // "Hazbiye Çakır Hazbiye" döner
	Not: replace() methodu isim değişkenin değişikliğini yapmaz, yeni bir string döner. Yani isim değişkeni hala "Dicle Çakır Hazbiye" olarak kalır.
*/

/*
	slice(başlangıç, bitiş) --> stringin bir kısmını alır, başlangıç ve bitiş indexini alır
	const isim = "Dicle Çakır Hazbiye";
	console.log(isim.slice(0, 5)); // "Dicle" döner
	Not: slice() methodu isim değişkenin değişikliğini yapmaz, yeni bir string döner. Yani isim değişkeni hala "Dicle Çakır Hazbiye" olarak kalır.
*/ 

/*
	split() --> stringi bir diziye çevirir, parametre olarak hangi karaktere göre ayıracağını alır
	const isim = "Dicle Çakır Hazbiye";
	console.log(isim.split(" ")); // ["Dicle", "Çakır", "Hazbiye"] döner
	Not: split() methodu isim değişkenin değişikliğini yapmaz, yeni bir dizi döner. Yani isim değişkeni hala "Dicle Çakır Hazbiye" olarak kalır.

	console.log(isim.split(" ")[0]); // "Dicle" döner
*/

/*
	join() --> diziyi bir stringe çevirir, parametre olarak hangi karakterle birleştireceğini alır, dizinin elemanlerını aralarına belirli bir karakter koyarak birleştirir.
	const isim = ["Dicle", "Çakır", "Hazbiye"];
	console.log(isim.join(" ")); // "Dicle Çakır Hazbiye" döner
*/


//------------------------FONKSİYONLAR------------------------

/*
-- fonksiyonlar bir işlevi yerine getiren kod bloklarıdır, iki ana parçadan oluşur.

1) belirleme kısmı; fonksiyonun yapacağı işlemleri belirlememiz gerekir ki çağırdığımızda ne yapacağını bilsin ve hafızasında tutsun.

2) yürütme kısmı; belirlediğimiz fonksiyonu çağırmamız gerekir ki içerisinde belirlediğimiz kodlar yürüsün. fonksiyonu belirleyip çağırmazsak içerideki kodlar ASLA çalışmaz.

---ESKİ METHOD----
fonksiyonu belirleme kısmı; 

function topla(){
	const sonuc = 70 + 40
	console.log(sonuc);
}

fonksiyonu çağırma kısmı; 

topla(); // 110 döner


---YENİ METHOD----
Arrow Function (ok fonksiyonu) ile fonksiyon tanımlama

const topla = () => {
	const sonuc = 70 + 40
	console.log(sonuc);
}

topla(); // 110 döner


*/

//----------------------------------------------------------------
// Parametreler; fonksiyon belirlerken kullandığımız 1. paranteze parametreler denir. burada fonksiyonu çağırdığımızda içeride kullanmasını istediğimiz değerleri veririz, ve fonksiyonda bunları içeide kullanır.

// Örnek; Kullanıcının  verdiği 2 sayıyı birbiriyle toplayan fonksiyon. 

/* 
	const toplamaFonksiyonu = (sayi1, sayi2) =>{
	const sonuc = sayi1 + sayi2;
	console.log(sonuc);
	}

	--> fonksiyonu belirlerken parametre verdiysek, çağırırken de aynı sayıda parametre göndermeliyiz, öbür türlü fonksiyon neyle neyi toplayacağını bilemez.
	toplamaFonksiyonu(10, 20); // 30 döner

*/

// Geri döndürmeli fonksiyon (return)

/*
Fonksiyonlar, gerekli işlemleri yaptıktan sonra çağrıldıkları yere bir veriyi geri döndürebilirler(return edebilirler).

	const bölme = (a,b) => {
		const sonuc = a / b;
		
		return sonuc; sonucu fonksiyon nerede çağrıldıysa oraya geri döndürür.
	}

	bölme(10,2) // 5 döner

*/

// Eğer tek parametre kullanıyorsak baştaki paranteze gerek yoktur

/*const anons = text => {
	alert(text);
}
*/

// Eğer gövdede yaptığımız işlem tek satırlıksa süslü paranteze gerek yoktur.

//const anons = text => alert(text); 
// anons("Tek satırlık alert")
// tek satırlı olduğu için süslü parantez kullanmadık


 //------------------------Koşul Blokları------------------------

 /*
	1) if-else;

	const anons = (acil, text) =>{
		if(acil==true){
			alert("Acil durum: " + text);
		}else{
			alert("Acil durum değil: " + text);
		}

	anons(true, "Yangın var"); // Acil durum: Yangın var
 */ 


/*
	2) else if;

	const anons = (seviye, text) =>{
		if(seviye == 1){
			alert("Acil durum: " + text);
		}else if(seviye == 2){
			alert("Acil durum değil: " + text);
		}else{
			alert("Bilinmeyen seviye: " + text);
		}
		}
	anons(1, "Yangın var"); // Acil durum: Yangın var
*/	

//------------------------Döngüler------------------------

// Bir kodu birder fazla kez yürütmek isteyebiliriz, bu tarz durumlarda döngü kullanırız.

/*
	for loop;
	for(let i=0; i<10; i++){
		console.log(i); // 0'dan 9'a kadar olan sayıları döner
	}

	const fruits = ["elma", "armut", "muz"];
	for(let i=0; i<fruits.length; i++){
		console.log(fruits[i]); // elma, armut, muz döner
	}
*/

/*
	forEach loop; içine parametre olarak verdiğimiz fonksiyonu, dizinin içindeki her bir eleman için çalıştırır.
	const fruits = ["elma", "armut", "muz"];
	fruits.forEach((fruit, index) => {
		console.log(index + " : " + fruit); // 0 : elma, 1 : armut, 2 : muz döner
	})
*/