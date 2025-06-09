# rockylinux

## podman에서 설치
### 이미지는 rockylinux:9로 검색해서 설치

```ps
PS C:\Users\test> podman search rockylinux:9
NAME                                   DESCRIPTION
docker.io/rockylinux/rockylinux
docker.io/library/rockylinux           The official build of Rocky Linux.
docker.io/rockylinux/rocky-toolbox     Toolbox image for Rocky Linux - https://gith...
```

### pull 이미지 

```ps
PS C:\Users\test> podman pull rockylinux:9
Trying to pull docker.io/library/rockylinux:9...
Getting image source signatures
Copying blob sha256:446f83f14b236772583d069e6f46a75e7e5456add656d1415a452618189fb825
Copying config sha256:9cc24f05f309508aa852967ab1e3b582b302afc92605c24ce27715c683acd805
Writing manifest to image destination
9cc24f05f309508aa852967ab1e3b582b302afc92605c24ce27715c683acd805
```


### 포트설정
 - 23000:3000 
 - 20080:80
 - 20443:443 
 - 25432:5432
 - 20022:22


## node.js 설치
podman에 이미지 설치해 사용한 후의 기록

### 일단 업데이트한다.
```bash
dnf update -y
```

### 제공되는 node.js 목록을 본다
```bash
[root@d8d8565ea203 /]# dnf module list nodejs
Last metadata expiration check: 0:01:55 ago on Sun Jun  8 11:24:17 2025.
AlmaLinux 9 - AppStream
Name                             Stream                           Profiles                                                        Summary                                    
nodejs                           18                               common [d], development, minimal, s2i                           Javascript runtime                         
nodejs                           20                               common [d], development, minimal, s2i                           Javascript runtime                         
nodejs                           22                               common [d], development, minimal, s2i                           Javascript runtime                         

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
[root@d8d8565ea203 /]# 
```

### 22 버전을 사용하겠다고 표시한다.
```bash
[root@d8d8565ea203 /]# dnf module -y enable nodejs:22
Last metadata expiration check: 0:03:01 ago on Sun Jun  8 11:24:17 2025.
Dependencies resolved.
=============================================================================================================================================================================
 Package                                  Architecture                            Version                                     Repository                                Size
=============================================================================================================================================================================
Enabling module streams:
 nodejs                                                                           22                                                                                        

Transaction Summary
=============================================================================================================================================================================

Complete!
[root@d8d8565ea203 /]# 
```


### 22를 설치하겠다고 설정되었는지 확인한다.
```bash
[root@d8d8565ea203 /]# dnf module list nodejs
Last metadata expiration check: 0:03:58 ago on Sun Jun  8 11:24:17 2025.
AlmaLinux 9 - AppStream
Name                             Stream                           Profiles                                                        Summary                                    
nodejs                           18                               common [d], development, minimal, s2i                           Javascript runtime                         
nodejs                           20                               common [d], development, minimal, s2i                           Javascript runtime                         
nodejs                           22 [e]                           common [d], development, minimal, s2i                           Javascript runtime                         

Hint: [d]efault, [e]nabled, [x]disabled, [i]nstalled
[root@d8d8565ea203 /]# 
```

22 버전 옆에 [e]라고 표시된 것을 볼 수 있다.

### 이제 실제로 설치하자.

```bash
[root@d8d8565ea203 /]# dnf -y install nodejs
Last metadata expiration check: 0:04:58 ago on Sun Jun  8 11:24:17 2025.
Dependencies resolved.
=============================================================================================================================================================================
 Package                                 Architecture                  Version                                                        Repository                        Size
=============================================================================================================================================================================
Installing:
 nodejs                                  x86_64                        1:22.16.0-1.module_el9.6.0+170+f035de78                        appstream                        1.9 M
Installing dependencies:
 libbrotli                               x86_64                        1.0.9-7.el9_5                                                  baseos                           312 k
 nodejs-libs                             x86_64                        1:22.16.0-1.module_el9.6.0+170+f035de78                        appstream                         21 M
Installing weak dependencies:
 nodejs-docs                             noarch                        1:22.16.0-1.module_el9.6.0+170+f035de78                        appstream                        8.8 M
 nodejs-full-i18n                        x86_64                        1:22.16.0-1.module_el9.6.0+170+f035de78                        appstream                        8.6 M

Transaction Summary
=============================================================================================================================================================================
Install  5 Packages

Total download size: 40 M
Installed size: 216 M
Downloading Packages:
(1/5): nodejs-22.16.0-1.module_el9.6.0+170+f035de78.x86_64.rpm                                                                               5.7 MB/s | 1.9 MB     00:00    
(2/5): nodejs-full-i18n-22.16.0-1.module_el9.6.0+170+f035de78.x86_64.rpm                                                                      17 MB/s | 8.6 MB     00:00    
(3/5): libbrotli-1.0.9-7.el9_5.x86_64.rpm                                                                                                    6.1 MB/s | 312 kB     00:00    
(4/5): nodejs-docs-22.16.0-1.module_el9.6.0+170+f035de78.noarch.rpm                                                                          9.8 MB/s | 8.8 MB     00:00    
(5/5): nodejs-libs-22.16.0-1.module_el9.6.0+170+f035de78.x86_64.rpm                                                                           15 MB/s |  21 MB     00:01    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                         13 MB/s |  40 MB     00:03     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                     1/1 
  Installing       : libbrotli-1.0.9-7.el9_5.x86_64                                                                                                                      1/5 
  Installing       : nodejs-libs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                          2/5 
  Installing       : nodejs-docs-1:22.16.0-1.module_el9.6.0+170+f035de78.noarch                                                                                          3/5 
  Installing       : nodejs-full-i18n-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                     4/5 
  Installing       : nodejs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                               5/5 
  Running scriptlet: nodejs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                               5/5 
  Verifying        : nodejs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                               1/5 
  Verifying        : nodejs-docs-1:22.16.0-1.module_el9.6.0+170+f035de78.noarch                                                                                          2/5 
  Verifying        : nodejs-full-i18n-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                     3/5 
  Verifying        : nodejs-libs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                                                                          4/5 
  Verifying        : libbrotli-1.0.9-7.el9_5.x86_64                                                                                                                      5/5 

Installed:
  libbrotli-1.0.9-7.el9_5.x86_64                                                     nodejs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                                  
  nodejs-docs-1:22.16.0-1.module_el9.6.0+170+f035de78.noarch                         nodejs-full-i18n-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                        
  nodejs-libs-1:22.16.0-1.module_el9.6.0+170+f035de78.x86_64                        

Complete!
[root@d8d8565ea203 /]# 
```


