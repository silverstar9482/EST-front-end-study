// 객체에서 person에서 age속성을 삭제하세요.
const person = { name: "Ghost", age: 20 };
// delete person.age;
console.log(person);

// 객체의 person의 모든 속성(key) 이름을 배열로 출력하세요.
for (let key in person) {
    console.log(key, person[key]);
}
