# podman 컨테이너 등 삭제 안될 때

windows terminal에 탭이 여러 개 있다보니 wsl용 linux 탭을 열어서 그 안에서 podman run을 해 컨테이너를 하나 만들었다. 컨테이너 이름은 postgres 이다.

그런데 이렇게 만들어진 건 윈도우에서 실행되고 있는 podman desktop에서는 보이지 않는다. 

CLI에서도 컨테이너가 확인이 안된다.

```ps
PS E:\> podman ps -a
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
PS E:\>
```

이 상태에서 같은 이름(postgres)으로 컨테이너를 생성하려 하면 에러가 난다.

```ps
[user@DESKTOP-89UD3IQ e]$ podman run -d --net mynet --ip 172.31.0.7 --name postgres -p 43432:5432 -p 43022:22 -e POSTGRES_PASSWORD=My:s3Cr3t/ -e TZ=Asia/Seoul docker.io/library/postgres:latest
WARN[0000] Using cgroups-v1 which is deprecated in favor of cgroups-v2 with Podman v5 and will be removed in a future version. Set environment variable `PODMAN_IGNORE_CGROUPSV1_WARNING` to hide this warning.

Error: creating container storage: the container name "postgres" is already in use by f1823105fcf1f9a60dc80c83f009730d513ec996ca4eba2ef928066648030565. You have to remove that container to be able to reuse that name: that name is already in use, or use --replace to instruct Podman to do so.
[user@DESKTOP-89UD3IQ e]$
PS E:\>
```


이걸 wsl 에서 똑같이 해보면, 

```ps
[user@DESKTOP-89UD3IQ ~]$ podman ps -a
WARN[0000] Using cgroups-v1 which is deprecated in favor of cgroups-v2 with Podman v5 and will be removed in a future version. Set environment variable `PODMAN_IGNORE_CGROUPSV1_WARNING` to hide this warning.
CONTAINER ID  IMAGE                              COMMAND     CREATED         STATUS                    PORTS                                           NAMES
f1823105fcf1  docker.io/library/postgres:latest  postgres    24 minutes ago  Exited (0) 292 years ago  0.0.0.0:43022->22/tcp, 0.0.0.0:43432->5432/tcp  postgres
```

이렇게 나온다. 이제 찾았으니 지울 수 있게 되었다.

모든 컨테이너를 다 중지하고, 

```ps
[user@DESKTOP-89UD3IQ ~]$ podman stop --all
WARN[0000] Using cgroups-v1 which is deprecated in favor of cgroups-v2 with Podman v5 and will be removed in a future version. Set environment variable `PODMAN_IGNORE_CGROUPSV1_WARNING` to hide this warning.
f1823105fcf1f9a60dc80c83f009730d513ec996ca4eba2ef928066648030565
[user@DESKTOP-89UD3IQ ~]$
```

모든 컨테이너를 다 삭제한다.
```ps
[user@DESKTOP-89UD3IQ ~]$ podman rm --all
WARN[0000] Using cgroups-v1 which is deprecated in favor of cgroups-v2 with Podman v5 and will be removed in a future version. Set environment variable `PODMAN_IGNORE_CGROUPSV1_WARNING` to hide this warning.
f1823105fcf1f9a60dc80c83f009730d513ec996ca4eba2ef928066648030565
[user@DESKTOP-89UD3IQ ~]$
```

다시 확인해 보면,
```ps
[user@DESKTOP-89UD3IQ ~]$ podman ps -a
WARN[0000] Using cgroups-v1 which is deprecated in favor of cgroups-v2 with Podman v5 and will be removed in a future version. Set environment variable `PODMAN_IGNORE_CGROUPSV1_WARNING` to hide this warning.
CONTAINER ID  IMAGE       COMMAND     CREATED     STATUS      PORTS       NAMES
[user@DESKTOP-89UD3IQ ~]$
```

깨끗해졌다. 이젠 wsl 들어가서 podman 명령 내리지 말아야지.
