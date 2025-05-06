# 팟캐스트

## 팟캐스트 릴리즈
github pages를 이용해 릴리즈 하는 경우 많다 함.

<br />

## rss.xml

### mdbook으로 rss를 생성하는 방법

#### 1. `mdbook-rss` 설치
```
cargo install mdbook-rss
```

#### 2. markdown 파일 위에 메타데이터 추가
```
---
title: "에피소드 제목"
pub_date: "2024-05-06"
author: "저자 이름"
url: "https://example.com/episode-url"
description: "에피소드 설명"
---
```

#### 3. book.toml 파일에 mdbook-rss를 프리프로세서로 추가    

#### 4. mdbook build 하면 bool\rss.xml 파일이 생성됨.