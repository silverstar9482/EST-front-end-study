// function
console.log(sum(3, 4)); // 호이스팅이 일어나 결과값 반환
// console.log(evenCheck(3)); // TDZ(일시적 사각지대)때문에 결과값이 반환되지 않음

// 선언적함수, 함수선언
function sum(a, b) {
    return a + b;
}

// 함수표현식
const evenCheck = function (number) {
    return number % 2 ? "홀수" : "짝수";
};

const sum2 = (a, b) => {
    return a + b;
};

function getRandom(value) {
    return Math.floor(Math.random() * value + 1);
}
