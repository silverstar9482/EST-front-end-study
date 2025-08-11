import { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();

const languages = {
  en: {
    title: 'Multi-language App',
    greeting: 'Hello, welcome to our app!',
    description: 'This app supports multiple languages.',
    languageSelector: 'Select Language:',
  },
  ko: {
    title: '다국어 앱',
    greeting: '안녕하세요, 우리 앱에 오신 것을 환영합니다!',
    description: '이 앱은 여러 언어를 지원합니다.',
    languageSelector: '언어 선택:',
  },
  ja: {
    title: '多言語アプリ',
    greeting: 'こんにちは、私たちのアプリへようこそ！',
    description: 'このアプリは複数の言語をサポートしています。',
    languageSelector: '言語を選択：',
  },
};

function Header() {
  const { setLanguage, currentLanguage } = useContext(LanguageContext);

  return (
    <>
      <p>{currentLanguage.languageSelector}</p>
      <div style={{ display: 'flex', verticalAlign: 'middle' }}>
        <button type='button' style={{ padding: '3px 5px' }} onClick={() => setLanguage('en')}>
          English
        </button>
        <button type='button' style={{ margin: '0 5px' }} onClick={() => setLanguage('ko')}>
          한국어
        </button>
        <button type='button' onClick={() => setLanguage('ja')}>
          日本語
        </button>
      </div>
    </>
  );
}

function Contents() {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', width: '350px' }}>
      <h2>{currentLanguage.title}</h2>
      <p>{currentLanguage.greeting}</p>
      <p>{currentLanguage.description}</p>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('ko');
  const currentLanguage = languages[language];

  return (
    <LanguageContext.Provider value={{ languages, language, setLanguage, currentLanguage }}>
      <Header />
      <Contents />
    </LanguageContext.Provider>
  );
}

export default App;
