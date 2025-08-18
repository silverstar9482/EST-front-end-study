import { useState, useEffect, useRef } from 'react';

export function useScrollObserver() {
  // 1. 옵저버를 만든다
  // 2. 옵저버의 관찰 대상을 지정
  // 3. 관찰대상 생성
  // 4. 콜백 함수(어떤로직)
  // 5. 옵션

  const [isBottom, setIsBottom] = useState();
  const endLineRef = useRef(null);

  useEffect(() => {
    const endLine = document.createElement('div');
    endLine.style.height = '10px';
    document.body.append(endLine);
    endLineRef.current = endLine;

    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(endLineRef.current);

    return () => {
      observer.unobserve(endLineRef.current);
      document.body.removeChild(endLineRef.current);
    };
  }, []);

  return isBottom;
}
