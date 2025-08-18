import { useActionState, useState } from 'react';

export default function Login() {
  const [resetBtn, setResetBtn] = useState('');
  const [state, formAction, isPending] = useActionState(
    async (previousState, formData) => {
      const userName = formData.get('userName');
      const password = formData.get('password');

      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
            password: password,
          }),
        });

        //실패시
        if (!response.ok) {
          const result = await response.json();
          return { success: false, message: result.message || '로그인에 실패했습니다.' };
        }
        // 성공시
        const result = await response.json();
        return { success: true, message: `로그인 성공! ${result.user.userName}님 환영합니다.` };
      } catch (error) {
        // 서버접속 실패시
        return { success: false, message: `${error} 서버 접속 실패!` };
      }
    },
    { success: false, message: '' } // 초기상태
  );

  return (
    <div>
      <h2>로그인</h2>
      <form action={formAction}>
        <div>
          <label htmlFor='userName'>
            아이디:
            <input id='userName' name='userName' type='text' placeholder='아이디를 입력하세요' disabled={isPending} required />
          </label>
        </div>

        <div>
          <label htmlFor='password'>
            비밀번호:
            <input id='password' name='password' type='password' placeholder='비밀번호를 입력하세요' disabled={isPending} required />
          </label>
        </div>

        <div>
          <button type='submit' disabled={isPending}>
            {isPending ? '로그인 중...' : '로그인'}
          </button>
          <button type='reset' disabled={isPending}>
            초기화
          </button>
        </div>
      </form>
      {/* 상태메세지 표시 */}
      {state.message && (
        <div>
          <p>{state.message}</p>
        </div>
      )}
    </div>
  );
}
