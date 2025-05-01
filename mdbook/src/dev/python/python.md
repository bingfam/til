# python

## uv

- 공식 홈페이지: [https://github.com/astral-sh/uv](https://github.com/astral-sh/uv)
- 잘 정리한 글: [https://www.0x00.kr/development/python/python-uv-simple-usage-and-example](https://www.0x00.kr/development/python/python-uv-simple-usage-and-example)

### 특징
- rust로 만들어 굉장히 빠름
- 패키지 관리자.  
- 프로젝트 관리자  
- 가상환경 관리자


### 가상환경
uv는 기본적으로 가상환경을 만들어준다. 프로젝트 생성(init)한다고 자동으로 가상환경을 만들어 주지는 않는데, `uv add <package 이름>`을 하면 자동으로 가상환경을 만들어 주고(.venv 폴더가 생긴다) 그 가상환경에 최신 버전의 파이썬을 설치해 준다. 굳이 `uv venv .venv` 하지 않아도 됨.

결국 프로젝트 하나마다 가상환경 하나씩 만드는 것. visual studio에서 사용하는 방법과 같다. 나는 이게 훨씬 편한 거 같다. 하드디스크는 많이 차지하지.

수동으로 가상환경 설정하는 방법있으나 굳이 여기 적지 않겠음.



### 프로젝트 생성

```
uv init <프로젝트명>
```

### 프로그램 실행
```
uv run <python 파일명>
```

<br />

### 패키지 관리

#### 패키지 추가
```
uv add <패키지명>
```

#### 실행형 패키지 실행
```
uv run <패키지명>
```

#### 패키지 목록
```
uv pip list
```

#### uv 가상환경에 파이썬 특정 버전 설치
최신버전의 파이썬을 사용할 거면 자동으로 되니 굳이 할 필요없다.

```
uv python install <파이썬 버전>
uv python install 3.13.3
```





## exe 파일로 만들기
`PyInstaller`로 실행 파일 만들 수 있다.

```
[pip]
pip install pyinstaller

[uv]
uv add pyinstaller
```

### 실행파일 생성

```
[pip로 설치한 경우]
pyinstaller --onefile <python 파일명>

[uv로 설치한 경우]
uv run pyinstaller --onefile <python 파일명>
```

- `--onefile` 은 하나의 실행파일로 만들라는 옵션.
- 결과물은 `dist\` 디렉토리에 생성됨
