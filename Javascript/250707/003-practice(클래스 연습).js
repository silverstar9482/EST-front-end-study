// ## 🎯 실습 안내 *10시 20분까지!!!
// - 재료를 넣으면, "OO 맛과 OO 맛이 난다!"는 문장을 출력하는 기능을 가진 클래스 만들기
// - Sausage 클래스와 GrilledSausage 파생 클래스까지 모두 작성하기!
// - 꼭 인스턴스를 만들어서 `console.log()`로 잘 만들어지는지 확인해보기!

// ### **1. Sausage 클래스 만들기**
// - 매개변수 2개 → `taste1`, `taste2`
// - `eat()` 메서드 → `{taste1}와 {taste2} 맛이 난다!`

// ### **2. GrilledSausage 클래스 만들기**
// - `Sausage` 클래스를 **상속**받기
// - `eat()` 메서드를 **오버라이딩** → `{taste1}와 {taste2} 맛이 난다! 불 맛도 난다!`

// ```jsx
// //실행 예시

// const sausage = new Sausage("소고기", "파");
// sausage.eat();
// // 소고기와 파 맛이 난다!

// const grilled = new GrilledSausage("닭고기", "떡");
// grilled.eat();
// // 닭고기와 떡 맛이 난다! 불 맛도 난다!
// ```

class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }
    eat() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이 난다!`);
    }
}

class GrilledSausage extends Sausage {
    // 새로 추가하는것이 아닌 위에있는 것을 그대로 쓰기때문에 생략해도 됨!
    // constructor(taste1, taste2) {
    //     super(taste1, taste2);
    // }

    // eat() {
    //     console.log(`${this.taste1}와 ${this.taste2} 맛이 난다! 불 맛도 난다!`);
    // }

    // taste3을 새로 추가할 경우
    constructor(taste1, taste2, taste3) {
        super(taste1, taste2);
        this.taste3 = "불";
    }

    eat() {
        console.log(
            `${this.taste1}와 ${this.taste2} 맛이 난다! ${this.taste3} 맛도 난다!`
        );
    }
}

const sausage = new Sausage("소고기", "파");
sausage.eat(); // 소고기와 파 맛이 난다!

const grilled = new GrilledSausage("닭고기", "떡");
grilled.eat();
console.log(grilled.taste1);
