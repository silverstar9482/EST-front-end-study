// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: "Ghost", age: 20 };
console.log(person.name);

// 2. 객체 person에 height: 180 속성을 추가하세요.
person.height = 180;
console.log(person);

// 3. for...of문으로 문자열 배열을 모두 소문자로 변환해 새 배열로 만드세요.
const arr = ["A", "B", "C"];

let result = [];
for (const newArr of arr) {
    console.log(newArr); //값이 하나씩 접근함.
    result.push(newArr.toLowerCase());
}

console.log(result);

arr.forEach((x) => {
    result.push(x.toLocaleLowerCase());
});

console.log(result);
