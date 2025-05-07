# docker 이미지를 podman에서 사용

## docker 이미지를 podman에서 사용하는 방법

1. podman을 종료한다.
2. docker를 실행한다.
3. powershell에서 docker 이미지를 저장한다.
    ```ps
    docker save -o image.tar <이미지이름:태그>
    ```

4. image.tar 파일을 안전한 다른 곳(예: d:\podman)으로 이동한다.
5. 파일을 이동한 곳(d:\podman)으로 cd 한다.
6. docker를 종료한다.
7. podman을 실행한다.
8. podman에서 이미지를 load한다.
    ```ps
    PS D:\podman> podman load -i .\image.tar
    ```
