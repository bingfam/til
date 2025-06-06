# next.js

## 설치
- node.js를 설치한다.
- next.js는 따로 설치하지 않고 그냥 프로젝트를 설치하면 된다.
    ```
    npx create-next-app
    ```

## 실행
``` 
npm run dev
```

## node_modules 설치
.gitignore 파일을 보면 

/node_modules 

가 포함되어 있다.

그럼 관련된 패키지들은 git을 통해 공유가 되지 않는다는 건데, 다른 곳에서 clone한 사람들은 프로젝트와 관련된 패키지가 없다는 문제가 생긴다.

이 문제는 아주 간단하게 해결된다.

프로젝트 root 디렉토리에서 

```ps
npm install
```

을 하면, `package.json` 파일에서 `dependencies`와 `devDependencies` 섹션에서 모든 패키지를 찾아 node_modules 폴더를 생성하고 설치한다.


## https로 테스트
powershell을 관리자 모드로 실행하고, 프로젝트 루트에서 다음 실행.

```ps
npx next dev --experimental-https
```

## 포트번호 바꾸기
package.json 파일 수정

```json
"scripts": {
  "start": "next start -p 80"
}
```