// if(조건식)
/*
 * ' ' 공백이 있는 문자열 -> true
 * '' 공백이 없는 문자열 -> false
 * null -> false
 * undefined -> false
 */

if (null) {
    console.log("true");
} else {
    console.log("false");
}

// 상황연산자 -> 조건식 ? 참일때 : 거짓일때
null ? console.log("true") : console.log("false"); // 위의 조건문과 동일함

// 숫자가 짝수일 때 true, 홀수일 때 false

3 % 2 === 0 ? console.log("짝수") : console.log("홀수");

// odd - 홀수
// even - 짝수
!5 % 2 ? console.log("even") : console.log("odd");

const result = !5 % 2 ? "even" : "odd";
console.log(result);

// 90점이상 합격 / 이하 불합격
const score = 50;

if (score >= 90) {
    console.log("pass");
} else {
    console.log("fail");
}

// 90점이상 'A' / 70점 이상 'B' / 50점 이상 'C' / 
// 50미만 '실패'
if (score >= 90) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("fail");
}
