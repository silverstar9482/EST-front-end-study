// 객체 메서드 - Object
// const obj = { key: "value", key: value, key: value }; // key값은 무조건 문자열이라 따옴표 필요X

const obj = {
    name: "ghost",
    age: 1000,
    sayHello() {
        return `Hello, ${this.name}`; // obj.name를 가르킴
    },
    sayBye: function () {
        return `Good bye, ${this.name}`; // obj.name를 가르킴
    },
    getAge: () => {
        return this.age; // 화살표함수안의 this는 obj를 가리키지 않고 바깥쪽을 가르킴. 주의해야함!
    },
};

console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
    age: 1000,
    mbti: "INFJ",
    say: function () {
        console.log("say Hello");
    },
};

console.log(ghost.age, ghost.mbti); // 접근방법, 값을 가져오는 방법
ghost.age = 500; // 수정방법

console.log(ghost);

const type = "age";
console.log(ghost[type]); // key값이 변수값 또는 문자열로 들어오면 [변수] 또는 ['age']

ghost.say();
