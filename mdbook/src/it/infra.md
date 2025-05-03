# infra

## 특정 포트를 윈도우가 점유해서 쓸 수 없는 경우 해결법

윈도우가 일정 영역을 자기가 쓰기 위해 미리 예약해 두는데 가끔 8080이나 3000번을 예약해서 못 쓰게 되기도 한다. 


### 윈도우가 미리 예약해 놓은 포트들 확인

```
netsh interface ipv4 show excludedportrange protocol=tcp
```

<br/>

### 내가 쓸 포트는 목록에서 빼기

```
netsh int ipv4 delete excludedportrange protocol=tcp startport=54022 numberofports=100
```

<br/>

### 그냥 가장 쉬운 방법

```shell
net stop winnat
net start winnat
```

출처: [https://hiperzstudio.tistory.com/63](https://hiperzstudio.tistory.com/63)