/* 
user 객체
name, age, pets(dog(이름, 나이)), parret(이름,나이))
sayHello메서드 -> 'Hello, ${name}'
*/

const user = {
    name: "Ghost",
    age: 30,
    skills: ["fly", "swim"],
    pets: {
        dog: {
            name: "boddy",
            age: 8,
        },
        parret: {
            name: "cherry",
            age: 3,
        },
    },
    sayHello() {
        return `Hello, ${this.name}`;
    },
};

console.log(user.sayHello());
console.log(user.pets.dog.name);
// delete user.pets
console.log(user);

console.log(user.skills[1]);

// user mbti키값을 추가하기
user.mbti = "INTP";
console.log(user);

// user -> age 삭제
delete user.age;
console.log(user);

// user -> name 변경
user.name = "Irangi";
console.log(user);

// 객체에 method를 추가하기
user.sayBye = () => {
    return `Good-bye, ${user.name}`;
};

// method -> mySkills() 나의 능력은 'fly', 'swim' 이야
// this키워드 사용, function()
user.mySkills = function () {
    return `나의 능력은 '${this.skills[0]}', '${this.skills[1]}' 이야`;
};

console.log(user);
console.log(user.sayBye());
console.log(user.mySkills());

console.log("skills" in user);
// for...in -> for(변수선언 in 오브젝트) {변수값이 'Key'}
for (let key in user) {
    console.log(key, user[key]);
}
