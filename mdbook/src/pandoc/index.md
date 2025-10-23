# pandoc

## 한글 문제 없이 pdf로 만들기 

**맑은 고딕** 사용
```ps 
pandoc cogo.md -o .\output.pdf --pdf-engine=xelatex -V mainfont='맑은 고딕'
```

**나눔고딕** 사용
```
pandoc -s -f markdown cogo.md -o output.pdf --pdf-engine=xelatex -V mainfont='나눔고딕' -V papersize=a4 -V fontsize=12pt -V geometry:margin=1.5cm
```

## docx로 만들기
```
pandoc -s -f markdown cogo.md -o output.docx --shift-heading-level-by=-1
```