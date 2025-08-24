// 5. 기본타입
// 다음 변수들에 적절한 타입을 지정해 보세요
let studentName: string = '김철수';
let studentAge: number = 20;
let isGraduated: boolean = false;
let scores: number[] = [90, 85, 92];

// 6. 함수타입
// 두 숫자를 더해서 반환하는 함수의 타입을 정의해보세요.
// 함수타입을 정의하세요
function addNumbers(a: number, b: number): number {
  return a + b;
}

// 8. ID가 숫자
// * 유니언 타입을 사용하여 변수를 선언하세요 *
let userId: string | number;
