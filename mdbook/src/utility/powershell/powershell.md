# powerShell

## powerShell 버전확인
```
PS E:\TEST\nextjs> $PSVersionTable

Name                           Value
----                           -----
PSVersion                      5.1.19041.5607
PSEdition                      Desktop
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.5607
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
```

## powerShell 최신버전 확인
```
PS E:\TEST\nextjs> winget search Microsoft.PowerShell
'msstore' 원본을 사용하려면 다음 계약을 확인해야 합니다.
Terms of Transaction: https://aka.ms/microsoft-store-terms-of-transaction
원본이 제대로 작동하려면 현재 컴퓨터의 두 글자 지리적 지역을 백 엔드 서비스로 보내야 합니다(예: "미국").

모든 원본 사용 약관에 동의하십니까?
[Y] 예  [N] 아니요: y
이름               장치 ID                      버전    원본
---------------------------------------------------------------
PowerShell         Microsoft.PowerShell         7.5.0.0 winget
PowerShell Preview Microsoft.PowerShell.Preview 7.6.0.3 winget
```

## powerShell 최신버전 설치
```
PS E:\TEST\nextjs> winget install Microsoft.PowerShell
찾음 PowerShell [Microsoft.PowerShell] 버전 7.5.0.0
이 응용 프로그램의 라이선스는 그 소유자가 사용자에게 부여했습니다.
Microsoft는 타사 패키지에 대한 책임을 지지 않고 라이선스를 부여하지도 않습니다.
다운로드 중 https://github.com/PowerShell/PowerShell/releases/download/v7.5.0/PowerShell-7.5.0-win-x64.msi
  ██████████████████████████████   107 MB /  107 MB
설치 관리자 해시를 확인했습니다.
패키지 설치를 시작하는 중...
설치 성공
```

이렇게 설치하면 기존 파란 화면의 powerShell이 남아있고 검은 화면의 PowerShell 7이 생겨남. PowerShell 7이 지금 새로 설치한 것임.