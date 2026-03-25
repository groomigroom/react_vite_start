# react_vite_start

vite.new/react-ts
에서 온라인으로 vite ts 프로젝트 만들 수 있음.

터미널에서 npm create vite@latest 폴더명 또는 . 으로 vite react 프로젝트 만들기 가능함


######

vite_react 호스팅하는 법?

npm run dev로 한 번 사이트 확인후에.

git 초기화하기
-> git init

github 리포지토리 연결
-> git remote add origin https://github.com/groomigroom/리포지토리_이름.git

github 커밋
-> git add .
git commit -m "initial commit"
git push -u origin master(안되면 main으로 해보기)

gh-pages 패키지 설치
-> npm install --save-dev gh-pages

package.json 수정하기
-> 

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "gh-pages -d dist",
  "lint": "eslint .",
  "preview": "vite preview"
}

이 부분에서 deploy 부분 추가하기.

vite 설정 수정
->
vite.config.ts 파일 열고, 아래와 같이 base 옵션 추가하기.

import { defineConfig } from 'vite'

export default defineConfig({
  base: '/trendboard/', // GitHub Pages에서 사용할 경로
})

앱 빌드 후 배포하기.
->
 npm run build
npm run deploy
하면 끝.

,,.,,.,..,..........

git push -f origin main 강제로 덮어쓰기
git remote remove origin 리포지토리 이름 잘못썼을 때
git status 커밋 확인하는 거
git add vite.config.ts
git commit -m "update config and packages" 커밋 안 된 vite.config.ts 커밋하는 거
