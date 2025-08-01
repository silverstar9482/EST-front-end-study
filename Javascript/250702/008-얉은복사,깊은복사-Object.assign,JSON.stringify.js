/*
 * Object.assign({}:target, 복제할 객체)
 */

const user = { name: "Ghost", age: 1000 };
const newUser = Object.assign({ name: "Irangi", bloodType: "B" }, user); // 객체 복사. {}<< 이걸 생각하면 원본이 바뀜
// {}<< 여기에 키값을 넣어주면 반영됌. 새로운건 키값이 추가되고 원래있는건 덮어씌워짐

newUser.mbti = "INFJ";
console.log(user, newUser);
console.log(user === newUser); // false

const obj = { name: "Apple" };
obj.name = "Mango";
obj.age = 1000;
console.log(obj);

const user2 = {
    name: "Ghost",
    age: 1000,
    pets: { dog: "Boddy", parret: "Cherry" },
}; // user2를 newUser2로 복사해서, age를 500으로 변경해보세요.

// 얉은복사 Object.assign({}, user);
const newUser2 = Object.assign({}, user2);
newUser2.age = 500;
console.log(user2, newUser2);
console.log(user2 === newUser2); // false

newUser2.pets.dog = "Bombi";
console.log(user2.pets.dog, newUser2.pets.dog);
console.log(user2.pets.dog === newUser2.pets.dog); // true

// 깊은복사 JSON 이용
// JSON - 문자열로만 저장할 수 있는 객체
console.log(user2);
const newUser3 = JSON.parse(
    JSON.stringify(user2) /* 키값을 모두 문자열로 변환 */
);
console.log(typeof newUser3, newUser3);

