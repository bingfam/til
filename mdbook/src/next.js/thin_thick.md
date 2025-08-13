# 오라클 연결할 때 thick, thin 연결

- thin 연결: 
- thick 연결: 오라클 클라이언트를 이용한 연결.

11g 같은 구형 버전은 thin 연결은 지원하지 않아 thick 연결로만 연결해야 함.

```
oracledb.initOracleClient({ libDir: 'D:\\app\\userid\\product\\12.2.0\\client_1' });
```

이렇게 local의 오라클 클라이언트의 위치를 설정해 줘야 함.