# postgresql 올린 컨테이너를 다른 컨테이너에서 사용

docker.io/library/rockylinux:9

docker.io/library/postgres:latest  (17 버전임)

이미지를 사용한 2개의 컨테이너가 돌고 있다. 

두 컨테이너 사이에 일부러 네트워크 설정을 하거나 하지 않았다. 

rockylinux 컨테이너에서 postgres 컨테이너의 ip로 5432번 포트로 접속하겠다 하면 접속이 된다.

이 postgresql 서버에 별 설정한 게 없다.

