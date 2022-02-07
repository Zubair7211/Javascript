let n = 7;
let x;
for (x = 2; x<n ; ++x)
{
	if (n%x==0)
	{
	console.log(x + "is not Prime");
	}
}
if (x==n)
	console.log(x + "is Prime");