let a = 10;
let b = 5;
let c = 3;

// 1. a와 b 두수를 비교해서, 큰수를 출력하시오('a가 큽니다')
console.log(a > b ? "a가 큽니다" : "b가 큽니다");

// 2. c가 짝수인지, 홀수인지 출력하세요 ('c는 홀수입니다')
console.log(c % 2 === 0 ? "짝수" : "홀수");

// 3. b의 값에 a를 더하는 식을 쓰세요. (일반, 축약)
console.log((b = b + a), (b += a));

// 4. b가 a의 약수인지 인지 확인하세요. (a는 b로 나누었을때에 딱 떨어지면, b가 약수) 'b는 a의 약수입니다' 또는 아닙니다.
console.log(a % b === 0 ? "b는 a의 약수입니다." : "b는 a의 약수가 아닙니다.");

// id, pw -> id가 틀리면 'id가 틀려요', id가 맞으면 -> password 비교
const userId = "Ghost";
const userPw = "1234";

const inputId = "Hello";
const inputPw = "0000";

// id가 일치하면 'id가 존재합니다' 출력, 일치하지 않으면 '존재하지 않는 아이디 입니다'

if (userId === inputId) {
    console.log("id가 존재합니다");
    if (userPw === inputPw) {
        console.log("login");
    } else {
        console.log("비밀번호 오류");
    }
} else {
    console.log("존재하지 않는 아이디 입니다");
}

if (userId === inputId && userPw === inputPw) {
    console.log("로그인 성공");
} else {
    console.log("로그인 실패");
}
