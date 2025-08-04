import "./App.css";
import items from "./data.jsx";

// - 레벨에 따른 등급 분류
//     - 전설(60이상)
//         - 황금색
//     - 영웅(50이상)
//         - 노란색
//     - 고급(40이상)
//         - 녹색
//     - 일반(40미만)
//         - 회색
// - 체력/마나 비율에 따라
//     - 50% 이상이면 녹색
//     - 미만이면 빨간색
// - 온라인/오프라인, 길드 유무, 장비 착용 여부 등을 자유롭게 표시해주세요.
// - 자주 하시는 게임이 있다면 게임 데이터를 바꾸셔도 좋습니다.

function Name({ name, level }) {
  let levelClass = "";
  if (level >= 60) {
    levelClass = "legend-level";
  } else if (level >= 50) {
    levelClass = "high-level";
  } else {
    levelClass = "low-level";
  }

  return (
    <div className="name">
      <h2 className={`${levelClass}`}>
        {name}
        <span className="level">{levelClass.split("-")[0]}</span>
      </h2>
    </div>
  );
}

function Health({ healthCurrent, healthMax }) {
  const healthPercentage = (healthCurrent / healthMax) * 100;
  let healthColor = "";
  if (healthPercentage >= 75) {
    healthColor = "green";
  } else if (healthPercentage >= 50) {
    healthColor = "orange";
  } else {
    healthColor = "red";
  }

  return (
    <>
      health
      <div
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "#f0f0f0f0",
          borderRadius: "50px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: healthPercentage + "%",
            height: "10px",
            backgroundColor: healthColor,
            transition: "width 0.3s ease-in-out;",
          }}
        ></div>
      </div>
    </>
  );
}

function Mana({ manaCurrent, manaMax }) {
  const manaPercentage = (manaCurrent / manaMax) * 100;
  let manaColor = "";

  if (manaPercentage >= 75) {
    manaColor = "blue";
  } else if (manaPercentage >= 50) {
    manaColor = "orange";
  } else {
    manaColor = "red";
  }

  return (
    <>
      Mana
      <div
        style={{
          width: "100%",
          height: "10px",
          borderRadius: "50px",
          backgroundColor: "#f0f0f0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: manaPercentage + "%",
            height: "10px",
            backgroundColor: manaColor,
            transition: "width 0.3s ease-in-out;",
          }}
        ></div>
      </div>
    </>
  );
}

function Card({ gameItem }) {
  return (
    <div className="card">
      <img src={`https://picsum.photos/200/200?random=${gameItem.id}`} />
      <Name name={gameItem.name} level={gameItem.level} />
      <p>Class : {gameItem.class}</p>
      <p>level : {gameItem.level}</p>
      <Health
        healthCurrent={gameItem.health.current}
        healthMax={gameItem.health.max}
      />
      <Mana manaCurrent={gameItem.mana.current} manaMax={gameItem.mana.max} />
    </div>
  );
}

function App() {
  return (
    <div className="card-container">
      {items.map((items) => (
        <Card key={items.id} gameItem={items} />
      ))}
    </div>
  );
}

export default App;
