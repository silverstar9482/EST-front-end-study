// math 개체

const num = 1234.567;
const num2 = 123.456;

console.log(Math.abs(-5)); //매개변수를 숫자로 강제 변환
console.log(Math.ceil(num)); //올림
console.log(Math.ceil(num2)); //올림
console.log(Math.floor(num)); //내림
console.log(Math.round(num)); //반올림
console.log(Math.trunc(num)); //소수점이하 버림
console.log(Math.pow(num2)); //거듭제곱

console.log(Math.floor(-2.5));

console.log(Math.max(10, 2, 5, 4));
console.log(Math.min(10, 2, 5, 4));
console.log(Math.pow(2, 3)); // 2**3 거듭제곱 메소드

// ceil() 올림
// floor() 내림
// round() 반올림
// trunc() 소수점이하 버림
// max() 최대값을 찾음
// min() 최소값을 찾음
// pow() 특정숫자의 거듭제곱 값을 계산 해줌

console.clear();

// 0 ~ 1 미만의 숫자의 난수를 출력
// 1 ~ 10 까지
// Math.floor(Math.random() * 10 + 1);
//  Math.ceil(Math.random() * 10);
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

// 1~3까지 난수 구하기
console.log(Math.ceil(Math.random() * 3));

// 0~2까지 난수구하기
console.log(Math.floor(Math.random() * 3));

// rsp의 변수에, '가위','바위','보'를 배열 데이터로 넣기
const rsp = ["가위", "바위", "보"]; // 마지막 데이터의 접근법 : 배열의 개수 - 1; 배열의 개수는 3개 -1 = 2

console.log(rsp[1]);
console.log(rsp.length); // length = 데이터 갯수
console.log(rsp[rsp.length - 1]);
console.log(rsp.at(1)); // rsp[1]
console.log(rsp.at(-1)); // 뒤에서 1번째, rsp[-1] -> 실행불가
