// console.log("a" + "b");
// console.log("1" + "2");
// console.log(1 + 2);

// let a = 5;
// let b = 3;
// let sum = a + b;
// let result = `${a} + ${b} = ${sum}`;

// console.log(result);

//호이스팅

console.log(a);
var a = 5;
console.log(a); // 호이스팅이 일어나 선언 전에 출력해도 값이 나옴.

// console.log(b);
let b = 10;
console.log(b); //let과 const는 호이스팅이 일어나지만 접근할 수 없어서 선언 후에 출력해야 값이 나온다.
