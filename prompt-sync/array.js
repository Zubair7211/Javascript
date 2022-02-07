let webStudents = ["Zubair", "Uzair", "Ali"];
/*
let marks =[700,500,200];
webStudents[3]= "Hasan";
console.log(webStudents);
marks[3] = 100;
console.log(marks);
console.log(webStudents[0] + webStudents[3]);
for (let i of webStudents)
	console.log(i);
*/
let prompt = require ('prompt-sync') ();
for (let i in webStudents)
{
	webStudents[i] = prompt("Enter Value:")
}
console.log(webStudents.length);