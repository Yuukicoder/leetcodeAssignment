// ! 2620. Counter
let createCounter = n => {
    return ()=> n++;
    
}
const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());
// why return function in createCounter? because the counter return function 