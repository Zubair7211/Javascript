let Unit = 700;
if (Unit<=199) {
	let bill = Unit*1.20;
	if (bill<100)
		bill = 100
	console.log(bill);
}
if (Unit>=200 && Unit<400) {
	let bill = Unit*1.50;
	if (bill>400) 
	 bill = bill+bill*0.15;
	console.log(bill);
}
if (Unit>=400 && Unit<600) {
	let bill = Unit*1.80;
	if (bill>400)
	 bill = bill+bill*0.15;
	console.log(bill);
}
if (Unit>=600) {
	let bill = Unit*2;
	if (bill>400) 
	 bill = bill+bill*0.15;
	console.log(bill);
}