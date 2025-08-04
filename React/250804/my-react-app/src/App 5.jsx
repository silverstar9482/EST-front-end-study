// 사람의 이미지 3개를 카드로 표현하는 예시
// picture: https://picsum.photos/200/200?random=1

import "./App.css";

function App() {
  const humanData = [
    { id: 1, name: "Alice", image: "https://picsum.photos/200/200?random=1" },
    { id: 2, name: "Bob", image: "https://picsum.photos/200/200?random=2" },
    { id: 3, name: "Charlie", image: "https://picsum.photos/200/200?random=3" },
  ];
  console.log(humanData);
  return (
    <>
      <h1>hello world</h1>
    </>
  );
}

export default App;
