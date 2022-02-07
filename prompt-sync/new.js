/*let prompt = require ('prompt-sync') ();
let outerloopend = prompt ('Enter outer:');
let innerloopend = prompt ('Enter inner:');
let x=0;
while(x<outerloopend)
	{
		let y=0;
		while(y<innerloopend)
		{
			console.log("x=", x, "y=", y);
		y++
		}
		console.log("outer loop iteration started")
		++x
                  }
				  */
				  let x=0;
while(x<5)
	{
		let y=0;
		while(y<=x)
		{
			process.stdout.write("*");
		y++
		}
		process.stdout.write("\n");
		++x
                  }