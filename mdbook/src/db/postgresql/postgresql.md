# postgresql

## 사용법

docker에 postgresql을 실행한 다음임.

### 유저 생성

```sql
# su - postgres
postgres@963e6c43fae6:~$ psql    
psql (17.4 (Debian 17.4-1.pgdg120+2))
Type "help" for help.

postgres=# create user scott password 'tiger';
CREATE ROLE
```


### 생성된 유저 보기
```
postgres=# \du
                             List of roles
 Role name |                         Attributes                         
-----------+------------------------------------------------------------
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS
 scott     |
 ```


### 데이터베이스 생성
```sql
postgres=# create database test owner scott;
CREATE DATABASE
```


### scott으로 접속하기
```sql
postgres=# exit
postgres@963e6c43fae6:~$ psql -U scott test
psql (17.4 (Debian 17.4-1.pgdg120+2))
Type "help" for help.

test=> 