let hours = [8, 15, 20, 11, 10, 23];
let min = [50, 30, 22, 5, 15, 2];
let sec = [28, 2, 20, 50, 33, 10];
let time = [];
let count = 0;
let mini = hours[0];
let max = hours[0];
let moon;
for (let x in hours, min, sec)
{
    if (hours[x]>max)
    {
        max = hours[x];
    }
    for (let j in hours)
    {
    if (hours[j]<mini)
    {
        mini = hours[j];
    }
}
if (hours[x]>=12)
{
    moon = "pm";
    hours[x] -= 12;
    count++
}
if (hours[x]<12)
{
moon = "am";
count++
}
for (let i = 1; i<7; i++)
console.log("Time", i,":", hours[x], ":", min[x], moon, "(", sec[x], "seconds", ")");
}
console.log("There are", count, "evening slots and", count, "morning slots.");
console.log(mini,max);