/*
 * 구조분해할당(Destructuring)
 */

const animals = ["puppy", "cat", "parret", "Lion", "tiger", "duck", "panda"];
const numbers = [1, 2, 3, 4, 5];

// const [a, , c] = animals;
// console.log(a, c);
const [a, b, ...rest] = animals;
console.log(rest);

// animals, numbers 합친 새로운 배열을 만드세요
// const newArray1 = animals.concat(numbers);
const newArray2 = [...animals, ...numbers];
console.log(newArray2);

const array = calc(10, 2); // [12, 5]
console.log(array);

const array2 = ["apple", "mango", "banana"];
// 변수 - a,b,c
const [e, f, g] = array2;

console.log(e, f); // -> apple
console.log(f); // -> mango

console.clear();

function calc(a, b) {
    return [a + b, a / b];
}

//               값이 없으면 초기값 설정가능/ 초기값이 없으면 undefined 출력
const [sum, div, multiply = "No multiply", diff] = calc(15, 3);
console.log(sum, div, multiply, diff);
