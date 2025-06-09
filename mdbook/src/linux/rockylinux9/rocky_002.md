# podman 컨테이너에서 ssh 사용

사용 이미지: docker.io/library/rockylinux:9


이 이미지는 wsl에서 사용하는 특성상 systemd가 안된다. 그래서 약간 특별한 방식을 사용한다.

## 설치

```bash
[root@ab5b7b7ab2df /]# dnf install -y openssh-server
Last metadata expiration check: 0:18:57 ago on Mon Jun  9 14:26:13 2025.
Dependencies resolved.
=============================================================================================================================================================================
 Package                                       Architecture                          Version                                     Repository                             Size
=============================================================================================================================================================================
Installing:
 openssh-server                                x86_64                                8.7p1-45.el9                                baseos                                457 k

Transaction Summary
=============================================================================================================================================================================
Install  1 Package

Total download size: 457 k
Installed size: 1.0 M
Downloading Packages:
openssh-server-8.7p1-45.el9.x86_64.rpm                                                                                                       2.9 MB/s | 457 kB     00:00    
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                                                        647 kB/s | 457 kB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                                                                                                                     1/1 
  Running scriptlet: openssh-server-8.7p1-45.el9.x86_64                                                                                                                  1/1 
  Installing       : openssh-server-8.7p1-45.el9.x86_64                                                                                                                  1/1 
  Running scriptlet: openssh-server-8.7p1-45.el9.x86_64                                                                                                                  1/1 
Created symlink /etc/systemd/system/multi-user.target.wants/sshd.service → /usr/lib/systemd/system/sshd.service.

  Verifying        : openssh-server-8.7p1-45.el9.x86_64                                                                                                                  1/1 

Installed:
  openssh-server-8.7p1-45.el9.x86_64                                                                                                                                         

Complete!
```

## 상태확인
```bash
[root@ab5b7b7ab2df /]# systemctl status sshd
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
```

실패한다. wsl의 systemd 관련 문제다. 


## 어쩄든 실행

먼저 키를 만들어주자.

```bash
[root@ab5b7b7ab2df ~]# ssh-keygen -A
ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519 
```

그리고 실행. 
```bash
[root@ab5b7b7ab2df ~]# /usr/sbin/sshd 
``` 

이제 22번 포트로 연결한 포트로 putty를 이용해 접속하면 된다.

