# fedora

## 패키지 관리
fedora는 debian 계열과 달리  apt-get을 쓰지 않고 dnf를 사용한다.


| **APT 명령어**               | **DNF 명령어**          | **설명**                                                                 |
|------------------------------|-------------------------|--------------------------------------------------------------------------|
| `apt-get install [패키지명]` | `dnf install [패키지명]` | 패키지 설치                                                              |
| `apt-get update`             | `dnf check-update`      | 패키지 목록 업데이트 (DNF는 자동으로 캐시를 갱신하므로 자주 필요하지 않음) |
| `apt-get upgrade`            | `dnf upgrade`           | 설치된 패키지 업그레이드                                                 |
| `apt-get remove [패키지명]`  | `dnf remove [패키지명]` | 패키지 제거                                                              |
| `apt-get autoremove`         | `dnf autoremove`        | 더 이상 필요하지 않은 의존성 패키지 제거                                 |
| `apt-cache search [키워드]`  | `dnf search [키워드]`   | 패키지 검색                                                              |

**예시**:
```bash
# 패키지 설치
$ dnf install firefox

# 패키지 제거
$ dnf remove firefox

# 패키지 목록 업데이트
$ dnf check-update

# 시스템 업그레이드
$ dnf upgrade
```
