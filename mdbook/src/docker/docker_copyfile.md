# local 파일을 docker로 보내기

```
docker cp . httpd:/usr/local/apache2/htdocs/js1
```

- `.` : 현재 폴더의 모든 파일을
- `httpd:` : httpd 란 이름의 컨테이너에
- `/usr/local/apache2/htdocs/js1` : 폴더에  
복사한다.

