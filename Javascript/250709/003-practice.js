// 📘 실습 1. 대출 가능한 책 제목 추출
// 🔍 요구사항
// 문자열 형태의 JSON 데이터를 객체로 변환
// 각 객체의 available 값이 true인 책만 필터링
// 해당 책들의 title만 배열로 추출해 console.log()로 출력

const bookList =
    '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';

// (1) 문자열 -> 객체 변환
const parseBookList = JSON.parse(bookList);
console.log(parseBookList);

// (2) available: true인 책만 필터링
console.log(
    parseBookList.filter((book) => {
        return book.available;
    })
);
console.log(
    parseBookList.filter((book) => {
        return book.available;
    })
);

// (3) 해당 책들의 title만 배열로 추출해 console.log()로 출력
console.log(
    parseBookList.filter((book) => book.available).map((book) => book.title)
);

// 📊 실습 2. 정렬 가능한 테이블 만들기
// 요구사항에 맞게 코드를 완성해 주세요!

// 🔍 요구사항
// ‘데이터 호출’ 버튼 클릭 시, 데이터를 테이블 형태로 브라우저에 렌더링(<tbody>)
// 테이블 헤더 클릭 시, 해당 key 기준으로 오름차순/내림차순 정렬
// 정렬된 결과는 동적으로 <tbody>에 innerHTML로 출력

const userData =
    '[{"_id":"5e80777f673acf89c007ff91","age":27,"eyeColor":"green","name":"Angelina Chang","gender":"female","email":"angelinachang@kangle.com","phone":"+1 (938) 477-2821"},{"_id":"5e80777feee717674b817fd2","age":25,"eyeColor":"green","name":"Deidre Cobb","gender":"female","email":"deidrecobb@kangle.com","phone":"+1 (938) 477-2824"},{"_id":"5e80777fac368a4578dda85d","age":25,"eyeColor":"blue","name":"Jolene Franks","gender":"female","email":"jolenefranks@kangle.com","phone":"+1 (985) 536-3981"},{"_id":"5e80777ff3717874cbc78e44","age":31,"eyeColor":"brown","name":"Waters Hardin","gender":"male","email":"watershardin@kangle.com","phone":"+1 (938) 559-2224"},{"_id":"5e80777fe36842ea9e024fcd","age":34,"eyeColor":"green","name":"Jody Chaney","gender":"female","email":"jodychaney@kangle.com","phone":"+1 (878) 587-2602"},{"_id":"5e80777fafd591f57344eb33","age":31,"eyeColor":"green","name":"Ortiz Maldonado","gender":"male","email":"ortizmaldonado@kangle.com","phone":"+1 (986) 509-2753"},{"_id":"5e80777f20e48e9ada226862","age":25,"eyeColor":"brown","name":"Stacy Burris","gender":"female","email":"stacyburris@kangle.com","phone":"+1 (864) 577-3500"},{"_id":"5e80777faf334f84a2c90595","age":33,"eyeColor":"brown","name":"Davenport Levy","gender":"male","email":"davenportlevy@kangle.com","phone":"+1 (990) 600-2700"}]';
// '데이터 호출' 버튼
const renderingButton = document.querySelector("#renderingButton");
// tbody
const tableBody = document.querySelector("#renderingDataTable > tbody");

const parseUserData = JSON.parse(userData);
// console.log(parseUserData);

// 랜더링을 위한 함수
function renderTable(data) {
    const userDataArr = []; // html 문자열(tr)을 누적하기 위함.

    for (let item of data) {
        console.log(item);
        userDataArr.push(`
            <tr>
                <td>${item._id}</td>
                <td>${item.age}</td>
                <td>${item.eyeColor}</td>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
            </tr>
            `);
    }
    tableBody.innerHTML = userDataArr.join("");
}

// 정렬 방향을 저장할 변수
let asc = true; // true: 오름차순, false: 내림차순

// 정렬을 위한 함수
// (2) 정렬기능 구현 + 정렬방향 반전 처리
function sort(key) {
    if (asc) {
        // 오름차순
        const sortedData = parseUserData.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            } else if (a[key] > b[key]) {
                return 1;
            } else {
                return 0;
            }
        });
        asc = false;
        renderTable(sortedData);
    } else {
        // 내림차순
        const sortedData = parseUserData.sort((a, b) => {
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            } else {
                return 0;
            }
        });
        asc = true;
        renderTable(sortedData);
    }
}

renderingButton.addEventListener("click", () => renderTable(parseUserData));
