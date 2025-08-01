const REST_API_KEY = "YOUR_REST_API_KEY"; // 여기에 본인의 REST API 키를 넣어주세요.
const VCLIP_URL = "https://dapi.kakao.com/v2/search/vclip"; // 동영상 검색 API 엔드포인트

// TODO 1: 무한 스크롤 상태 관리 변수 선언
// - currentPage: 현재 페이지 번호
// - currentQuery: 현재 검색어
let currentPage = 1;
let currentQuery = "";
let isLoading = false; // 로딩 상태 (true: 로딩 중, false: 로딩 아님)
let hasMore = true; // 더 불러올 데이터가 있는지 여부
let observer = null; // IntersectionObserver 인스턴스

// DOM 요소 선택
const $vclipList = document.getElementById("vclip-list"); // 동영상 목록을 표시할 ul 또는 div
const $loading = document.getElementById("loading"); // 로딩 스피너 등의 요소
const $searchForm = document.getElementById("search-form"); // 검색 폼
const $searchInput = document.getElementById("search-input"); // 검색어 입력 input
const $observerTarget = document.getElementById("observer-target"); // IntersectionObserver의 타겟 요소

// ---- 여기에 필요한 함수들을 채워나가세요 ----

// 폼 제출 이벤트 (수정 금지)
$searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    searchVclips(); // 첫 검색 함수 호출
});

// TODO 5: 페이지 로드 시 초기화 및 Observer 해제
// DOMContentLoaded 이벤트에서 setupIntersectionObserver 함수 호출
// window.onunload 또는 beforeunload 이벤트에서 observer.disconnect() 호출
document.addEventListener("DOMContentLoaded", () => {
    setupIntersectionObserver();
});

window.addEventListener("beforeunload", () => {
    if (observer) {
        observer.disconnect();
    }
});
