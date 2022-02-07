let wt_lb = 45;
let ht_in = 50;
let BMI = 703*wt_lb/(ht_in*ht_in);
if (BMI<=18.5) {
	console.log("Under Weight");
}
if (BMI>18.5 && BMI<24.9) {
	console.log("Normal");
}
if (BMI>25 && BMI<29.9) {
	console.log("Over Weight");
}
if (BMI>30) {
	console.log("Obese");
}