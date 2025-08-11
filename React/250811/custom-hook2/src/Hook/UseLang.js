import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

function useLang() {
  // 반복되는 부분
  const context = useContext(LanguageContext);

  return context;
}

export { useLang };
