# react_vite_start

vite.new/react-ts
에서 온라인으로 vite ts 프로젝트 만들 수 있음.

터미널에서 npm create vite@latest 폴더명 또는 . 으로 vite react 프로젝트 만들기 가능함


######

vite_react 호스팅하는 법?

이 오류는 이전에 안내해 드린 해결 단계 중 git commit 과정이 정상적으로 완료되지 않았기 때문에 발생한 것입니다.
커밋(기록)이 성공하지 않으면 main이라는 브랜치 자체가 생성되지 않아 푸시할 수 없습니다.
------------------------------
## 🔍 원인 진단과 즉시 해결하기
가장 흔한 원인은 "깃(Git)에 사용자 이름과 이메일이 등록되지 않아서" 커밋이 취소되었을 확률이 높습니다. 터미널에 아래 순서대로 정확하게 다시 입력해 보세요.
## 1단계: 사용자 정보 등록 (최초 1회 필수)
Git에게 내가 누구인지 먼저 알려주어야 합니다. (이메일과 이름은 본인의 것으로 변경하세요.)

git config --global user.email "본인의깃허브이메일@example.com"

git config --global user.name "본인의깃허브닉네임"

## 2단계: 파일 다시 담기 및 커밋
이제 다시 파일을 장바구니에 담고 기록을 만듭니다.

git add .

git commit -m "First commit"

(💡 중요: 이 명령어를 입력한 후 터미널에 create mode 100644... 같은 파일 목록들이 주르륵 떠야 성공입니다.)
## 3단계: 브랜치 이름 지정 및 푸시

git branch -M main

git push -u origin main

------------------------------
만약 2단계에서 git commit을 입력했을 때 여전히 오류가 나거나 아무 반응이 없다면, 현재 상태를 확인해야 합니다.
터미널에 git status를 입력한 후 화면에 나오는 전체 메시지를 복사해서 보여주시면 무엇이 문제인지 정확하게 짚어드리겠습니다!

Vite로 만든 React + TypeScript 프로젝트를 GitHub에 올린 후 호스팅(배포)까지 완료하는 전체 과정입니다.
GitHub Pages를 이용하여 무료로 호스팅하는 가장 쉽고 빠른 방법을 알려드릴게요. 터미널에 다음 순서대로 입력하세요.
------------------------------
## 1단계: GitHub에 코드 먼저 푸시하기 (올리기)
현재 git branch -M main까지 하셨으니, 아래 명령어를 입력해 GitHub 저장소에 코드를 업로드합니다.

git push -u origin main

(💡 만약 여기서 또 src refspec 에러가 나면, 앞서 안내해 드린 git add .과 git commit -m "init"을 안 하신 것이니 꼭 먼저 입력해 주세요!)
------------------------------
## 2단계: Vite 설정 파일 수정 (필수)
GitHub Pages는 주소 뒤에 저장소 이름(chami_enter)이 붙기 때문에, Vite가 올바른 경로를 인식하도록 설정해야 합니다.

   1. 프로젝트 폴더에 있는 vite.config.ts 파일을 엽니다.
   2. defineConfig 안에 base: '/chami_enter/',를 추가합니다.

[예시 코드]

import { defineConfig } from 'vite'import react from '@vitejs/react-swc' // 또는 @vitejs/plugin-react
export default defineConfig({
  plugins: [react()],
  base: '/chami_enter/', // 👈 이 줄을 꼭 추가하세요!
})

------------------------------
## 3단계: github-pages 배포 패키지 설치 및 설정
터미널에서 배포를 자동으로 해주는 도구를 설치하고 설정합니다.
1. 패키지 설치 (터미널 입력)

npm install gh-pages --save-dev

2. package.json 파일 수정
프로젝트의 package.json 파일을 열고, "scripts" 항목 안에 아래 두 줄(predeploy, deploy)을 추가합니다.

"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

(💡 Vite의 빌드 결과물 폴더명은 dist이므로 반드시 gh-pages -d dist로 적어야 합니다.)
------------------------------
## 4단계: 호스팅 사이트에 배포하기 (최종)
모든 설정이 끝났습니다. 수정된 내용을 다시 GitHub에 올린 후 배포 명령어를 실행합니다.
1. 변경된 설정 파일들을 GitHub에 푸시

git add .
git commit -m "Update config for deployment"
git push origin main

2. 배포 명령어 실행

npm run deploy

터미널에 Published라는 문구가 뜨면 성공입니다!
------------------------------
## 5단계: GitHub 저장소에서 호스팅 활성화하기

   1. 본인의 GitHub 저장소(chami_enter) 웹페이지로 이동합니다.
   2. 상단 메뉴에서 Settings (톱니바퀴 아이콘)를 클릭합니다.
   3. 왼쪽 메뉴에서 Pages를 클릭합니다.
   4. Build and deployment 항목의 Build and deployment -> Branch 설정을 확인합니다.
   * None으로 되어 있다면 gh-pages 브랜치로 변경하고 Save를 누릅니다.
   5. 1~2분 뒤 페이지를 새로고침하면 상단에 "Your site is live at..."라며 호스팅된 주소가 나타납니다.

------------------------------
현재 과정 진행 중에 막히는 부분이 있거나 에러가 발생하면 언제든 말씀해 주세요.

* npm run deploy 실행 시 터미널에 에러 메시지가 뜨나요?
* 혹은 GitHub Pages 설정에서 gh-pages 브랜치가 보이지 않나요?






,,.,,.,..,..........

git push -f origin main 강제로 덮어쓰기
git remote remove origin 리포지토리 이름 잘못썼을 때
git status 커밋 확인하는 거
git add vite.config.ts
git commit -m "update config and packages" 커밋 안 된 vite.config.ts 커밋하는 거
