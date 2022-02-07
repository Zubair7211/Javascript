let prompt = require ('prompt-sync') ();
let name = prompt("Enter your name: ");
function productDelete(name) {
    $(name).parents("tr").remove();
}
console.log(name);