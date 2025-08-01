// HTTP -> 200, 404, 500,  알수없는 에러
// switch(){} - 케이스 비교 하는 함수
const statusCode = undefined;
switch (statusCode) {
    case 200:
        console.log("성공입니다");
        break; // break;를 안넣어주면 다음 케이스로 계속 넘어감.
    case 404:
        console.log("페이지를 찾을 수 없습니다.");
        break;
    case 500:
        console.log("서버 오류입니다.");
        break;
    default:
        console.log("알수없는 오류입니다");
}

// 유저의 Role을 판단해서 출력하는 구문을 만드시오.
// admin -> '관장님 안녕하세요', user -> '회원님 안녕하세요', guest -> '게스트 화면입니다'
// 그외의 경우에는 '페이지를 보는 권한이 없습니다'
const userRole = "admin"; // user, guest, ---
switch (userRole) {
    case "admin":
        console.log("관장님 안녕하세요");
        break;
    case "user":
        console.log("회원님 안녕하세요");
        break;
    case "guest":
        console.log("게스트 화면입니다");
        break;
    default:
        console.log("페이지를 보는 권한이 없습니다.");
}

// Date객체
let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const today = new Date(); //2025-06-30T04:26:17.441Z
console.log(today.toISOString().split("T").slice(0, 1));
// toISOString() - Date 객체의 시간을 ISO 8601 확장 형식의 문자열로 변환하는 함수

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // month는 1월이 0이라 +1 해줘야됌
const date = String(today.getDate()).padStart(2, "0");
const day = today.getDay(); // 요일 0~6, 0 -> 일요일, 6 -> 토요일
const day1 = weeks[today.getDay()]; // 요일 0~6, 0 -> 일요일, 6 -> 토요일

console.log(`${year}-${month}-${date},${day}`); // 2025-6-30,1
// -> 2025-06-30

// String(123) -> '123'
// (123).toString() -> '123'

console.clear();
console.log(day1);
// day와 switch문을 이용해서 오늘의 요일을 문자열로 출력하시오. 'Sunday', 'Monday',...
// Today is Monday.
let week; //값이 변경될때 선언만 해놓는 경우가 많음
switch (day) {
    case 0:
        week = "Sunday";
        break;
    case 1:
        week = "Monday";
        break;
    case 2:
        week = "Tuesday";
        break;
    case 3:
        week = "Wednesday";
        break;
    case 4:
        week = "Thursday";
    case 5:
        week = "Friday";
        break;
    case 6:
        week = "Saturday";
}
console.log(`Today is ${week}`);

console.clear();

const hours = today.getHours(); // 0~23 -> 0~12 am, 13~0 -> am
const minnutes = today.getMinutes();

// 1차) 14:08 pm 삼항연산자(if)
const pmam = hours > 12 ? "PM" : "AM";

// hours가 12보다크면 오후, 아니면 오전
const hours12 = String(hours % 12 || 12).padStart(2, "0");

// 2차) 02:08 pm
console.log(`${hours}:${minnutes}`); // 24시간제 출력
console.log(`${hours12}:${minnutes} ${pmam}`); // 12시간제 출력
