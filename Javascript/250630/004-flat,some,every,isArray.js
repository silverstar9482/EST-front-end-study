const arr = [1, 2, [3, 4, [5, 6]]];
// flat - 복사 메서드. 배열을 평평하게 해줌
console.log(arr.flat()); // 기본값은 1
console.log(arr.flat(2)); // 기본값은 1

console.log(arr);

const users = ["Daniel", "Amy", "Don", "donald", "Micheal", "Juliet"];
users.sort(); // 단어 앞자리를 기준으로 순서대로 정리해주는 메서드
console.log(users);

const numbers = [51, 2, 12, 1, 22, 5];
numbers.sort((a, b) => a - b); // 앞자리 순서대로
console.log(numbers);

numbers.sort((a, b) => b - a); // 뒷자리 순서대로
console.log(numbers);

const numbers2 = [1, 2, 3, 4, 5];

// some()은 결과값이 하나라도 조건을 만족한다면 true,
const hasEven = numbers2.some((num) => num % 2 === 0);
console.log(hasEven);
// every()는 결과값이 모두 조건을 만족한다면 true를 반환
const allEven = numbers2.every((num) => num % 2 === 0);
console.log(allEven);

// 콜백함수
// reduce( reducer 리듀서)
// filter( true, false -> predicate 함수(boolean값 반환)), some,every
// map( mapping Function)

// 1. users에 'Amy'자가 포함되어있는지 확인 some
const userName = users.some((a) => a === "Amy");
console.log(userName);

// 2. numbers에서 3보다 큰값이 있는지 확인 some
const num = numbers.some((a) => a > 3);
console.log(num);

// 3. fruits 변수안에 있는 값이 모두 문자열인지 확인 every
const fruits = ["apple", "banana", 3];
const fruitsResult = fruits.every((a) => typeof a === "string");
console.log(fruitsResult);

// 4. 이메일 형식이 모두 맞는지 확인(@와 .이 반드시 있어야함) every
const emails = [
    "test@example.com",
    "hello@DOMImplementation.com",
    "user@site.org",
];
const eResult = emails.every((a) => a.includes("@") && a.includes("."));
console.log(eResult);

const arr2 = [3, 4];
console.log(Array.isArray(arr2)); // isArray() - 주어진 값이 배열인지 확인하는 메서드 이 함수는 값이 배열이면 true를 반환하고, 그렇지 않으면 false를 반환.
