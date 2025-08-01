// 변수 a,b에 각각 숫자를 받아서 더하기 / 나누기 / 곱하기 / 빼기
let a = 5;
let b = 10;

console.log(a + b); //15

console.log(a - b); //-5

console.log(a / b); //0.5

console.log(a * b); //50

// 연산자 - 나머지 연산자 %
// console.log(5 % 4);

// 연사자 - 거듭제곱 연산자 **
console.log(2 ** 3); // 8

a = a + 1;
a += 1;
console.log(a);

// a = a - 1;
a -= 1;
console.log(a);

let c = 1; // 2
// let d = c++; // ++ 값 1을 더함. 카운트를 할 때 주로 씀 // 1
let d = ++c; // 2
let e = c--;

console.log(c); // 2
console.log(d); // 2
console.log(e); // 1
