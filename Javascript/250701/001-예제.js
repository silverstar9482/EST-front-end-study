// 1. 아래 배열에서 짝수만 추출하는 코드를 작성하시오
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter((a) => a % 2 == 0);
console.log(even);

// 2. 아래 배열의 각 요소를 제곱한 새 배열을 만드는 코드를 작성하시오
const arr2 = [1, 2, 3, 4];
const newArr = arr2.map((a) => a * 2);
console.log(newArr);

// 3. 아래배열을 내림차순으로 정렬하는 코드를 작성하시오
const arr3 = [5, 2, 9, 1];

const arrResult = arr3.sort((a, b) => b - a);
console.log(arrResult);

// 4. 아래 배열의 모든 값의 합을 구하는 코드를 작성하시오
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce((a, b) => a + b);
console.log(sum);

// 5. 아래 배열에 0보다 작은 값이 있는지 확인하는 코드를 작성하시오.
const arr5 = [3, -1, 5, 7];
const arrMin = arr5.some((a) => a < 0);
console.log(arrMin);

// 6. 아래 배열의 모든 값이 3보다 큰지 확인하는 코드를 작성하시오.
const arr6 = [4, 5, 6];
const arrMax = arr6.every((a) => a > 3);
console.log(arrMax);

// 7. Ghost는 친구들의 이름을 한 줄식 출력하고 싶습니다. names 배열의 모든 요소를 한 줄씩 출력하는 solution 함수를 완성하세요.
// 친구 이름 예시 : Irangi, Camel, Shoopa, Nuvis, Liang, Mui
// hint. arr.forEach(x => console.log(x))
// function solution(names) {
//     names.forEach((username) => console.log(username));
// }
// solution(["Irangi", "Camel", "Shoopa"]); // "Irangi", "nCamel", "nShoopa"

// 8. filter와 map 조합
// Ghost는 60점 이상인 점수만 2배로 만들어 새로운 배열을 만들고 싶습니다. scores 배열에서 60이상인 값만 2배로 만들어 반환하는 solution 함수를 완성하세요.
function solution(scores) {
    const filterScore = scores.filter((x) => x >= 60);
    const mapScore = filterScore.map((score) => score * 2);

    return mapScore;
}
console.log(solution([50, 60, 70, 80])); //[120, 140, 160]

// 9. filter로 모음제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성하세요.
function solution(my_string) {
    // my_string.filter((x) => x.includes);
}
console.log(solution("beautiful")); // 'btfl'

// 10. for문을 사용해 1부터 5까지 출력하세요.
for (i = 1; i <= 5; i++) {
    console.log(i);
}

// 11. for문으로 1~10 중 3의 배수만 배열에 담아 출력하세요.
// 배열을 담을 변수가 필요함.
const multi = [];
for (let i = 1; i <= 10; i++) {
    const number = i * 3;
    const numMulti = number.filter((num) => num % 3 === 0);
}
console.log(numMulti);
