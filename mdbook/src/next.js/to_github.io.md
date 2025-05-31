# github.io에서 호스팅

github.io는 static hosting이기 때문에(node.js가 없음) 몇 가지 주의할 점이 있다.

## next.js로 앱 만들 때 github.io에 올리려면 주의할 점

### 프로젝트 생성 시: app route 사용 불가. 
app route는 node.js의 도움을 받는다.  
그래서 프로젝트 생성할 때 **pages route** 방식을 선택해야 한다.


### 컴퍼넌트 생성 시: server component 사용 불가
무조건 client component로만 만들어야 한다.  
'use client';


### 설정 변경

#### export로 build
빌드 방식을 export 방식으로 변경해야 한다.  
next.config.ts 파일을 수정한다.

```ts
const nextConfig: NextConfig = {
  output: "export",  
};
```

이렇게 하면 node.js 없이 index.html 부터 시작하는 build 결과를 얻을 수 있고, static web hosting에 올려 사용할 수 있다.

#### 이미지 최적화 비활성화
이미지 최적화를 하려면 next.config.ts 파일에 뭔가 작업해 줘야 하는데 일단 아래와 같이 처리.

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },  
};
```

#### 기본 경로 설정
github.io는 기본적으로 

`사용자명.github.io/프로젝트명` 의 경로를 가진다.

예를 들면 `hong.github.io/myapp` 과 같은 식이다. 

그냥 두면 이거 폴더를 제대로 인식 못하는 문제가 생긴다. 그래서 아래와 같이 basePath를 설정해 줘야 한다.


```ts
const nextConfig: NextConfig = {
  output: "export",  
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },  
  basePath: "/프로젝트명",  // basePath: "/myapp"
};
```

### _next 폴더 밑의 경로를 인식하지 못하는 문제 해결
package.json 파일을 이용해 `.nojekyll` 파일을 생성해 준다.

```json
"scripts": {
    ...
    "build": "next build && type nul > out/.nojekyll",   
    ...
  },
```  

원래 `next build` 만 있었는데  `&& type nul > out/.nojekyll` 을 추가해 준 거


###  build 한 앱 테스트하기
```ps
 ✓ Starting...
[Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.]
```
이런 에러가 나온다. 그래서 

`npx serve@latest out` 을 하면 아래와 같이 serve 패키지를 설치하고 실행해 준다.

```ps
PS E:\github-panboy75\allflix0\src\nextjs\allflix> npx serve@latest out
Need to install the following packages:
serve@14.2.4
Ok to proceed? (y) y


   ┌─────────────────────────────────────────┐
   │                                         │
   │   Serving!                              │
   │                                         │
   │   - Local:    http://localhost:3000     │
   │   - Network:  http://172.25.16.1:3000   │
   │                                         │
   │   Copied local address to clipboard!    │
   │                                         │
   └─────────────────────────────────────────┘
```   

여기까지 오면 `http://localhost:3000`에 접속했을 때 다시 처음처럼 경로 문제를 보게 된다. 이유는 여태 우리의 설정은 /allflix 라는 basePath를 기반으로 하도록 했는데 나의 local에서는 이에 대한 처리를 하지 않았기 때문이다. 그러니까 github.io와 local의 경로가 달라서다. 

이제 `next.config.ts` 파일에 다음 문구를 추가한다. build 된 앱이 저장되는 경로를 프로젝트 이름으로 바꿔서 github.io에 맞게 바꿔주는 거다.

```ts
distDir: 'out/allflix',
```

그리고 test 할 때

```ps
npx serve@latest out
```

로 하고 `http://localhost:3000/allflix`로 접속하면 github.io와 환경이 똑같아진다.

build 되는 위치가 바뀌었으니 `package.json` 파일에서 `.nojekyll` 파일의 생성위치도 바꿔줘야 한다. 

```json
"scripts": {
    ...
    "build": "next build && type nul > out/allflix/.nojekyll",
    ...
  },
```  

git 에 올릴 때는 `out/allflix` 폴더 안의 파일이 `docs` 폴더 안에 저장되도록 해야 한다.


### 여기까지 한 후 이미지 문제 해결

이제 이미지 문제를 해결해야 한다. 

next.js에서는 내가 가지고 있는 이미지 a.svg 파일을 사용하기 위해서는 

그 파일을 `public/a.svg` 에 두거나 `public/images/a.svg` 와 같은 식으로 파일을 저장해 두는데, 보통은 `public/images/a.svg`와 같이 저장한다.

이걸 사용하려면 컴퍼넌트의 return 문 안에서

```tsx
<Image src='/images/play.svg' />
```

와 같이 쓴다. 이렇게 되면 여태 우리가 했던 /allflix/images 와 어긋나기 때문에 또 문제가 된다.

```tsx
<Image src='images/play.svg' />
```

해도 역시 문제는 해결되지 않는다. 가장 쉬운 해결방법은 

```tsx
<Image src='/allflix/images/play.svg' />
```

이지만 아무도 이렇게 하지 않을거다. 이 문제는 .env 환경설정파일로 다시 정리하자.

(.env는 git에 올리고, .env.local은 git에 올리지 않는다)

프로젝트 루트 폴더에 `.env` 파일을 생성하고 다음과 같이 적는다.

client component에서 사용하려면 반드시 `NEXT_PUBLIC_` prefix 를 지켜야 한다. 

```
NEXT_PUBLIC_BASEPATH=/allflix
```

그리고 `next.config.ts` 파일도 수정한다.

```ts
basePath: process.env.NEXT_PUBLIC_BASEPATH,
distDir: 'out' + process.env.NEXT_PUBLIC_BASEPATH,
```

`+ 연산자`가 먹다니 신기.

그래서 최종 `next.config.ts` 파일의 내용은 다음과 같다.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  
  basePath: process.env.NEXT_PUBLIC_BASEPATH,
  distDir: 'out' + process.env.NEXT_PUBLIC_BASEPATH,
  //assetPrefix: './',  ,
  reactStrictMode: true,
  images: {
    unoptimized: true, // 이미지 최적화 비활성화
  },
};

export default nextConfig;
```

이제 component 안의 이미지 부분도 고치자.

```tsx
<Image src={`${process.env.NEXT_PUBLIC_BASEPATH}/images/play.svg`} />
```

### basePath 를 설정한 경우 favicon.ico 문제

```ps
 HTTP  2025. 5. 25. 오후 1:50:56 ::1 GET /favicon.ico
 HTTP  2025. 5. 25. 오후 1:50:56 ::1 Returned 404 in 1 ms
 ```
 
 basePath를 설정하면 로그가 이렇게 나온다. basePath를 무시하고 /favicon.ico 파일을 읽으려고 해서 나오는 에러다.

 pages router를 사용하니 _document.tsx 파일을 다음과 같이 수정한다.
 ```tsx
<Head>
    <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASEPATH}/favicon.ico`} />
</Head>
```

이제 다 좋아졌다.