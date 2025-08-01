const REST_API_KEY = "YOUR_REST_API_KEY"; // 여기에 본인의 REST API 키를 넣어주세요.
const VCLIP_URL = "https://dapi.kakao.com/v2/search/vclip"; // 동영상 검색 API 엔드포인트

// DOM 요소 선택
const $vclipList = document.getElementById("vclip-list"); // 동영상 목록을 표시할 ul 또는 div
const $loading = document.getElementById("loading"); // 로딩 스피너 등의 요소
const $searchForm = document.getElementById("search-form"); // 검색 폼
const $searchInput = document.getElementById("search-input"); // 검색어 입력 input
const $observerTarget = document.getElementById("observer-target"); // IntersectionObserver의 타겟 요소

// 문제 1: 무한 스크롤 상태 변수 및 초기 검색 함수 구현 (script.js TODO 1, TODO 3)
// script.js 파일 상단의 TODO 1 부분에 무한 스크롤 기능을 위한 상태 관리 변수들을 선언하고, 이 변수들을 초기화하며 첫 검색을 시작하는 searchVclips 함수를 구현하세요.

// script.js TODO 1 및 TODO 3 구현 내용:

// 변수 선언: isLoading (초기값 false), hasMore (초기값 true), observer (초기값 null) 변수를 선언하세요.
let currentPage = 1;
let currentQuery = "";
let isLoading = false; // 로딩 상태 (true: 로딩 중, false: 로딩 아님)
let hasMore = true; // 더 불러올 데이터가 있는지 여부
let observer = null; // IntersectionObserver 인스턴스

// searchVclips 함수:
function searchVclips() {
    // $searchInput에서 검색어를 가져옵니다.
    const query = $searchInput.value.trim();

    // 검색어가 비어 있으면 경고창을 띄우고 함수를 종료합니다.
    if (query === "") {
        alert("검색어를 입력하세요");
        $searchInput.focus();
        return;
    }

    // 상태 초기화: currentPage를 1로, currentQuery를 현재 검색어로, hasMore를 true로 설정합니다.
    currentPage = 1;
    currentQuery = query;
    hasMore = true;

    // 기존에 표시되던 동영상 목록($vclipList)의 내용을 비워 초기화합니다.
    $vclipList.innerHTML = "";

    // fetchVclips 함수를 호출하여 첫 번째 페이지의 데이터를 가져오도록 합니다. (첫 검색임을 알리는 true 플래그 전달)
    fetchVclips(true);
}
// searchVclips();

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 문제 2: API 호출 및 기본 데이터 처리 (script.js TODO 5)
// 카카오 동영상 검색 API를 호출하고, 응답을 받아 데이터를 처리하는 fetchVclips 함수를 구현하세요. 이 함수는 로딩 상태를 관리하고, 검색 결과가 없을 때를 처리하며, 받은 데이터를 화면에 렌더링하는 renderVclips 함수를 호출해야 합니다.

// script.js TODO 5 구현 내용:
// - fetchVclips 함수 내에서:
async function fetchVclips(isFirstSearch = true) {
    // * 로딩 상태 설정: isLoading을 true로 설정하고, $loading 요소를 화면에 표시합니다.
    isLoading = true;
    // 이 조건문을 추가하여 isLoading이 true일 때만 로딩 스피너를 활성화합니다.
    if (isFirstSearch) {
        $loading.classList.add("active");
    }

    // * try-catch-finally 구문을 사용하여 API 호출 및 에러 처리를 합니다.
    // * fetch를 사용하여 VCLIP_URL에 currentQuery, currentPage, size=10 파라미터를 포함하여 API 요청을 보냅니다.
    try {
        const response = await fetch(
            `${VCLIP_URL}?query=${encodeURIComponent(
                currentQuery
            )}&page=${currentPage}&size=10`,
            {
                headers: {
                    // * Authorization 헤더에 KakaoAK ${REST_API_KEY}를 포함합니다.
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            }
        );

        // * 응답이 성공적이지 않으면 (response.ok가 false이면) 에러를 발생시킵니다.
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        // * JSON 데이터를 파싱합니다.
        const data = await response.json();

        // * 검색 결과가 없을 때 처리: data.documents 배열이 비어있으면, 만약 첫 검색이었다면 $vclipList에 "검색 결과가 없습니다." 메시지를 표시하고, hasMore를 false로 설정합니다.
        if (data.documents.length === 0) {
            if (isFirstSearch) {
                $vclipList.innerHTML = "<li>검색 결과가 없습니다.</li>";
                hasMore = false;
                return;
            }
        }
        // * renderVclips 함수를 호출하여 받은 data.documents를 렌더링합니다. ( isFirstSearch 플래그 전달)
        renderVclips(data.document, isFirstSearch);

        // * data.meta.is_end 값을 활용하여 hasMore 상태를 업데이트합니다.
        hasMore = !data.meta.is_end;

        // * 첫 검색이었다면 페이지 맨 위로 스크롤합니다 (window.scrollTo).
        if (isFirstSearch) {
            window.scrollTo(0, 0);
        }
    } catch (error) {
        // * 에러 발생 시 콘솔에 에러를 기록하고, 첫 검색이었다면 $vclipList에 에러 메시지를 표시합니다.
        console.error("검색 실패", error);
        if (isFirstSearch) {
            $vclipList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
        }
    } finally {
        isLoading = false;

        // * finally 블록에서 isLoading을 false로 설정하고 $loading 요소를 숨깁니다.
        $loading.classList.remove("active");
    }
}
