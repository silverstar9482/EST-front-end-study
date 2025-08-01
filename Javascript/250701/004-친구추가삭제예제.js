let friends = [];

function addFriend(name) {
    friends.push(name);
}

function deleteFriend(name) {
    // 친구목록에 없는 이름을 입력했을 경우의 예외처리를 하세요.
    // '친구목록에 없는 이름입니다'를 출력
    // '친구 'name'이 삭제되었습니다.'

    // ************** teacher ****************
    const idx = friends.indexOf(name);
    if (idx === -1) {
        console.log(`입력하신 ${name}는 내 친구가 아니예요`);
        return; // 리턴을 안쓰면 계속 돌아감
    }

    friends.splice(idx, 1);
    console.log(`친구 ${name}은 삭제되었어요`);

    // *************** 내가한거 *****************
    // friendIndex = friends.indexOf(name);
    // console.log(friendIndex);
    // if (friendIndex === -1) {
    //     console.log("목록에 없는 친구입니다");
    // } else {
    //     friends.splice(friendIndex, 1);
    // }
}

function updateFriend(name, newName) {
    // 예외처리, 친구이름이 ''로 수정되었습니다.
    friendsIdx = friends.indexOf(name);
    console.log(friendsIdx);
    if (friendsIdx === -1) {
        console.log(`입력하신 ${name}는 내 친구가 아니예요`);
        return;
    }
    friends[friendsIdx] = newName;
    console.log(`친구 이름이 ${newName}로 수정되었습니다.`);
}

addFriend("Ghost");
addFriend("Irangi");
addFriend("Camel");
updateFriend("Ghost", "Shoopa");
deleteFriend("Irangi");

console.log(`my Friends : ${friends}`);

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
// 2번째는 인덱스의 값을 삭제 -> [1, 3, 4]
// 배열변수.splice(인덱스넘버, 삭제개수, 추가할요소, 추가할요소)
arr.splice(2, 1);
console.log(arr);

const fruits = ["apple", "mango", "banana"];
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("mango"));
