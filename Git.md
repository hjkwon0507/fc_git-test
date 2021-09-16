# Git

## Git 설치 (https://blog.naver.com/bohwajung/222122708044 참고)
  - https://www.git-scm.com/   => git을 설치한다
- 임의의 폴더를 만든다 =>  git_sample   (로컬 저장소가 될 폴더)
- 폴더에 a1.html , a2.html 파일 두개를 만든다
- git_sample 폴더에서 마우스 오른쪽 버튼 팝업 메뉴 에서 Git Gash Here 를 선택

- $ git init       =>   .git 폴더가 만들어져 있다(로컬저장소)
- $ git config --global user.name "binijjang"
- $ git config --global user.email "nhbini@nate.com"
 
- $ git status     => 현재 로컬폴더와 git과의 싱크 상태를 체크
- $ git add -A     => 로컬 폴더의 모든 파일을 git의 타임캡슐(?)에 넣는다
- $ git status     => 상태를 체크
- $ git commit -m "first commit"    => 인식할 수 있는 commit을 달아준다 (타임캡슐1을 묻는다)
- $ git status     =>  확인하면 nothing to commit,  (더이상 묻을 캡슐이 없다)

- a3.html 을 하나 더 만든다.
- $ git status 
- $ git add -A     => 로컬 폴더의 모든 파일을 git의 타임캡슐(?)에 넣는다
- $ git status     => 상태를 체크
- $ git commit -m "second commit"    => 인식할 수 있는 commit을 달아준다 (타임캡슐2를 묻는다)
- $ git status     =>  확인하면 nothing to commit,  (더이상 묻을 캡슐이 없다)

- a4.html 을 하나 더 만든다.
  a2.html 은 삭제한다
  a1.html 은 내용을 수정한다 
- $ git status 
- $ git add -A     => 로컬 폴더의 모든 파일을 git의 타임캡슐(?)에 넣는다
- $ git status     => 상태를 체크
- $ git commit -m "third commit"    => 인식할 수 있는 commit을 달아준다 (타임캡슐3을 묻는다)
- $ git status     =>  확인하면 nothing to commit,  (더이상 묻을 캡슐이 없다)

- $ git log    =>  캡슐의 정보들과 메시지들을 볼 수 있다 


*과거로 돌아가기 - reset
-복원할 여지없이 그 이후는 완전히 삭제
  $ git reset 일련번호6자리(git log시 일련번호) --hard  

*과거로 돌아가기 - revert
-과거로 돌아갔다가 다시 돌아올 수 있는 방법
-돌아갈 시점이 아닌 취소할 시점을 선택한다
  $ git revert 일련번호6자리(git log시 일련번호) 
-그래로 저장하겠다는 vi명령어  =>  :wq 를 입력한다
 

----------------------------------------------------------------------------
<Branch>

$ git branch my-job 
$ git branch          =>   master , my-job  두개의 branch가 보여진다
$ git checkout my-job       =>  git checkout branch명  (다른 branch로 이동)
$ git branch

-------------------------------------------------------------------------
<Merge>

$ git checkout master    =>  master branch로 이동
$ git branch
$ git merge my-job   =>   master branch 에서 my-job branch 의 내용을 가져와 병합한다

--------------------------------------------

## Git Hub Desktop 사용
https://desktop.github.com/

## Git 명령어
$ git init   => 지정한 폴더안에 .git폴더가 생성된다

*Push 할때

$ git remote add origin  https://github.com/binijjang/sample1.git  =>git repository와 연결

$ git status  => 현재 로컬폴더와 git과의 싱크 상태를 체크

$ git add .   => 로컬폴더와 git repository 간에 변경된 파일들을 모두 Tracking 한다

$ git commit -m "message" => 인식할 수 있는 commit을 달아준다

$ git push origin +master  => 실제로 Git에 PUSH


*Pull 할때

가져올 폴더 생성
$ git init
$ git remote add origin  https://github.com/가져올git.git
$ git pull origin master  => 원격저장소에 파일을 로컬저장소로 가져온다


*git에 더 최신 내용이 있을때...

$ git pull origin master 를 사용하여 최신 내용을 가져온 후
$ git push origin +master 을 사용하여 git에 올린다


