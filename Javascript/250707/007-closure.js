// 클로저
function outer() {
    const outVar = "outer 변수";

    function inner() {
        console.log(outVar);
    }

    return inner;
}

const innerFunc = outer();
innerFunc();

// 데이터 은닉
function createCounter() {
    let count = 0;

    // 외부에서 count를 직접 바꿀 수는 없다! 제한적 접근!
    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();

// 모듈 패턴
const moduleCounter = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            console.log(count);
        },
    };
})();

console.log(moduleCounter);

// 좋아요 버튼 구현 => 좋아요 수를 관리하는 함수
function createLikeCounter() {
    let count = 0;

    return {
        like: function () {
            count++;
            console.log(`좋아요 ${count}개`);
        },
        getLikes: function () {
            return count;
        },
    };
}

const likeButton = createLikeCounter();

console.log(likeButton);
likeButton.like();
likeButton.like();
likeButton.like();
likeButton.like();
likeButton.like();
console.log(likeButton.getLikes());

// 쓰로틀링 - 어떤 함수를 지정한 시간 간격마다 한 번만 실행되도록 제한하는 것
// => 일정 시간마다 규칙적으로 실행
// => 함수의 최대 호출빈도를 제어할 수 있다!!

// func : 실제로 실행하고 싶은 함수
// delay: ms 단위(1000ms -> 1s), 지정 시간
function throttle(func, delay) {
    // func: handleClick, delay: 1000
    let isThrottle = false; // 최근에 실행되었는지를 확인

    return function (...args) {
        // 어떤함수가 들어올지 모르니 '...args(arguments)= 나머지 매개변수' 사용해서 나머지 모든 인자들을 적용해준다
        // args: 모든 인자가 담긴 배열 => [target] => ... => target

        if (!isThrottle) {
            func(...args); // handleClick(target)
            isThrottle = true; // 잠금 => 다시 실행하지 못하도록

            // 자동으로 해제
            setTimeout(() => {
                // 타이머 ON
                isThrottle = false; // 잠금 해제
            }, delay);
        }
    };
    // isThrottle: false -> (함수 실행) true -> (타이머 종료) false -> (함수 실행) true -> ...
}

// 기능: 클릭 시간을 출력해주는 함수
function handleClick() {
    console.log("클릭 시간: ", new Date().toLocaleTimeString()); // 오후 15:37:30(현재시간)
}

const throttledClick = throttle(handleClick, 1000);
document.getElementById("button").addEventListener("click", throttledClick);
