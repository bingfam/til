# mkdocs

## nav에서 섹션을 클릭했을 때도 문서가 열리도록

theme features에 
navigation.indexes하면 된다.

## theme 디자인 건들지 않고 수정

이거 보고 함. material theme github.
https://squidfunk.github.io/mkdocs-material/customization/#additional-css

mkdocs는 theme의 css도 수정할 수 있게 했다.  
style.css 파일이 theme의 css를 customizing 하고 있다.  

**mkdocs.yml 파일**

```yaml
theme: 
  name: material

extra_css:
  - style.css
```

이렇게 수정하고, docs 폴더에 style.css 파일을 두면 된다.

<br>

**style.css 파일**

```css
@font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 400;
    src: url(./fonts/NanumGothic/NanumGothic-Regular.eot);
    src: url(./fonts/NanumGothic/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
         url(./fonts/NanumGothic/NanumGothic-Regular.woff2) format('woff2'),
         url(./fonts/NanumGothic/NanumGothic-Regular.woff) format('woff'),
         url(./fonts/NanumGothic/NanumGothic-Regular.ttf) format('truetype');
}

@font-face {
    font-family: 'Nanum Gothic Bold';
    font-style: normal;
    font-weight: 700;
    src: url(./fonts/NanumGothic/NanumGothic-Bold.eot);
    src: url(./fonts/NanumGothic/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
         url(./fonts/NanumGothic/NanumGothic-Bold.woff2) format('woff2'),
         url(./fonts/NanumGothic/NanumGothic-Bold.woff) format('woff'),
         url(./fonts/NanumGothic/NanumGothic-Bold.ttf) format('truetype');
}

@font-face {
    font-family: 'Nanum Gothic exBold';
    font-style: normal;
    font-weight: 800;
    src: url(./fonts/NanumGothic/NanumGothic-ExtraBold.eot);
    src: url(./fonts/NanumGothic/NanumGothic-ExtraBold.eot?#iefix) format('embedded-opentype'),
         url(./fonts/NanumGothic/NanumGothic-ExtraBold.woff2) format('woff2'),
         url(./fonts/NanumGothic/NanumGothic-ExtraBold.woff) format('woff'),
         url(./fonts/NanumGothic/NanumGothic-ExtraBold.ttf) format('truetype');
  }

@font-face {
    font-family: 'JalnanGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
}


h1
{
    font-family: 'Nanum Gothic exBold';    
    /*font-size: large;*/
    /*color: red;*/
    font-weight:bolder;

}

h2
{
    font-family: 'Nanum Gothic exBold';        
    /*color: red;*/
    font-weight:bolder;

}

h3
{
    font-family: 'Nanum Gothic exBold';
    /*color: green;*/
    font-weight: bolder;
    
}

p
{
    font-family: 'Nanum Gothic', sans-serif;    
    font-weight:400;
}
```

![](img/20241220222412.png)

h1은 아마도 색을 미리 정해 놓았나보다. 맨 위가 h1인데 css로는 글자색을 바꿀 수 없음. 폰트만 바꿀 수 있다.
h2, h3를 전부 나눔고딕 extra bold로 해 놓았는데 잘 되고 있다.