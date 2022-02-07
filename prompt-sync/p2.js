let array = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 0];
let sumP = 0;
let sumN = 0;
let Zero = 0;
for (let i of array)
{
	if (array[i]<0)
	{
		sumP++;
	}
	console.log("Negative values" + "are" + sumP);
}