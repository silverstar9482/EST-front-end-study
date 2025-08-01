// 몇초에 한번 반복하겠다.

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

const timerId = setInterval(sayHello, 1000, "Ghost"); // 1초마다 계속 실행됌
clearInterval(timerId);

function sayBye(name) {
    console.log(`Good-bye, ${name}`);
}

// 3초후에 sayBye 실행. setTimeout
const timer = setTimeout(sayBye, 3000, "Ghost"); // 3초에 한번 실행됌

// 'clear-'타이머 취소, 자바스크립트에 등록된 함수는 아님.
// node.js랑 (다른거한개생각안남..)에 등록된 함수임.
clearTimeout(timer);
