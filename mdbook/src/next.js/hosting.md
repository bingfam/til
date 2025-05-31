# 정적호스팅

![](../images/perplexity.png)
[https://www.perplexity.ai/search/typescript-next-jsro-aebeul-ma-fIcoQTKeSOKCMLtKldOdwQ](https://www.perplexity.ai/search/typescript-next-jsro-aebeul-ma-fIcoQTKeSOKCMLtKldOdwQ)

## github.io 같은 정적호스팅 서버에 올리기 위한 주의점

### next.js의 다음 기능들 사용 불가
- SSR
- API Route
- 동적 서버
- Server Component


### next.config.ts 파일 수정
nextConfig에, 

```
output: 'export'
```

추가. 이렇게 하면 `npm run build` 시 `out` 폴더가 생긴다. 이걸 github.io에 올리면 됨.