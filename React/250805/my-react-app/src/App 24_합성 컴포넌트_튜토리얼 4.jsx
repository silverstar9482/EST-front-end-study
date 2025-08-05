function A(props) {
  console.log(props);
  return (
    <>
      <div>{props.children}</div>
      <div>hello world</div>
    </>
  );
}

function B(props) {
  console.log(props);
  return <div>{props.children}!!</div>;
}

function C(props) {
  console.log(props);
  return <div>{props.children}!!</div>;
}

function App() {
  return (
    <>
      <A>
        <B>hello</B>
        <C>world</C>
      </A>
    </>
  );
}

export default App;
