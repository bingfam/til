# build 버전에서는 console.log 안 보이게

next.config.ts 파일을 다음과 같이 수정한다.

```ts
const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
};
```

이렇게 하면 `npm run dev` 할 때는 브라우저에서 console.log 의 내용이 보이고, `npm run start` 하면 보이지 않게 된다.