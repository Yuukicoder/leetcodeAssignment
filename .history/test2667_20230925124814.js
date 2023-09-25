// ! 2667. Create Hello World Function
var createHelloWorld = () => {
    return (...arg) => {
        return "Hello World";
    }
}

console.log(createHelloWorld());