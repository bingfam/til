# build한 앱은 console.log 안 찍히게

## [vite-plugin-remove-console](https://www.npmjs.com/package/vite-plugin-remove-console) 플러그인 사용

**설치**

```
npm install vite-plugin-remove-console -D
```


**vite.config.ts 파일 수정**
```ts
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
  plugins: [
    removeConsole(),
  ],
})
```

이렇게 하면 로그가 남지 않음