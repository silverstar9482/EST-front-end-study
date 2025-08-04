function PropsTest(props) {
  return (
    <div>
      <div>{props.name + props.name}</div>
      <div>{props.age + props.age}</div>
    </div>
  );
}

function App() {
  return <PropsTest name="PropsTest" age={10} />;
}

export default App;
