const users = [
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];

const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

// 1) users에서 admin 권한을 가진 요소출력, 사용자의 이름을 출력 / 사용자의 이름은 알파벳순으로 정렬해서 배열로 반환
// admin권한 -> superAdmin, admin

// users에서 admin 권한을 가진 요소출력 1
const adminRoles = ["admin", "superAdmin"]; // includes
console.log(adminRoles.includes("user"));
console.log(adminRoles.includes("admin"));
console.log(adminRoles.includes("superAdmin"));

// users에서 admin 권한을 가진 요소출력 2
admin = users.filter(
    (role) => role.role === "admin" || role.role === "superAdmin"
);

// 사용자의 이름을 출력
adminName = admin.map((user) => user.nickName);
console.log(adminName);

// 알파벳순으로 정렬해서 배열로 반환
adminNameArr = adminName.sort((a, b) => a.localeCompare(b));
console.log(adminNameArr);

// ['Ghost','Irangi]

// 2) users에서 일반 유저가 몇명인지 출력. -> 일반유저는 총 3명입니다.
userNum1 = users.filter((x) => !adminRoles.includes(x.role)).length;
userNum2 = users.filter((x) => x.role == "user").length;
console.log("userList : " + userNum1);
console.log("userList : " + userNum2);

// users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];

console.log(users2.map((x) => x.name));
console.log(Array.isArray(users2));

// 객체에 키값을 추가하려면 obj.name = 'ghost' 이렇게 지정하면 된다.
// in
// for..in - index를 추출한다.
// Object 정적메서드.key,value,entries -
/* 대괄호 안에 키 값을 넣으면, (활용성 UP!)
변수값을 키값으로 선언할 수도 있고
숫자도 키값 지정 및 호출할 수 있고
문자열을 붙여서 키값을 만들 수도 있다. */

// 3) posts tag 문자열로 나열
tagList = posts
    .map((x) => x.tags)
    .flat()
    .join(", ");
console.log(tagList);
