/*
 * 'key' in 객체
 * 해당 key가 객체에 있는지 존재여부를 Boolean으로 출력
 */
const user = {
    name: "Ghost",
    age: 1000,
};

console.log("name" in user);
console.log("color" in user);

// for..in 객체를 순회하면 key값을 출력한다.(배열에서는 index값을 출력하며, 잘 사용하지 않는다.)

const arr = ["a", "b", "c"];
for (const idx in arr) {
    console.log("array : ", idx);
}

for (const key in user) {
    console.log("object : ", key, user[key]);
}
