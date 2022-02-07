let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let prompt = require ('prompt-sync') ();
let N = prompt ('Enter Number:');
if (N == 0)
{
	for (let x = 1; x<11; x++)
	console.log("BLACK");
}
if (N == 1 || N == 2)
	{
	console.log("RED");
}
if (N == 3 || N == 4)
{
		console.log("GREEN");
}
if (N == 5 || N == 6)
{
		console.log("BLUE");
}
if (N < 0)
{
	console.log("Error")
}
if (N != 0 && N != 1 && N != 2 && N != 3 && N != 4 && N != 5 && N != 6 && N >0)
		console.log("WHITE");