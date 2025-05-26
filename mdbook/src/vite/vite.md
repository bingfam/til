# vite
vue 만든 사람이 만듦.

CRA의 대안

react 개발용 엔진으로, 개발할 때만 node.js가 필요하고 build 결과는 static 으로 나옴.

## 프로젝트 생성
```ps
npm create vite@latest
```

```ps
PS D:\test\vite> npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  vite001
│
```

다양한 프레임워크를 지원한다.
```ps
◆  Select a framework:
│  ● Vanilla
│  ○ Vue
│  ○ React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
```


```ps
Select a variant:
│  ● TypeScript
│  ○ TypeScript + SWC
│  ○ JavaScript
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
└
```


전체
```ps
PS D:\test\vite> npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  vite001
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Scaffolding project in D:\test\vite\vite001...
│
└  Done. Now run:

  cd vite001
  npm install
  npm run dev

PS D:\test\vite>
```


## github.io에 올리기

`vite.config.ts` 파일에 `base` 항목을 넣어야 한다. 프로젝트명을 넣어줘야 문제없이 동작한다.

예를 들어, 

`username.github.io/PROJECTNAME` 과 같은 식이라면 

```ts
export default defineConfig({
  base: '/PROJECTNAME/',
  plugins: [
    react()
    , tailwindcss() // Tailwind CSS 플러그인 추가
  ],
})
```
와 같이 넣어준다.

이게 실제 웹서버에서 어떻게 보일지 보려면, 

```ps
npm run preview
```

하면 
```ps

> vite001@0.0.0 preview
> vite preview

  ➜  Local:   http://localhost:4173/PROJECTNAME/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

과 같이 서브폴더까지 맞춰서 실행해준다. 그래서 웹서버에서 어떻게 보일지 최대한 가늠해 볼 수 있다.