# mac

## 윈도우 "COM4"는 맥북에서 어떻게 표현해야 할까

```python
drone.open("COM4")
```

이 코드는 맥북에서 실행되지 않는다. COM4가 없으니까. 

맥북에서 시리얼 통신은 `/dev/tty.*`의 형태로 표시한다.

현재 연결된 포트를 확인하려면 터미널에서

```bash
ls /dev/tty.*
```

로 한다.

이렇게 하면 여러 개의 /dev/tty.OOOOOOOO 이 나타난다.

이 중 내 기기와 연결되었을 것으로 추정되는 걸 찾아 사용하면 된다. 

```python
drone.open("/dev/tty.usbmodem348C3396333241")
```

과 같은 식이다. 