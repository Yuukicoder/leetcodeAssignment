// ! 2667. Create Hello World Function
var createHelloWorld = () => {
    return function (...arg) {
        return "Hello World";
    }
}

console.log(createHelloWorld());