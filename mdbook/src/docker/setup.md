# docker 환경설정

## 여러 대의 서버를 하나의 네트워크에 놓고 서버마다 IP 정해줄 때(postgresql)

### 네트워크 생성(네트워크 이름: mynet)

```
# docker network create --subnet=172.30.0.0/16 mynet 
```

### 컨테이너 생성하면서 ip 주기
```
docker run -d --net mynet --ip 172.30.0.7 --name postgres -p 43432:5432 -p 43022:22 -e POSTGRES_PASSWORD=My:s3Cr3t/ -e TZ=Asia/Seoul ubuntu/postgres:latest
```

### 네트워크 생성없이, IP없이 컨테이너 생성할 때
```
docker run -d --name postgres -p 43432:5432 -p 43022:22 -e POSTGRES_PASSWORD=My:s3Cr3t/ -e TZ=Asia/Seoul postgres
```


## webserver
```
docker run -dit --net mynet --ip 172.30.0.5 --name httpd -p 41080:80 -p 41022:22 -e TZ=Asia/Seoul httpd
```

## tomcat
```
 docker run -dit --privileged --net mynet --ip 172.30.0.6 --name tomcat -p 42888:8080 -p 42022:22 -e TZ=Asia/Seoul tomcat:9.0
 ```