let array = [1, 2, 3, 4, 5, 6, 7];
for (let i of array)
{
	if (array[i]%i != 0)
		console.log(array[i]);
}