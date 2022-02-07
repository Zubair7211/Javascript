let x=5;
let y=5;
let z = 5;
let sting = "";
for (let a = 0; a<=x; a++)
	{
		for (let b = 0; b<=y; b++)
		{
			sting += "*";
			process.stdout.write("\n");
		}
		for (let c = 0; c<=z; c++)
		{
			sting += "*";
		}
		sting += "*";
		process.stdout.write("\n");
                  }
				  console.log(sting);