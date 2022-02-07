let start = 1
let end = 100
let count=1;
let sum=0;
for (let x = start; x<=end; x++)
{
	sum += 1/x;
	count++;
}
console.log(sum);