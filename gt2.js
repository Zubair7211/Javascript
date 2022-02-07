let Hours = [5, 6, 7, 3, 10];
let EmpRate = [600, 300, 400, 500, 700];
let pay = [];
let Sum = 0;
let Ave = 0;
let arrays = Hours + "\n" + EmpRate
console.log(arrays);
let min=0;
for (let x in Hours)
{
pay [x] = Hours[x] * EmpRate[x];
if (pay[x]<2000)
{
    min = pay[x];
}
percent = min / 100 * 20;
bonus = 500;
console.log(Hours[x], "*", EmpRate[x], "=", pay[x]);
Sum += pay[x];
Ave = Sum / pay.length;
}
console.log("The minimum pay of employee is", min, "His new salary:", min, "+", bonus, "+", percent, "=", min + bonus + percent)
console.log(Sum);
console.log(Ave);