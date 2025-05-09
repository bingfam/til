# next-auth

좋은 자료: [https://mycodings.fly.dev/blog/2023-05-31-nextjs-nextauth-tutorial-1-setup](https://mycodings.fly.dev/blog/2023-05-31-nextjs-nextauth-tutorial-1-setup)

지금은 auth.js로 이름을 바꾸었다.

## next-auth 설치
```
npm install next-auth
```

## /app/auth/[...nextauth]/route.ts
next-auth는 이 파일을 중심으로 돌아간다. 로그인 방법, 로그인 버튼의 위치, 로그인 성공 시 이후 절차 같은 것들이 여기에 기술된다. 

### 로그인 방법

#### credentials
아이디, 패스워드로 인증하는 방법. 인증에 필요한 항목(예: 아이디, 패스워드)를 정해주면 기본폼으로 로그인 페이지를 만들어준다. 물론 이걸 쓰는 사람은 없을 듯. 로그인 페이지는 커스터마이징이 가능하다.


### sns
google id, facebook id 로 로그인하는 방법 제공. 아직 해 본 적 없음.


## 로그인/로그아웃 버튼

```ts
import { signIn, signOut, useSession } from "next-auth/react";

return(
<span onClick={() => signIn()}>로그인</span>
);
```

버튼을 클릭하면 next-auth/react의 `signIn()` 함수를 호출한다. 이렇게 되면 next-auth에서 제공하는 기본 로그인 폼이 나타난다.

로그아웃할 때는 `signOut()` 함수를 호출하면 된다. next-auth가 로그아웃에 필요한 처리(세션값을 삭제.. 까지만 확인함)를 해 준다.


## 로그인 절차

next-auth를 이용해 로그인하면 세션에 값이 자동으로 들어가는 등 상당히 많은 부분들이 자동화된다.

로그인은 authorize()함수 내에서 처리된다.

이 함수에서 뭔가 자료를 리턴하면 로그인된거고, null을 리턴하면 로그인에 실패한거다.

그러니 이 authorize() 함수 내에서 아이디와 비밀번호로 DB 검색을 하고 그 결과를 담은 user 객체를 리턴하면 로그인이 일단 끝난다.

이렇게 리턴된 user 객체는 callback에서 처리된다.

### callbacks

next-auth는 로그인에서 2개의 callback을 제공한다.

#### jwt() 콜백 함수

JWT가 생성되거나 업데이트될 때 실행되는데, authorize() 함수에서 값이 리턴되면 바로 JWT를 만들기 때문에 이 콜백함수도 실행된다.

2개의 파라미터를 받는다. token, user 를 받는데,  
authorize() 함수에서 로그인 성공 시 리턴된 user 객체가 user 파라미터로 넘어온다.

```ts
console.log("[jwt] user = ", user);
```

결과
```
[jwt] user =  {
  id: 'A10001',
  nickname: '교육생 1',
  role_cd: 11
}
```

이 값을 전부 token에 넣어주면, user 객체의 값과 jwt 값이 token 안에 다 들어가 세션을 유지하는데 사용할 수 있게 된다.

```ts
callbacks: {
    jwt({ token, user }) 
    {
      if (user) 
      {
        token.id = user.id;
        token.nickname = user.nickname;                
        token.role_cd = user.role_cd;
      }
      
      return token;
    },
```    
token의 type을 바꾸지 않아도 저렇게 잘 된다.


이렇게 하면 다음과 같이 token 값이 나온다. jti 등의 항목이 자동으로 추가되어 있다.
```
[jwt] token =  {
  sub: 'A10001',
  id: 'A10001',
  nickname: '교육생 1',
  role_cd: 11,
  iat: 1746703602,
  exp: 1749295602,
  jti: '241f89fd-2e2a-424e-bab8-OOXOOXOXOX'
}

[jwt] user =  undefined
```

가만 보면 jwt()가 두 번 호출 되는데, 처음엔 user값이 있는 채로, 두 번째는 user 값이 없는 채로 들어온다.

이렇게 jwt() 콜백을 통해 token에 값을 채워 넣으면 이 token 값이 세션에 계속 유지된다.

여기서 리턴하는 token 값이 JWT 객체이다.


#### session() 콜백 함수

session() 콜백 함수는 로그인할 때는 상관이 없다가 사용자가 세션값을 달라고 하면 그 때 이 session() 함수가 실행된다.

세션값을 달라고 하는 때는 클라이언트 컴퍼넌트가 useSession hook을 사용하거나 server 컴퍼넌트가 getServerSession() 함수를 호출할 때이다.

그래서 그 때마다 session.user 에 값을 채워준다.

```ts
async session({ session, token }) 
    {   
      session.user = {
        id : token.id as string,
        nickname: token.nickname as string,
        role_cd: token.role_cd as number
      };

      console.log("[session] session.user = ", session.user);
      
      return session;
    },
  },
```

위 log의 결과는 다음과 같다.

```ts
[session] session.user =  {
  id: 'A10001',
  nickname: '교육생 1',
  role_cd: 11
}
 ```

jwt() 콜백 함수에서 챙겨놨던 token의 값을 session() 콜백 함수에서 사용하는 모습이다. 

처음에 user 의 값은 `undefined`이다. 여기에 token의 값을 채워 사용하는 것이다. 

이렇게 하는 이유는 보안때문이다. token에는 중요한 많은 값들을 보관하고, 화면에 보여지는 값들(만) session.user에 복사해 넣어 사용한다.