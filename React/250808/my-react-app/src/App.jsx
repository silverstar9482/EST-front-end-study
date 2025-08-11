import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';
import './reset.css';

// ## 문제 2: 사용자 로그인 상태 관리

// ### 문제
// 간단한 로그인/로그아웃 기능을 구현해보세요.
// 실무에서는 이런식으로 데이터가 들어오지 않습니다.
// {username: 'user1', userimage: 'image_url', accessToken: '1234', refreshToken: 'abcd'}

//
// 요구사항
// - 사용자 정보와 로그인 상태는 context로 관리
// - 로그인 폼에서 username과 password 입력
// - 로그인 성공 시 환영 메시지와 로그아웃 버튼 표시
// - 로그인 실패 시 "아이디 또는 비밀번호가 틀렸습니다" 표시
// - 구조는 Header, Main, Footer 컴포넌트로 나누고, Header에만 로그인 상태 표시
// - Header는 header > nav > ul > li 구조로 작성

const UserContext = createContext();

const users = [
  { id: 1, username: 'user1', password: '1234', name: '김철수' },
  { id: 2, username: 'user2', password: '5678', name: '이영희' },
  { id: 3, username: 'admin', password: 'admin', name: '관리자' },
];

function Header() {
  const { currentUser, logout } = useContext(UserContext);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'lightpink',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: '#333', fontSize: '26px' }}>
        <Link>LOGO</Link>
      </h1>
      <nav>
        <ul style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
          <li>
            {currentUser ? (
              <button type='button' style={{ backgroundColor: 'hotpink', padding: '10px 15px', borderRadius: '50px', color: '#fff' }} onClick={logout}>
                로그아웃
              </button>
            ) : (
              <button type='button' style={{ backgroundColor: 'hotpink', padding: '10px 15px', borderRadius: '50px', color: '#fff' }}>
                로그인
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Main() {
  const { setUserId, setUserPw, login, currentUser, errorMsg } = useContext(UserContext);
  if (currentUser) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          fontSize: '24px',
        }}
      >
        <p>환영합니다. {currentUser.name}님!</p>
      </div>
    );
  }

  return (
    <form
      action='#'
      method='post'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <fieldset
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <div style={{ width: '100%', textAlign: 'left' }}>
          <label htmlFor='userId' style={{ width: '100%', display: 'inline-block', marginBottom: '5px' }}>
            로그인
          </label>
          <input type='text' id='userId' style={{ width: '100%', height: '30px' }} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div style={{ width: '100%', textAlign: 'left' }}>
          <label htmlFor='userPw' style={{ width: '100%', display: 'inline-block', marginBottom: '5px' }}>
            비밀번호
          </label>
          <input type='password' id='userPw' style={{ width: '100%', height: '30px' }} onChange={(e) => setUserPw(e.target.value)} />
        </div>
        {errorMsg}
      </fieldset>
      <button
        type='submit'
        style={{ backgroundColor: 'hotpink', color: '#fff', padding: '12px 25px', borderRadius: '10px', fontSize: '20px' }}
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
      >
        로그인
      </button>
    </form>
  );
}
function Footer() {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#ccc',
        padding: '20px',
      }}
    >
      <p style={{ color: '#333', fontSize: '26px' }}>footer</p>
    </div>
  );
}

function App() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  function login() {
    const user = users.find((user) => user.username === userId && user.password === userPw);

    if (user) {
      console.log(`로그인 성공! 안녕하세요, ${user.name}님`);
      setCurrentUser(user);
    } else {
      console.log(`아이디 또는 비밀번호가 틀렸습니다.`);
      setErrorMsg(<p style={{ width: '100%', color: 'red', textAlign: 'left' }}>아이디 또는 비밀번호가 틀렸습니다.</p>);
    }
  }

  function logout() {
    if (currentUser) {
      setCurrentUser(null);
      setErrorMsg('');
    }
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ users, userId, userPw, setUserId, setUserPw, currentUser, setCurrentUser, login, logout, errorMsg, setErrorMsg }}>
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
