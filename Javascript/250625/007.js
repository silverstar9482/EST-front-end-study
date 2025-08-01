const a = 3 > 5; //false
console.log(a, typeof a); // boolean

const b = 5;
console.log(typeof b); // number

const c = "5";
console.log(typeof c); // string

const d = undefined;
console.log(typeof 3); // undefined

const e = null;
console.log(typeof e); // object(Null object)
// typeof로 데이터타입을 확인할 수 있다.

const f = 2 + "2"; // number + string(자동 형변환)
console.log(`${f}는 ${typeof f}이다.`);

const g = 2 * "2"; // number + string = number
console.log(`${g}는 ${typeof g}이다.`);

const number = "15";
const result = Number(number) + 3; // 명시적 형변환
console.log(result);

console.log(+number); // 문자열을 숫자로 바꿀때 Number()를 단축해서 변수 바로 앞에 +를 넣어줘서 숫자로 바꿔줌.

const beseFont = 16;
const targetFont = 24;
const toEm = targetFont / beseFont;

console.log(`${targetFont}px은 ${beseFont}px의 ${toEm}em 입니다.`);
// 24px은 16px의 ___.em 입니다.
// +, -, *, / = 사칙연산자

//매개변수 sum(a,b)
function sum(a, b) {
    console.log(a + b);
}

sum(3, 4); //7
sum(10, 20); //30

function pxToEm(target) {
    const em = target / 16;
    console.log(`${target}px -> ${em}em`);
}

pxToEm(24); //Argument(인자) 안에 들어가는 값
pxToEm(30); //Argument(인자) 안에 들어가는 값
pxToEm(40); //Argument(인자) 안에 들어가는 값
