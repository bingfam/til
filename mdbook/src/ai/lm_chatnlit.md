# LM Studio & chainlit

## 파이썬 설치

** 아래 미니콘다 방식은 uv 로 바꿈
## miniconda로 환경설정

### 새 환경 만들기
```
conda create -n ai
```

### 새로 만든 환경 활성화
```PS
conda activate ai
```


## chainlit 설치
```PS
pip install openai chainlit
```


**참고자료**
[![](https://img.youtube.com/vi/dBSYt-vuEmA/0.jpg)](https://www.youtube.com/watch?v=dBSYt-vuEmA)


**pip 를 아래와 같이 uv 방식으로 바꿈. 이제 이 아래부터가 새로 정리한 처음임.**

## 프로젝트 폴더 만들고 프로젝트 생성
```PS
e:\test\lmstudio
```

이 폴더에서 powershell 띄우고 아래의 방법으로 프로젝트 생성

```PS
PS E:\test\lmstudio> uv init lm001
```


### 새 환경 만들고 파이썬 설치
```PS
PS E:\test\lmstudio> cd lm001

PS E:\test\lmstudio\lm001> uv venv --python 3.12.3
```

결과
```PS
Using CPython 3.12.3
Creating virtual environment at: .venv
Activate with: .venv\Scripts\activate
```


### 필요한 패키지 설치: chainlit을 쓰기 위한 준비
```PS
PS E:\test\lmstudio\lm001> uv add requests openai chainlit
```

### 파일 다운로드: app.py
[https://github.com/Zenulous/local-ai-mcp-chainlit/blob/main/app.py](https://github.com/Zenulous/local-ai-mcp-chainlit/blob/main/app.py)

위 파일을 다운로드 받아

`E:\test\lmstudio\lm001\app.py` 

로 저장한다.


### chainlit 실행
```PS
PS E:\test\lmstudio\lm001> uv run chainlit run app.py
```

![](img/20250429020157.png)


## LM Studio 실행

### LLM 다운로드: gemma-3-4B-it-qat-GGUF
![](img/20250429020617.png)

다운로드받은 모델을 로드한다.


### 서버 실행

![](img/20250429020953.png)

왼쪽 위 빨간 표시한 것처럼 `Status stopped` 오른쪽을 클릭해 `Status: Running` 부분의 오른쪽이 초록색이 되도록 만들면 localhost:1234로 서버가 실행된다.

다시 chainlit으로 가서 

`hi`라고 쳐본다.

![](img/20250429021115.png) 연결이 되면 이렇게 답이 나오고 밑에 모델명도 나온다(Used gemma-3-4b-it-qat 라고) 

만약 lm studio에서 서버를 실행하지 않았다면 아래와 같이 Connection Error라고 나온다.

![](img/20250429021305.png)

`gemma-3-4b-it-qat`는 반응속도가 굉장히 빠르다.

