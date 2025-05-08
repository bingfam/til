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

## podman에서 이미지 pull 할 수 없는 문제 해결
위와 같이 docker에서 이미지를 다운로드 받아 사용하려 헀던 이유는 이제보니 podman과 연결된 wsl에서 인터넷이 안되었기 때문이었음. 

docker는 윈도우 자체에서 이미지를 다운로드 받는데, podman은 wsl에서 이미지를 다운로드 받는 형식인가봄. 

그래서 podman과 연결된 vm에서 인터넷이 안되었기 때문에 pull image가 아예 안되었던 것. 권한 문제인줄 알고 github 등에 다 로그인 했으나 그 문제가 아니었음. 어쩐지 계속 io time out 이 나오더라.

해결방법은 [여기](../wsl/wsl.md)에.