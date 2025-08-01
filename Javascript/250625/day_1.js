// quiz 1
// const name = "Ghost";
// let age = 25;
// console.log(${name}, ${age});

// let age = 25;
// age = 30;
// console.log(age);

// var x = 1;
// var x = 2; // 허용됨

// console.log(a); // undefined(호이스팅)
// console.log(b); // TDZ 발생(Temporal Dead Zone)하여 접근불가
// var a = 10;
// let b = 20;
// console.log(a);
// console.log(b);

// if (true) {
//     var x = 1;
//     let y = 2;
// }
// console.log(x); //1
// console.log(y); // ReferenceError
// 변수가 함수안에서 못나와서 출력이 안됌.

// const user = { name: "Bob" };
// user.name = "Tom"; //수정
// console.log(user);

// user.age = "1000"; //추가
// console.log(user);

// let name = "Alice";
// let age = "25";
// console.log(`안녕하세요, 저는 ${name}이고 ${age}살 입니다.`);

// let a = 1,
//     b = 2,
//     c = 3;
// const d = 4,
//     e = 5,
//     f = 6;
// console.log(a, b, c);
// console.log(d, e, f);

let num1 = 3;
let num2 = 5;
const result = num1 + num2;
console.log(`${num1} + ${num2} = ${result}`);

function sum(a, b) {
    console.log(a + b);
}

sum(1, 3); //4

function multi(x, y) {
    console.log(x * y);
}
multi(3, 4); //12

const a = 6;
const b = 2;
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
