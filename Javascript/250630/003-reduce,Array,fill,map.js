//reduce() - 값을 연산할때 사용한다.
//(accumalator, currentValue)
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce(
    (a, c) /* a는 누적값 */ => a + c,
    0 //0은 초기값(생략가능)
);

console.log(total);

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 42, 50];
// 홀수번째 인덱스값만 더한 결과를 출력하시오.
const oddNumbers = numbers2.filter((_, i) => i % 2 !== 0);
// '_'변수명을 언더스코어로 시작할수있다. 보통 이 변수는 안쓰는거야라는 뜻으로다가 많이 씀
console.log(oddNumbers);
const totalSum = oddNumbers.reduce((a, c) => a + c);
console.log(totalSum);

console.clear();

// 1부터 10까지 [1,2,3,4,5,6,7,8,9,10]

const arr4 = Array(10) // Array - 배열함수
    .fill(0) // fill- 무언가를 채워주는 메서드
    .map((_, i) => i + 1);
console.log(arr4);

function sumNumbers(number) {
    const numberArry = Array(number)
        .fill(0)
        .map((_, i) => i + 1);
    const result = numberArry.reduce((a, c) => a + c, 0);
    return result;
}

sumNumbers(100); // 1~100까지 더하기한 값
sumNumbers(50); // 1~50까지 더하기한 값
