let n1 = 5;
let n2 = 11;
let Sum=0
let x = n1;
while ( x<=n2 )
{
	if (x%2==1)
		Sum = x * x + Sum;
	++x
}
console.log(Sum);