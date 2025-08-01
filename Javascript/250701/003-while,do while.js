// for...of
// for(    of Array) 배열 데이터를 넣어야댐
const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

// 위의 for...of와 같음
fruits.forEach((fruit) => console.log(fruit)); // forEach는 배열에만 쓸수있음.

const str = "Hello";
console.log(str.length);
//이터러블 - 데이터를 하나하나 순회할수있는 데이터 객체
for (const spell of str) {
    console.log(spell);
}

console.clear();

// While
let i = 4; // for문이랑 다르게 변수 초기화를 밖에서함

while (i < 10) {
    console.log(i);
    i++; //무한루프를 끝내기위해 증감식을 써줌
}
console.log("while문이 끝났습니다.");

// do-while 조건식을 판별하기전에 일단 실행
let j = 4;
do {
    console.log(j); // 일단 조건식 비교하기전에 한번 수행
    j++; // 브레이크문. 무한루프 막기위해 증감식 써줌
} while (j < 10);
console.log("while문이 끝났습니다.");

let k = 1; // 1부터 2씩 증가하는 값을 찍으세요. 1, 3, 5, 7, 9, 10이상이되면 멈추기
// while (k < 10) {
//     console.log(k);
//     k += 2;
// }
// 위의 반복문에서 5는 찍히지 않도록 continue를 이용하시오
while (k < 10) {
    if (k === 5) {
        k += 2;
        continue;
    }

    console.log(k);
    k += 2;
}
