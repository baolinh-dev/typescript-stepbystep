function identify<T>(value: T): T {
    return value;
} 

console.log(identify<string>("Hello")); // "Hello"
console.log(identify<number>(123)); // 123
console.log(identify<boolean>(true)); // true 

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair<string, number>("Hello", 100)); // ["Hello", 100]
console.log(pair<boolean, string>(true, "TypeScript")); // [true, "TypeScript"]