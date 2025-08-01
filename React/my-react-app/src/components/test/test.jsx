function TestHeader() {
  return (
    <header>
      <h2>이건 test 헤더입니다.</h2>
    </header>
  );
}

function TestMain() {
  return (
    <main>
      <p>이건 test 메인입니다.</p>
    </main>
  );
}

function TestFooter() {
  return (
    <footer>
      <p>이건 test 푸터입니다.</p>
    </footer>
  );
}

function TestApp() {
  return (
    <>
      <TestHeader />
      <TestMain />
      <TestFooter />
    </>
  );
}

export default TestApp;