### 설치한 다음에 버전 확인
```bash
[root@d8d8565ea203 /]# node --version
v22.16.0
[root@d8d8565ea203 /]# npm -v
bash: npm: command not found
```

node.js는 잘 설치되었는데 npm이 설치가 안되어있다. ?

### npm도 설치하자.

```bash
[root@d8d8565ea203 /]# yum install -y npm
Last metadata expiration check: 0:06:55 ago on Sun Jun  8 11:24:17 2025.
Dependencies resolved.
=============================================================================================================================================================================
 Package                     Architecture                   Version                                                                  Repository                         Size
=============================================================================================================================================================================
Installing:
 npm                         x86_64                         1:10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78                         appstream                         2.0 M

Transaction Summary
=============================================================================================================================================================================
Install  1 Package

Total download size: 2.0 M
Installed size: 9.3 M
Downloading Packages:
npm-10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78.x86_64.rpm                                                                                 13 MB/s | 2.0 MB     00:00    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                        2.3 MB/s | 2.0 MB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                     1/1 
  Installing       : npm-1:10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78.x86_64                                                                                         1/1 
  Running scriptlet: npm-1:10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78.x86_64                                                                                         1/1 
  Verifying        : npm-1:10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78.x86_64                                                                                         1/1 

Installed:
  npm-1:10.9.2-1.22.16.0.1.module_el9.6.0+170+f035de78.x86_64                                                                                                                

Complete!
[root@d8d8565ea203 /]# 
```

### npm 버전도 확인
```bash
[root@d8d8565ea203 /]# npm -v
10.9.2
```

### zip unzip 설치
```bash
[root@8a9e08205a4d openclass]# dnf -y install zip unzip
Last metadata expiration check: 0:09:54 ago on Sun Jun  8 11:39:33 2025.
Dependencies resolved.
=============================================================================================================================================================================
 Package                                Architecture                            Version                                        Repository                               Size
=============================================================================================================================================================================
Installing:
 unzip                                  x86_64                                  6.0-58.el9_5                                   baseos                                  180 k
 zip                                    x86_64                                  3.0-35.el9                                     baseos                                  263 k

Transaction Summary
=============================================================================================================================================================================
Install  2 Packages

Total download size: 443 k
Installed size: 1.1 M
Downloading Packages:
(1/2): zip-3.0-35.el9.x86_64.rpm                                                                                                             2.5 MB/s | 263 kB     00:00    
(2/2): unzip-6.0-58.el9_5.x86_64.rpm                                                                                                         1.7 MB/s | 180 kB     00:00    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                        519 kB/s | 443 kB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                     1/1 
  Installing       : unzip-6.0-58.el9_5.x86_64                                                                                                                           1/2 
  Installing       : zip-3.0-35.el9.x86_64                                                                                                                               2/2 
  Running scriptlet: zip-3.0-35.el9.x86_64                                                                                                                               2/2 
  Verifying        : unzip-6.0-58.el9_5.x86_64                                                                                                                           1/2 
  Verifying        : zip-3.0-35.el9.x86_64                                                                                                                               2/2 

Installed:
  unzip-6.0-58.el9_5.x86_64                                                               zip-3.0-35.el9.x86_64                                                              

Complete!
[root@8a9e08205a4d openclass]# 
```


## 윈도우에서 파일 전송
podman cp 사용

먼저 linux에 디렉토리를 생성한다.
```bash
[root@8a9e08205a4d ~]# mkdir dev
[root@8a9e08205a4d ~]# cd dev
[root@8a9e08205a4d dev]# mkdir openclass
[root@8a9e08205a4d dev]# cd openclass
[root@8a9e08205a4d openclass]# pwd
/root/dev/openclass
```

### 윈도우에서 podman 컨테이너로 파일 보내기
```ps
podman cp ./openclass-main.zip angry_cannon:/root/dev/openclass/
```

### 압축풀기
```bash
[root@8a9e08205a4d openclass]# unzip openclass-main.zip
```

### podman 컨테이너의 폴더를 윈도우로 보내기
```ps
podman cp angry_cannon:/root/dev/openclass/ ./
```


## postgresql 17 설치

출처: https://www.postgresql.org/download/linux/redhat/

```bash
# Install the repository RPM:
dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm

# Disable the built-in PostgreSQL module:
dnf -qy module disable postgresql

# Install PostgreSQL:
dnf install -y postgresql17-server

# Optionally initialize the database and enable automatic start:
/usr/pgsql-17/bin/postgresql-17-setup initdb
systemctl enable postgresql-17
systemctl start postgresql-17
```

여기서 `/usr/pgsql-17/bin/postgresql-17-setup initdb`과 `systemctl start postgresql-17`는 실패한다. 자기는 systemd 로 부팅한게 아니라나. 흠.

