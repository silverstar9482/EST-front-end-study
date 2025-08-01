const user = { name: "Ghost", age: 1000 };

console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("mbti")); // false

// Object.hasOwn(object, key)
console.log(Object.hasOwn(user));
