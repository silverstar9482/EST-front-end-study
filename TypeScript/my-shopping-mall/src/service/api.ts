import type { Product } from '../type/index';

/*
1. API fetch -> 데이터 불러오기
2. 함수 이름 : fetchAllProducts
3. 성공 응답 / 실패 응답 처리(에러 메세지는 재량)

** 중요 포인트!! **
- 함수의 리턴 타입 정의
*/

const BASE_URL = 'https://dev.wenivops.co.kr/services/fastapi-crud/1/product';

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('네트워크 접속 에러');
    }

    const data: Product[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

fetchAllProducts();
