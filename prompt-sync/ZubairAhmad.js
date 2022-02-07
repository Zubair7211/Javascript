let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let prompt = require ('prompt-sync') ();
let N = prompt ('Enter Number:');
let sum =0;
if (N == 1)
{
	for(let i of array)
		sum+=i;
	console.log(sum);
}
let min = 0;
let max = 0;
if (N == 2)
	{
for (let x=0; x<array.length; x++)
{
	for (let y=0; y<array.length; y++)
		if (y<min)
		{
			min = n[x];
		}
		for (let i of array)
			min,max = i;
}
console.log(min,max);
}
if (N == 3)
{
	for (let x=array.length; x>=1; x--)
	{
		console.log(x);
}
}
if (N != 1 && N != 2 && N != 3)
	console.log("Invalid input!")