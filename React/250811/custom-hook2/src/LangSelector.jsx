import { useLang } from './Hook/UseLang.js';

function LangSelector() {
  const { currentLanguage, setLanguage } = useLang();
  return (
    <>
      <div>{currentLanguage.languageSelector}</div>
      <button onClick={() => setLanguage('en')}>영어</button>
      <button onClick={() => setLanguage('ko')}>한국어</button>
      <button onClick={() => setLanguage('ja')}>日本語</button>
    </>
  );
}

export default LangSelector;
