function Header() {
  return <header>header</header>;
}

function Footer() {
  return <footer>footer</footer>;
}

// function App() {
//   return (
//     <div>
//       <Header />
//       <h1>hello world</h1>
//       <Footer />
//     </div>
//   );
// }

// 최상위에 하나만 묶으면 된다.
function App() {
  // 일반적인 주석을 사용할 수 있어요!!
  // 코드도 일반적인 JavaScript처럼 작성할 수 있어요.
  // const x = 10;
  // const y = 10;
  return (
    <>
      {/* JSX 주석은 중괄호 안에서 사용해야 해요! */}
      <p>hello world</p>
      <p>hello world</p>
    </>
  );
}

export default App;
