// ÇOKLU İF KULLANIMI

let ad = prompt("adınızı giriniz:")
let tckn = prompt("tckn giriniz:")

kontrol(ad, tckn)

function kontrol(ad, tckn){
	if(ad!=""){
		if(tckn.length==11){
			console.log("isim ve tckn problemsiz girildi")
		}else{
			console.log("tckn 11 haneli olmalı")
		}
	}else{
		console.log("ad boş olamaz")
	}
}


kontrol2(ad, tckn)

function kontrol2(ad, tckn){
	if(ad==""){
		console.log("ad boş olamaz")
		return;
	}
	if(tckn.length!=11){
		console.log("tckn 11 haneli olmalı")
		return;
	}
	console.log("isim ve tckn problemsiz girildi")
}	