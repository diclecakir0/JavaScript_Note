
// Var - Let - Const


/*
var/let/const degiskenIsmi = degiskenDegeri;
let sayi = 10;
*/

// var :  var ile tanımlanan değişkenler, fonksiyonun dışındaysa global, fonksiyon içindeyse veya diğer süslü parantezler içindeyse function scopetur ve function içinde erişilebilr. (Çoğu yerden erişilebildiği için ram bellekte çok fazla yer kaplar.)

// var ile aynı isimde iki değişken oluştuabiliriz örneğin;
// var sayi = 10; 
// var sayi = 20;  

function selamVer(){
	var selam= "Herkese merhaba"; //function scope
	if(true){
		var sayi= 10; // function scope
	}
	console.log(selam);
	console.log(sayi);
}

// let/const : let ve const ile tanımlanan değişkenler, block scope'tur. Yani sadece tanımlandığı süslü parantez içinde erişilebilir. (Daha az yer kaplar.)

// let ile aynı isimde iki değişken oluşturamayız hata verir örneğin;
// let sayi = 10;
// let sayi = 20; // hata verir
// const ile aynı isimde iki değişken oluşturamayız hata verir 

function selamVer(){
	var selam= "Herkese merhaba"; //function scope
	if(true){
		let sayi= 10; // local scope
	}
	console.log(selam);
	console.log(sayi);
}


// LET & CONST ARASINDAKİ FARK

// let ile tanımlanan değişkenler değiştirilebilir, const ile tanımlanan değişkenler ise sabittir ve değiştirilemez. 


// const ile luşturulan objelerin değerleri değiştirilebilir ama objenin kendisi değiştirilemez.
// const user = {
//     name: "Ahmet",
//     age: 25
// }
// user.name = "Mehmet"; // bu değişiklik yapılabilir