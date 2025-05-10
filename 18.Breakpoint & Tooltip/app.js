// Breakpoint & Tooltip

//-------------------Tooltip------------------------
// Fonksiyonların, değişkenlerin ve nesnelerin üzerine geldiğimizde açılan bilgi kutucuklarıdır.

// Örneğin; parseInt() üzerine gelindiğinde parseInt(string, rasix) gibi açıklama çıkar.
/*Kod yazarken hız ve verim sağlar.
Dokümana bakmadan bilgi edinmeyi sağlar.
Hataların nerede olduğunu hızlı anlamanı sağlar.
*/

//-------------------Breakpoint------------------
//  bir programı adım adım incelemk içi n kullanılan bir hata ayıklama aracıdır. Kod çalışırken belirli bir satıra gelindiğinde programı durdurmak için breakpoint kullanılır.
// Kodun belirli bir satırında durmasını sağlayan işaretlerdir. Kodun o satırına geldiğinde durur ve kodu incelememizi sağlar.

debugger;

let a = 20;
let b = 30;
let c = a + b;
let d = a + b + c;

let sonuc = a + b + c + d;
console.log(sonuc);
