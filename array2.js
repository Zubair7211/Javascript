/*
let data = [[7, 6, 9], [1, 10, 8]];
console.log(data);
for (let x=0; x<data.length; x++)
{
	console.log(data[x][x]);
}
for (let x=0; x<data.length; x++)
{
	console.log(data[x][0], data[0][x], data[x][x]);
}
*/
let data = [[-7, 6], [1, 10, -8]];
let sum=0;
let count=0;
for (let x=0; x<data.length; x++)
{
	for (let y=0; y<data[x].length; y++)
	{
		console.log(data[x][y]);
		if (data[x][y]>0)
			count++;
		console.log(data[x][y]);
	}
	console.log(data[x][0], data[0][x], data[x][x]);
}