import { use } from 'react';
import { useState, useEffect, useRef } from 'react';

export function useScrollThrottle() {
  const [isBottom, setIsBottom] = useState();
  let timerRef = useRef(null);

  // 디바운스
  // useEffect(() => {
  //   const debouncedScroll = () => {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }

  //     timerRef.current = setTimeout(() => {
  //       setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);
  //       console.log('디바운스 scrolling...');
  //     }, 100);
  //   };

  //   window.addEventListener('scroll', debouncedScroll);

  //   return () => {
  //     window.removeEventListener('scroll', debouncedScroll);
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //   };

  // }, []);

  // 쓰로틀링
  useEffect(() => {
    const throttleScroll = () => {
      if (timerRef.current) {
        return;
      }

      setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);
      console.log('쓰로틀링 scrolling...');

      timerRef.current = setTimeout(() => {
        timerRef.current = null;

        console.log('쓰로틀링 scrolling 해제!');
      }, 1000);
    };

    window.addEventListener('scroll', throttleScroll);

    return () => {
      window.removeEventListener('scroll', throttleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return isBottom;
}
