let prompt = require ('prompt-sync') ();
let N = prompt ('Enter Number of Table:');
for (let x=1;x<=N; x++)
{
	let T = prompt ('Enter Table:');
	for (let y=1;y<=5; y++)
	{
	console.log(T + "*" + y + "=" + T*y)
	}
}

console.log("See you Soon");
console.log("Allah Hafiz");