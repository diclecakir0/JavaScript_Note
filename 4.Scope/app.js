// Var - Let - Const  ile değişken tanımlama





/*
---------------------SCOPE(KAPSAM) ---------------------
1. Global Scope
2. Function Scope
3. Block Scope
*/

// Global Scope; BU değişkenler her yerden erişilebilir, herhangi bir süslü parantez içine tanımlanmadığına dikkat edin.

// Function Scope; Bu değişkenler sadece tanımlandığı fonksiyon içinde erişilebilir.

// Block Scope; Bu değişkenler sadece tanımlandığı süslü parantez içinde erişilebilir.

function method1(){
	var a=5; // function scope
	if(true){
		let b=10; // block scope
		console.log(b); // 10
	}
	for(var i=0; i<5; i++){
		let c=20; // block scope
		console.log(c); // 20
	}
}