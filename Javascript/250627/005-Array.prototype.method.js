/*
 * Array.prototype.method
 */

const fruits = ["apple", "mango", "banana"];
fruits[1] = "cherry";

// mango -> cherry

//추가
fruits.unshift("lemon");
fruits.unshift("watemelon");
fruits.push("Grape");

console.log(fruits);

//삭제 - shift, pop
fruits.pop(); // 맨 뒤의 요소 하나 삭제
console.log(fruits);
fruits.pop(); // 맨 뒤의 요소 하나 삭제
console.log(fruits);
fruits.shift(); // 맨 앞의 요소 하나 삭제
console.log(fruits);

const newFruits = fruits.slice(1, 2);
console.log(newFruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2); // concat - 문자열을 붙이듯이 배열도 붙이는 메서드
const newArr = [...arr1, ...arr2];
console.log(newArr);

const whosBig = Math.max(...arr1); // spread 연산자(전개)
console.log(whosBig);

const str = "Ghost, World, Sunny";
// ["Ghost, World, Sunny"] -> names 변수에 배열로 넣기

const names = str.split(",");
const newStr = names.join("💖");
console.log(newStr);

const newStr2 = [...str];
console.log(newStr2);
console.clear();

const users = "hello world"; // 찾기 indexOf
console.log(users.indexOf("w"));

const animals = ["puppy", "cat", "parrot", "cat"];
console.log(animals.indexOf("cat"));
console.log(animals.lastIndexOf("cat"));

// String.prototype.includes('World')
// Array.prototype.includes('cat')
console.log(animals.includes("World")); //Boolean 값을 반환
console.log(animals.includes("cat"));
