# nextauth 튜토리얼

- next.js 버전: 15.3.52
- nextauth 버전 4.24.11
- postgresql 버전: 17.4
- pg 라이브러리 버전: 8.15.6
- 작성: 2025. 5. 8.


## DB 설정
```sql
-- user 생성은 생략

root@31dfb447326c:/# su - postgres


postgres@31dfb447326c:~$ psql 
psql (17.4 (Debian 17.4-1.pgdg120+2))
Type "help" for help.


postgres=# create database nextauth owner scott;
CREATE DATABASE


postgres=# exit


postgres@31dfb447326c:~$ psql -U scott -d nextauth
psql (17.4 (Debian 17.4-1.pgdg120+2))
Type "help" for help.


nextauth=> create table member
(
    id varchar(10) primary key
    , nickname varchar(10) not null
    , pwd varchar(62) not null
    , email varchar(100)
);
CREATE TABLE


-- member 하나 추가
nextauth=> insert into member(id, nickname, pwd, email) values 
('user01', 'nickname01', crypt('1234', gen_salt('bf')), 'test@gmail.com');
INSERT 0 1


-- crypt extension 생성. 로그인 위해
nextauth=> create extension pgcrypto;
CREATE EXTENSION


-- data 테이블 추가하고 데이터 2개 추가. session 테스트 위해.
nextauth=> create table data (id int primary key, title varchar(100) not null);
CREATE TABLE
nextauth=> insert into data (id, title) values (1, 'about next.js');
INSERT 0 1
nextauth=> insert into data (id, title) values (2, 'about react');
INSERT 0 1
```





## next.js 프로젝트 생성

### 프로젝트 생성
```ps
npx create-next-app
√ What is your project named? ... nextauth
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in D:\test\nextauth001\src\nextauth.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc


added 436 packages, and audited 437 packages in 54s

165 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created nextauth at D:\test\nextauth001\src\nextauth
```

### nextauth.js 설치
```ps
PS D:\test\nextauth001\src\nextauth> npm install next-auth

added 14 packages, and audited 451 packages in 9s

169 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

PS D:\test\nextauth001\src\nextauth> npm list next-auth
nextauth@0.1.0 D:\github_stuousk\nextauth001\src\nextauth
└── next-auth@4.24.11
```

### pg 패키지 설치
```ps
PS D:\test\nextauth001\src\nextauth> npm install pg

added 14 packages, and audited 465 packages in 3s

169 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\test\nextauth001\src\nextauth> npm list pg
nextauth@0.1.0 D:\test\nextauth001\src\nextauth
└─┬ pg@8.15.6
  └─┬ pg-pool@3.9.6
    └── pg@8.15.6 deduped

PS D:\test\nextauth001\src\nextauth> npm install --save @types/pg

added 9 packages, and audited 474 packages in 2s

169 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## next.js에서 pg 접속


## nextauth를 이용한 로그인
app/api/auth/[...nextauth]/route.ts 파일 생성
