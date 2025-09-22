# Stable Diffusion

## 설치
```ps
PowerShell 7.5.3

PS E:\stable_diffusion> python --version
Python 3.10.11

PS E:\stable_diffusion> python -m pip install --upgrade pip
Requirement already satisfied: pip in c:\users\OOO\appdata\local\programs\python\python310\lib\site-packages (25.2)

PS E:\stable_diffusion> python -m venv venv

PS E:\stable_diffusion> .\venv\Scripts\activate

(venv) PS E:\stable_diffusion> git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui

(venv) PS E:\stable_diffusion> cd .\stable-diffusion-webui\

(venv) PS E:\stable_diffusion\stable-diffusion-webui> .\webui-user.bat
```

여기까지 하면 한참 설치한다. 설치가 끝나면 stable diffusion 창이 나온다.

## 내가 원하는 캐릭터 학습

https://hotorch.tistory.com/427 보고 진행함.

학습도구 설치

```ps
python -m pip install --upgrade pip

(venv) PS E:\stable_diffusion> git clone https://github.com/bmaltais/kohya_ss.git

(venv) PS E:\stable_diffusion> cd .\kohya_ss\

(venv) PS E:\stable_diffusion\kohya_ss> .\setup.bat
```

```ps

Kohya_ss setup menu:

1. Install kohya_ss GUI
2. (Optional) Install CuDNN files (to use the latest supported CuDNN version)
3. (DANGER) Install Triton 2.1.0 for Windows... only do it if you know you need it... might break training...
4. (Optional) Install specific version of bitsandbytes
5. (Optional) Manually configure Accelerate
6. (Optional) Launch Kohya_ss GUI in browser
7. Exit Setup

Select an option:
```

이렇게 나오면 1 번을 선택한다.

또 한참 설치한다.

```ps
Kohya_ss setup menu:

1. Install kohya_ss GUI
2. (Optional) Install CuDNN files (to use the latest supported CuDNN version)
3. (DANGER) Install Triton 2.1.0 for Windows... only do it if you know you need it... might break training...
4. (Optional) Install specific version of bitsandbytes
5. (Optional) Manually configure Accelerate
6. (Optional) Launch Kohya_ss GUI in browser
7. Exit Setup

Select an option:
```

2번을 선택해서 최신 CuDNN 파일을 설치한다.

다시 위와 같은 메뉴가 나오면 `6. (Optional) Launch Kohya_ss GUI in browser` 선택한다.

v25로 설명한 자료: 
[https://www.youtube.com/watch?v=wTVI0SONkpc](https://www.youtube.com/watch?v=wTVI0SONkpc)

