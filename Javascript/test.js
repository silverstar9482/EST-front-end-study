// 100 출력
const arr10 = [
    [1, 2],
    [3, 4],
    [5, [10, 20, 30, [100, 200]]],
];

console.log(arr10[2][0]); // 5
console.log(arr10[2][1]); // [ 10, 20, 30, [ 100, 200 ] ]
console.log(arr10[2][1][3]); // [ 100, 200 ]
console.log(arr10[2][1][3][0]); // 100
console.log(arr10[2][1][3][1]); // 200

// forEach
const fruite = ["수박", "복숭아", "딸기", "블루베리"];
const loveFruite = [];
fruite.forEach((item, b) => {
    // console.log(b, item);
    loveFruite.push(`💝맛잇는💝 ${item}`);
});
console.log(loveFruite);

const mapFruite = fruite.map((f) => {
    return `${f} 💝대존맛💝`;
});
console.log(mapFruite);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
// const ul = document.querySelector("ul");

// for (let i = 0; i < cars.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = cars[i];

//     ul.appendChild(li);
// }

for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

let num = 0;
while (num < 11) {
    console.log(num);
    num += 1;
}

// for-in 구문
const person = {
    name: "John",
    age: 30,
    city: "Seoul",
};

for (let key in person) {
    console.log(key + ":" + person[key]);
}

console.log(typeof null);
console.log([] + []);
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(NaN === NaN);

console.log("5" + 1);
console.log("5" - 1);

console.log(typeof typeof 123);

console.log(!!"false" == !!"true");

const a = [];
const b = [];

console.log(a == b);
console.log(a === b);

const obj = {
    name: "licat",
    f: function () {
        console.log(this);
    },
    this() {
        console.log(this);
    },
};

obj.f(); // obj
obj.this();

const fruits = ["사과", "바나나", "오렌지"];

for (f of fruits) {
    console.log(f);
}
// 출력:
// 사과
// 바나나
// 오렌지
