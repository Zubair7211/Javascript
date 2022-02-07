let Age = 80;
let income = 50000;
let Tax = 0;
let Tax1 = 0.1;
let Tax2 = 0.2;
let Tax3 = 0.3;
if (Age<60 && income<25000)
	Tax4 = Tax;
else if (Age<60 && income>=25000 && income<50000)
	Tax4 = income*Tax2;
else if (Age<60 && income>=50000)
	Tax4 = income*Tax3;
else if (Age>=60 && Age<80 && income<30000)
	Tax4 = Tax;
else if (Age>=60 && Age<80 && income>=30000 && income<40000)
	Tax4 = income*Tax2;
else if (Age>=60 && Age<80 && income>=40000)
	Tax4 = income*Tax3;
else if (Age>=80 && income<50000)
	Tax4 = Tax;
else if (Age>=80 && income>=50000)
	Tax4 = income*Tax1;
	console.log(Tax4);