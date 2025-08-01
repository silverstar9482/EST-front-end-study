/*
[실습 안내]
- 실습 시간: 20분
- 요구사항에 따라 코드 완성하기
- 다 작성하신 분들은 아래 테스트 코드를 활용해 내가 만든 클래스가 잘 작동하는지 콘솔로 확인해보세요.

1. `TodoItem` 클래스
- 할 일 항목을 표현합니다.
- 프로퍼티
    - `todo`: 문자열로 된 할 일 내용
    - `isDone`: 완료 여부 (기본값 `false`)
- 메서드
    - `changeStatus()` : 완료 여부를 토글합니다.

2. `TodoList` 클래스
- 할 일 항목들을 담는 리스트입니다.
- 프로퍼티
    - `items`: 할 일들을 담는 배열
- 메서드
    - `addItem(text)` : 새로운 할 일 항목을 추가하고 반환
    - `getItems()` : 전체 할 일 목록을 반환
    - `removeItem(index)` : 해당 인덱스의 할 일을 삭제, 삭제 여부에 따라 불리언 값 반환
    - `getLeftTodoCount()` : 아직 완료되지 않은 할 일 개수를 반환
*/

// 할 일 목록: [item1, item1, item3, .....]
// [x] item1
// [] item2
// [] item3
// ....

// 1. TodoItem 클래스 만들기
class TodoItem {
    constructor(todo, isDone = false) {
        this.todo = todo; // 할 일
        this.isDone = isDone; // 완료 유무
        // this.id
    }

    // 할 일의 상태를 계속 변경해주는 기능: 즉 완료 -> 미완료, 미완료 -> 완료, 상태를 업데이트는 메서드
    changeStatus() {
        this.isDone = !this.isDone;
        return this.isDone;
    }
}

// 2. TodoList 클래스 만들기
class TodoList {
    constructor() {
        this.items = [];
    }

    addItem(text) {
        const newTodo = new TodoItem(text, false);
        this.items.push(newTodo);
        return newTodo;
    }

    getItems() {
        return this.items;
    }

    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    getLeftTodoCount() {
        // [완료가 되지 않은 아이템1, ~ 아이템2, ... ]
        return this.items.filter((item) => !item.isDone).length;
    }
}

const myTodoList = new TodoList(); // 하나의 객체(TodoList 클래스의 속성과 메서드를 담고있는)
// => 실제로 사용할 수 있는 객체(인스턴스)
const itme1 = myTodoList.addItem("자바스크립트 복습하기");
const itme2 = myTodoList.addItem("청소하기");
myTodoList.addItem("설거지하기");

console.log("할 일 목록:", myTodoList.getItems());
itme1.changeStatus(); // 완료 처리
console.log("남은 할 일 개수:", myTodoList.getLeftTodoCount());

myTodoList.removeItem(0);
console.log("할 일 목록:", myTodoList.getItems());

const wenivTodoList = new TodoList();
