let prompt = require ('prompt-sync') ();
let N = prompt ('Enter Number:');
let M = prompt ('Enter Number:');
let O = N;
N = M; M = O;
console.log(N,M);