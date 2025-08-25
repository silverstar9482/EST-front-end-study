// 다음 요구사항에 맞는 제네릭 함수를 작성해보세요.

// 배열을 입력받아 첫 번째 요소를 반환하는 함수 getFirstElement<T>를 만드세요.
// 배열이 비어있으면 undefined 반환해야 합니다.
// 모든 타입의 배열에 대해 동작해야 합니다.
// 다음 요구사항에 맞는 제네릭 인터페이스와 함수를 작성해보세요.

// Key와 Value를 저장할 수 있는 제네릭 인터페이스 Storage<K, V>를 만드세요.
// Storage 인터페이스를 구현하는 setItem과 getItem 함수를 작성하세요.
// setItem은 key와 value를 받아서 저장하고, getItem은 key를 받아서 해당 value를 반환합니다.
// 저장된 key가 없는 경우 getItem은 undefined를 반환해야 합니다.
// (리액트 실전 문제) 제네릭을 사용하여 간단한 상태 관리 Hook을 만들어보세요.

// useLocalStorage라는 커스텀 Hook을 만드세요
// 이 Hook은 어떤 타입의 데이터든 localStorage에 저장하고 불러올 수 있어야 합니다
// 초기값을 설정할 수 있어야 합니다
// 값을 변경하면 자동으로 localStorage에 저장되어야 합니다

// 아래 코드는 입력 예시입니다.
const [name, setName] = useLocalStorage<string>('userName', '');
const [age, setAge] = useLocalStorage<number>('userAge', 0);
const [isLoggedIn, setIsLoggedIn] = useLocalStorage<boolean>('loggedIn', false);

function getFirstElement<T>(a: T[]): T | undefined {
  if (a.length === 0) {
    return undefined;
  }
  return a[0];
}

const array = getFirstElement([]);

interface Storage<K extends string | number, V> {
  setItem(key: K, value: V): void;
  getItem(key: K): V | undefined;
}
