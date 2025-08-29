# logseq

## audio 파일 추가법

그냥 mp3 파일을 끌어다 놓으면 `![]()`의 형태가 되는데 logseq에서는 재생안된다. 길이가 00:00:00 로 계산된다.

방법 1

```md
[:audio {:controls true :src "https://www.xxx.xxx/xxx.mp3"}]
```

오디오 파일을 웹에 올려놓고 위와 같이 입력한다.

방법 2

로컬에 있는 파일은 상대경로로 참조가 안된다. 절대경로로 잡아줘야 한다.

```md
[:audio {:controls true :src "d:\\test\\xxx.mp3"}]
```

```md
[:audio {:controls true :src "d:/test/xxx.mp3"}]
```

그리고 m4a 파일은 지원하지 않는다.