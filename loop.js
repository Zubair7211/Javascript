let sum = 0;
for (let x = 2; x<=100; x+=3)
{
	console.log(x);
	if (x%10==0)
	sum += x;
}
console.log(sum);
/* 
Is there any repitition in problems solution, if yes then use loop
where to start & end the loop?
What is the step size?
what steps are repeated?
These steps will be written in side the loop body.
*/