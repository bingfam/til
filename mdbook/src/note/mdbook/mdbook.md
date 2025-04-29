# mdbook

## 기본 사용법
- 공식: https://rust-lang.github.io/mdBook/guide/installation.html  
- 블로그: https://piatoss3612.tistory.com/105



### 프로젝트 생성
```
mdbook init <프로젝트명>
```

### 프로젝트 실시간 보기
```
cd <프로젝트명>
mdbook serve --open
```

### 프로젝트 build
```
mdbook build
```
기본적으로 <프로젝트명>/build 디렉토리에 결과물이 저장된다.  
그래서 mdbook init을 통해 자체 생산되는(optional) .gitignore 파일을 보면 book 디렉토리가 git ignore 되도록 하고 있다.

### mdbook update
```
cargo install mdbook

...

Replaced package `mdbook v0.4.40` with `mdbook v0.4.43` (executable `mdbook.exe`)
```


### 한글 검색이 안됨.
한글 검색 되게 하려면

```
이런 작업$$task$$들은 식으로 영문도 옆에 적어두고 뭐 치환하라는데 장난하냐. 한글 검색 안 되어서 쓸모가 없어지네.