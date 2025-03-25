function identify(value) {
    return value;
}
console.log(identify("Hello")); // "Hello"
console.log(identify(123)); // 123
console.log(identify(true)); // true 
function pair(first, second) {
    return [first, second];
}
console.log(pair("Hello", 100)); // ["Hello", 100]
console.log(pair(true, "TypeScript")); // [true, "TypeScript"]
