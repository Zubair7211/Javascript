let start = 1
let end = 99
let count=1;
let even_sum=0, odd_sum=0;
for (let x = start; x<=end; x+=2)
{
	if (count%2==0)
		even_sum -= 1/x;
	else odd_sum += 1/x;
	count++;
}
let pi = 4*(odd_sum + even_sum)
console.log(pi);