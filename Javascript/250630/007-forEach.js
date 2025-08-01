const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];

/* forEach 
- 열을 순회해서 각 요소를 콜백 함수로 처리하기 위한 함수
- 배열을 반복하면서 각 요소에 작업을 수행할 때 사용
- foreach 반복문은 오직 Array 객체에서만 사용가능한 메서드
*/
users.forEach((user, idx) => {
    console.log(`${idx} : ${user}`);
});
