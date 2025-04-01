# infra

## 특정 포트를 윈도우가 점유해서 쓸 수 없는 경우 해결법

윈도우가 일정 영역을 자기가 쓰기 위해 미리 예약해 두는데 가끔 8080이나 3000번을 예약해서 못 쓰게 되기도 한다. 이럴 때 해결하는 가장 쉬운 방법

```shell
net stop winnat
net start winnat
```


출처: https://hiperzstudio.tistory.com/63