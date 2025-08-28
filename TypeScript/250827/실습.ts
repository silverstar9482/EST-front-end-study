// 1. 인터페이스 기본 - 사용자 정보 인터페이스
// 다음 요구사항에 맞는 User 인터페이스를 정의하세요.
// name: 문자열 (필수)
// age: 숫자 (필수)
// email: 문자열 (선택사항)
// 아래 코드가 올바르게 작동하도록 해주세요
interface User {
  name: string;
  age: number;
  email?: string;
}

const user1: User = {
  name: '김철수',
  age: 25,
};

const user2: User = {
  name: '이영희',
  age: 30,
  email: 'younghee@example.com',
};

/////////////////////////////////////////////////////////////////////////////////////

// 2. 인터페이스 확장 - 관리자 인터페이스
// 위에서 만든 User 인터페이스를 확장하여 Admin 인터페이스를 만드세요.
// User의 모든 속성을 포함
// permissions: 문자열 배열 (필수)

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  name: '박관리자',
  age: 35,
  email: 'admin@example.com',
  permissions: ['read', 'write', 'delete'],
};

/////////////////////////////////////////////////////////////////////////////////////

// 3. 제네릭 기본 - 응답 래퍼 함수
// API 응답을 감싸는 제네릭 함수를 만드세요.
// 성공/실패를 나타내는 응답 타입
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

// 제네릭 함수 createResponse를 완성하세요
// 성공시: success: true, data 포함
// 실패시: success: false
function createResponse<T>(data: T | null, isSuccess: boolean, message?: string): ApiResponse<T> {
  if (isSuccess) {
    return { data: data as T, success: true };
    // return { data: data!, success: true };
  } else {
    return { success: false, message };
  }
}

// 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
const userResponse = createResponse({ name: '홍길동', age: 20 }, true);
const errorResponse = createResponse<User>(null, false, '사용자를 찾을 수 없습니다');

/////////////////////////////////////////////////////////////////////////////////////

// 5. Partial, Pick, Omit 활용 - 사용자 업데이트
// 사용자 정보를 부분적으로 업데이트하는 함수들을 만드세요.
interface FullUser {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

// 1. 사용자 생성시 필요한 정보만 받는 타입 (id, createdAt 제외)
type CreateUserData = Omit<FullUser, 'id' | 'createdAt'>;

// 2. 사용자 업데이트시 부분적으로 수정 가능한 타입 (id 제외)
type UpdateUserData = Partial<Omit<FullUser, 'id'>>;

// 3. 공개 프로필용 타입 (password 제외)
type PublicUser = Omit<FullUser, 'password'>;

// 4. 로그인 정보만 담는 타입
type LoginData = Pick<FullUser, 'email' | 'password'>;

// 함수들을 구현하세요
function createUser(userData: CreateUserData): FullUser {
  // 구현하세요 (id와 createdAt은 자동 생성)
  const result: FullUser = {
    ...userData,
    id: Math.floor(Math.random() * 1000),
    createdAt: new Date(),
  };
  return result;
}
function getPublicProfile(user: FullUser): PublicUser {
  // 구조분해할당
  const { password, ...abcUser /* 변수명은 아무거나 써도됌 */ } = user;
  return abcUser;
}

/////////////////////////////////////////////////////////////////////////////////////

// 6. 타입 가드 - 동물 구분하기
// 다양한 동물 타입을 구분하는 타입 가드를 만드세요.
interface Dog {
  type: 'dog';
  name: string;
  breed: string;
  bark(): void;
}

interface Cat {
  type: 'cat';
  name: string;
  color: string;
  meow(): void;
}

interface Bird {
  type: 'bird';
  name: string;
  canFly: boolean;
  chirp(): void;
}

type Animal = Dog | Cat | Bird;

// 타입 가드 함수들을 구현하세요
function isDog(animal: Animal): animal is Dog {
  return animal.type === 'dog';
}

function isCat(animal: Animal): animal is Cat {
  return animal.type === 'cat';
}

function isBird(animal: Animal): animal is Bird {
  return animal.type === 'bird';
}

// 동물의 소리를 내는 함수를 구현하세요
function makeSound(animal: Animal): void {
  // 타입 가드를 사용하여 각 동물에 맞는 소리 메서드를 호출하세요
  // if (animal.type === 'dog') {
  //   animal.bark();
  // } else if (animal.type === 'cat') {
  //   animal.meow();
  // } else {
  //   animal.chirp();
  // }

  if (isDog(animal)) {
    animal.bark();
  } else if (isCat(animal)) {
    animal.meow();
  } else {
    animal.chirp();
  }
}

// 사용 예시
const dog: Dog = { type: 'dog', name: '멍멍이', breed: '골든리트리버', bark: () => console.log('멍멍!') };
const cat: Cat = { type: 'cat', name: '야옹이', color: '검정', meow: () => console.log('야옹!') };
const bird: Bird = { type: 'bird', name: '짹짹이', canFly: true, chirp: () => console.log('짹짹!') };

makeSound(dog); // 멍멍!
makeSound(cat); // 야옹!
makeSound(bird); // 짹짹!
