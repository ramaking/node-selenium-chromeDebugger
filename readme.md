# node.js chrome debugger mode 제어

openDebugChrome 파일을 수정하여 자신의 chrome.exe 파일의 위치로 맞춥니다.

```
start /d "{PATH_TO_CHROME.EXE}" /b chrome.exe --remote-debugging-port=9222 --user-data-dir="C:/Chrome_debug_temp"
```

<br>
openDebugChrome.bat 파일을 실행하여 chrome 브라우저가 정상적으로 실행되는 지 확인합니다.
<br><br>
아래 명령어를 수행해 필요한 모듈을 다운로드 받습니다.

```
npm install
```

<br><br>
실행합니다.

```
node app.js
```
