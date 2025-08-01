/*
 * 비교 연산자는 좌항과 우항의 값을 비교하여 Boolean 값을 변환한다.
 */

let a = 3;
let b = 5;

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

let c = "5";

console.log(b == c); // true. 값만 비교
console.log(b === c); // false. 데이터타입까지 비교
console.log(b !== c); // false. 데이터타입까지 비교

console.clear();

// 만약에 입력한 값이 3 이라면, '로또당첨' , 아니라면 '꽝'
let userNumber = 7;
if (userNumber === 7) {
    // 참이면 실행
    console.log("로또 당첨");
} else {
    // 거짓이면 실행
    console.log("꽝");
}

let number = 5;
// 만약에 number가 짝수라면, '짝수', 홀수라면 '홀수'를 출력하고 싶다.
// 조건식 number % 2 === 0 짝수,(질문)
const isEven = number % 2; // 조건식이 길 경우 따로 뺄 수 도 있다.
if (!isEven) {
    // 0과 1로도 참과 거짓을 판별한다.
    //isEven 값이 0이기 때문에 false라 !부정문을 써주어 값을 true로 만들어줌.
    // 참이면 실행
    console.log("짝수");
} else {
    // 거짓이면 실행
    console.log("홀수");
}
// if (number % 2 === 0) {
//     // 참이면 실행
//     console.log("짝수");
// } else {
//     // 거짓이면 실행
//     console.log("홀수");
// }
