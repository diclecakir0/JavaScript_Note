/*
-----------------------------TÜR DÖNÜŞÜMLERİ-----------------------------
	string, number, boolean, undefined, null
	object, function 
*/

//! 1. String to Number

// let a = 5;
// let b = Number("5");
// console.log(a + b); // 10

// let i = 5;
// let d = "5";
// let c = Number(d);
// console.log(typeof c); // 5
// console.log(a + c);

// parseInt() ve parseFloat() fonksiyonları string ifadeleri sayıya dönüştürmek için kullanılır.
// parseInt() fonksiyonu tam sayıları dönüştürürken, parseFloat() fonksiyonu ondalıklı sayıları dönüştürür.

// let a = "5.5";
// let b = parseInt(a); // 5

// let c = parseFloat(a); // 5.5

//! 2. Number to String

// her iki yönte ile dönüşüm yapabiliriz.
let x = String(5); // "5"
let y = (55).toString(); // "55"

//let sonuc = String(true);
// console.log(typeof sonuc);
// console.log(sonuc); // "true"

let rakamlar = String([1, 2, 3, 4]); // "1,2,3,4"
