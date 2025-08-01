import { user1, user2 } from "./../datas/users.js";
// 자바스크립트 함수 외부에서 가져오기

const { name, age, skills = "no skills" } = user1;
console.log(name, age, skills);

const { name: newName, age: newAge, skills: newSkills = "no skills" } = user2;
console.log(newName, newAge, newSkills);
