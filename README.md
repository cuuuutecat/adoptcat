# adoptcat(고양이 입양 웹사이트)

* **팀원 구성** :

  😻 홍도희 ( 메인화면 )<br>
  🐰 황세원 ( 상세화면 )<br>
  🐶 진미란 ( 폼 확인, 사이트 소개 화면 )<br>
  
* **서비스 소개** : **고양이를 입양할 집사들을 찾는 웹사이트**

* **프로젝트 기간** : 22/02/23 ~ 22/02/24

* **기술 스택** : <br><br>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>   
  웹페이지를 만들기 위한 기본 툴로 사용   
  <br>
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><br>
  get, post 기능을 이용하기 위해 간단히 쓰려고 선택한 서버
 
* **화면 별 기능** :

  📢메인 - 입양 홍보하는 고양이의 간단한 소개글, 클릭시 상세페이지로 이동<br>
  🧾상세화면 - 고양이 상세정보, 입양 신청 폼<br>
  📝폼 확인 - 입양 확인 폼   
  ✨사이트 소개 화면 - 사이트 소개글
     
  <a href="https://github.com/cuuuutecat/adoptcat/wiki/%EA%B8%B0%EB%8A%A5-%EB%AA%85%EC%84%B8"><img src="https://img.shields.io/badge/more about functions-D9B68B?style=for-the-badge&logoWidth=50"/></a>   
 ↑ _조금 더 상세한 기능 명세_ ↑
  
* **실제 화면**
  
  <메인 화면 - 1>
  ![image](https://user-images.githubusercontent.com/55613591/155557671-0b749bf5-4b46-4acc-a123-d89346d85ec9.png)

  <메인 화면 -2>
  ![image](https://user-images.githubusercontent.com/55613591/155557877-c82095d3-3092-49bd-8697-a7d5113e6736.png)

  <메인 화면 -3>
  ![image](https://user-images.githubusercontent.com/55613591/155557938-67b304ff-4d95-4f9b-9eb6-7decd0b986be.png)

  <고양이 상세 설명 화면 -1>
  ![image](https://user-images.githubusercontent.com/55613591/155558149-ec371aa9-8a72-4c40-85e9-5069a0015074.png)

  <고양이 상세 설명 화면 -2>
  ![image](https://user-images.githubusercontent.com/55613591/155558232-acf9d8f0-572b-48d0-806d-425afbbacdae.png)

  <고양이 상세 설명 화면 -3>
  ![image](https://user-images.githubusercontent.com/55613591/155558320-06e1ecc9-0ecc-4f06-8afd-793cb40a3b84.png)

  <폼 작성 결과 화면 -1>
  ![image](https://user-images.githubusercontent.com/55613591/155558483-992da2e9-966b-4578-af51-a0af33cdf4dc.png)

  <폼 작성 결과 화면 -2>
  ![image](https://user-images.githubusercontent.com/55613591/155558591-8726c471-9e0e-4c48-bc36-7ca045016dd3.png)

* **트러블 슈팅**   
  liveserver 에서는 진짜 확인만 가능했음.. get이나 post를 사용하려면 node서버를 통해서 구동할 것
  
* **개선 사항**
  * 폼의 정보를 현재 get으로 보내는데, 이를 post로 수정
  * 메인 화면의 정보를 가져와 상세정보 페이지에 보여주도록 수정
  * DB 연결을 해서 이용자가 남긴 폼 정보를 저장하도록 수정
  * 폼 정보중 지원동기가 보내지지 않는 문제 수정
  * 지도 API를 활용해 임보처 위치를 상세페이지에 넣기
  * 단축 url api 이용
