const str = "Hello World";
console.log(str.length); // 공백까지 포함해서 11

console.log(str.indexOf("l")); // 순번을 나타냄. 소문자 l를 찾아줘(0부터 앞에서 시작.)
// 대소문자 구분해서 써야댐
console.log(str.lastIndexOf("l")); // 순번을 나타냄. 소문자 l를 찾아줘(0부터 뒤에서 시작.)

// includes - // 결과값으로 Boolean(참&거짓값) 내뱉음. true인지 false인지
console.log(str.includes("o"));
console.log(str.includes("a"));

const email = "ghost@gmail.com";
const userName = email.slice(0, 5); /* 코드작성 - 1. ghost 만 출력하기*/
console.log(userName); // ghost

/* 2. email에서 @ -> 문자열의 위치 찾기 */
console.log(email.indexOf("@"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str2 = "A,B,C";
const newStr = str2.split("."); // 실무에서 split 많이 사용함
console.log(newStr);

// 사용자이메일에서 도메인만 출력하기 -> gmail.com
// 1. split으로 나누기
// 2. 도메인주소요소에 접근해서 출력하기
console.log(email.split(`@`)[1]);

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

/* 각 URL의 접근페이지명을 출력하시오 */
const page1 = url1.split(`/`);
const page2 = url2.split(`/`);
console.log(page1.at(-1));
console.log(page2[page2.length - 1]);
console.log(url1.slice(url1.lastIndexOf(`/`) + 1));

console.clear();

// 실무에서 trim 많이 사용함
const str3 = "      hello      world      ";
console.log(str3.trimStart(), "-"); // 앞쪽의 공백 모두 제거
console.log(str3.trimEnd(), "-"); // 뒤쪽의 공백 모두 제거
console.log(str3.trim(), "-"); // 양쪽의 공백 모두 제거

const star = "*";
console.log(star.repeat(5));

// 값을 변환해주지만 원본은 바뀌지 않음.
console.log(str.replace("World", "Weniv"));
console.log(str.replaceAll("H", "W"), str);

const num = "7"; //007
const num2 = "27"; //027
console.log(num.padStart(3, "0")); // 3자리로 나타낼건데, 앞이 비었다면 '0'으로 채워줘
console.log(num2.padStart(3, "0"));

console.log(num.padEnd(5, "0")); // 5자리로 나타낼건데, 뒤가 비었다면 '0'으로 채워줘
console.log(num2.padEnd(5, "0"));

/* 천원단위로 금액을 입력받았을 때 */
const coin = "3200"; //3200000 삼백이십만원
const cost = "1000";
console.log(coin.padEnd(7, "0"));

/* coin 입력, cost 뺸 나머지금액만 지원을 받을 수 있을때에, 최종 지원금액은 얼마인가요? */
const supportCash = (Number(coin) - Number(cost)) * 1000;
console.log(`${supportCash}를 지원받을 수 있습니다.`);

// charAt - 특정 인덱스의 문자를 반환. 인덱스가 범위를 벗어나면 빈 문자열을 반환.
let str5 = "Hello World!";
console.log(str5.charAt(1));
console.log(str5.charAt(100));
