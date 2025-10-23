# libre office

## libre office에서 export한 pdf 파일을 inDesign에서 읽지 못하는 문제

libre office에서 만든 문서를 inDesign에서 가져오기 하면 가져오기 에러가 나는 이유: libre office에서 이미지에 투명도를 설정해 줬기 때문.

## 윈도우에서 만든 자료를 macos에서 읽을 때 폰트가 바뀌는 이유

### os마다 설치된 폰트 이름이 다르다

cookie run 글꼴은 모양은 이쁘지만, 

같은 폰트를(지금 생각해 보니 정말 같은 파일인지는 정확치 않다) 윈도우와 macos에 설치하고 보면, 

윈도우에서는 cookie run bold 라는 글꼴이 따로 생성된다.
cookie run 이라는 글꼴은 없다.

- cookie run regular
- cookie run bold
- cookie run black

그런데 macos에서는 `cookie run` 이라는 글꼴만 설치된다.  
그리고 서체관리자에 가보면 글꼴 하나에 3개의 `스타일`(regular, bold, black)가 있다고 나온다. 

libre office에 가보면 이 3개의 스타일을 따로 사용할 수가 없다. 그냥 옵션에서 bold, regular 를 선택하도록 되어 있다. 제일 굵은 black.. 은 없다. 

pages 같은 macos 전용 프로그램은 스타일을 선택할 수 있는데, libre office mac 은 그런 선택이 없다. 

여튼 중요한 건 macos에는 cookie run이라는 글꼴만 있다는 거다. 

### 폰트 이름이 다른데서 오는 문제

윈도우에서 만든 파일에는 `cookie run bold` 라고 되어 있는데, 이걸 macos에서 읽으면 `cookie run bold`라는 글꼴은 없다는 문제가 발생한다. `cookie run`이라는 글꼴만 있으니까. 

libre office는 mac과 win 모두 western, asian 글꼴을 나눠서 관리하는데, 이상하게도 western은 이런 경우에도 제대로 표시해 주는데(win, mac 모두) asian 부분은 다른 글꼴로 대체해서 표시된다.

이 문제는 win에서 만든 문서를 mac에서 읽을 때도 발생하지만 그 반대의 경우에도 마찬가지로 발생한다.


### 해결 방법

#### 1안. Master Slide 사용

master slide는 그 페이지의 모양을 관할한다. 그리고 전체 페이지에 적용할 수도 있다. 

모든 페이지애 master slide를 적용해 놓고, 다른 OS에서 읽게 되면 전술한 글꼴 문제가 발생한다.그러니 master slide를 잘 적용해 놓았으면 master slide 에서 western, asian 폰트를 바꿔놓는 것으로 해결된다.

내 경우, 모든 cookie run 글꼴을 사용한 부분에서 `ctrl + shift + M`을 눌러서 `직접 설정한 서식 지우기` 를 하고 master slide 중 하나의 슬라이드를 클릭해서 해당 페이지에 그 master 서식을 적용해 줬다. 

OS를 바꿔 읽어야 할 때마다 이 작업을 해 주면 된다.


#### 2안. 글꼴 대체표 사용

위 1안의 master slide 적극 활용은 매우 중요하다. libre office에 글꼴 대체표가 있으니 이걸 사용해도 되더라. 

그런데 이 경우에도 cookie run bold 를 cookie run 이라고만 바꿀 수 있지, 이 대체에 bold 옵션을 따로 줄 수가 없다. 

2안은 완벽한 해결책은 되지 않는다.


#### 3안. cookie run 사용하지 않기

모든 글꼴이 다 그런지 확인은 안해봤는데(나눔고딕은 문제 없는 듯) cookie run은 가급적 쓰지 말자. 두 곳을 왔다갔다 하는 경우도 많으니.


#### 4안... 쓰면 안되는 방법

아마 폰트 내장도 생각할텐데, 해봤는데 안된다. 어차피  cookie run bold로 저장했는데 macos에서는 폰트 자체는 내장되어 있더라도 이름을 찾을 수 없기 때문이 아닌가 싶다. 

20메가 파일이 40메가가 되었지만 실제 해 보니 안되었다.


### 앞으로 할 일

- master slide의 적극적인 활용
- 글꼴 사용 전에 각 OS마다 글꼴 이름이 다른 글꼴은 아닌지 확인해서 안전 글꼴 list 만들고 그 글꼴만 사용하기


## 메이플스토리 글꼴을 다운로드 받아보면 글꼴이 2개야. 하나는 regular, 하나는 bold. 그런데 둘다 설치한 다음에 보면 글꼴 이름이 그냥 메이플스토리 하나만 있어. 이런 경우 내가 메이플스토리 글꼴에 bold 옵션을 주면 어떻게 돼?

**일반적인 경우, 글꼴이 하나의 이름으로 통합되어 설치되어 있다면, 프로그램에서 '볼드(Bold)' 옵션을 적용했을 때 실제로 설치된 'Bold' 서체 파일($\text{MapleStory Bold}$)을 사용하게 됩니다.**

이러한 방식은 글꼴 디자이너나 제작사에서 의도한 서체 사용 방법입니다.

1.  **통합된 글꼴 이름:** 운영체제나 응용 프로그램에서는 '메이플스토리'라는 하나의 이름으로 글꼴을 인식합니다.
2.  **스타일 연결:** 내부적으로는 이 하나의 글꼴 이름 아래 'Regular', 'Bold', 'Italic' 등의 **스타일(Style)이 연결**되어 있습니다.
3.  **옵션 적용 시:** 사용자가 텍스트를 선택하고 프로그램의 서식 도구(예: $\mathbf{B}$ 버튼)를 이용해 **'볼드' 옵션을 적용**하면, 해당 프로그램은 내부적으로 연결된 **실제 Bold 서체 파일**($\text{MapleStory Bold}$)을 불러와 텍스트에 적용합니다.

**만약 Bold 서체 파일이 없는데 Bold 옵션을 주면?**
Bold 서체 파일이 따로 제공되지 않은 글꼴의 경우, 프로그램이 **자동으로 글자를 굵게 처리(Fake Bold 또는 합성 볼드)** 하기도 하지만, 메이플스토리 글꼴처럼 'Regular'와 'Bold' 파일이 모두 제공되고 이름이 통합된 경우에는 **제공된 Bold 파일을 사용**합니다.


## macos와 windows에서 글꼴명이 다른 글꼴들
- 서울체(https://www.seoul.go.kr/seoul/font.do): 서울알림체만 확인함.

## macos와 windows에서 글꼴명이 같은 글꼴들
- [넥슨 메이플스토리](https://brand.nexon.com/ko/ci-brand-guidelines/typeface)   
macos에 설치할 때도 TTF 파일을 설치해야 한다. OTF로 설치하면 글꼴명이 `메이플스토리_OTF`가 된다.

