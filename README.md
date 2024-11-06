<h1 align="center"> 맛GPT (맛집 소개 웹 프로젝트) </h1>

![메인](https://github.com/user-attachments/assets/57ae2b4c-3dac-46a5-8968-695381157ee7)
 
<h2>목적</h2>
<p align="center">기존 맛집 소개 사이트의 기능을 바탕으로  </p>
<p align="center">사용자가 인원수에 따라 예산을 조정할 수 있는 기능을 추가하여 최적의 식당을 추천하고, </p>  
<p align="center">사용자 리뷰 작성 기능을 통해 다양한 의견을 공유하고 맛집에 대한 정보를 보다 풍부하게 제공합니다.  </p>
<p align="center">최종적으로, 사용자 맞춤형 경험을 극대화하여 맛집 탐색의 편의성을 향상시키는 것을 목표로 합니다. </p>

<p align="center">
  <h2>사용도구</h2>

 <img src="https://img.shields.io/badge/Java-%23FF7800"> <img src="https://img.shields.io/badge/Eclipse-2C2255?logo=eclipseide&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white">   
 <img src="https://img.shields.io/badge/HTML-%23E34F26?logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-%231572B6?logo=css3&logoColor=white"> 
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/Maven-%23C71A36?logo=apachemaven&logoColor=white">  

## 프로젝트 배경 및 적용 기술
- 기존 시스템의 한계 및 개선   
  기존 맛집 검색 서비스는 지역 및 음식 종류별 검색에만 집중되어 있고, 예산을 고려한 추천 기능 부족   
  본 프로젝트는 예산 기반의 맛집 추천 기능을 추가하여, 사용자의 실질적인 요구 반영   

- 독창적인 예산 맞춤 검색 기능   
예산을 고려한 맛집 검색 기능을 도입하여, 사용자 맞춤 서비스 제공   
이를 통해 기존 맛집 사이트에 제공하지 않는 사용자 예산에 맞는 최적의 맛집을 손쉽게 찾기 가능   

- 사용자 특성 및 활용 환경 조성   
사용자는 연령대와 취향에 따라, 데이트나 가족 모임 등 특정 상황에 맞는 맛집을 찾고자 할 때,   
예산 내에서 최적의 선택을 할 수 있는 기능 필요

- 기술 구현 및 협업   
JSP와 서블릿 이용한 동적 웹 페이지 구현, 카카오 맵 API을 이용한 위치 정보 제공,   
Git을 통해 효율적인 협업 및 버전 관리 진행

## 주요 핵심 기능
### 사용자 등록
- 로그인/회원가입/아이디 찾기/비밀번호 찾기
<img src="https://github.com/user-attachments/assets/463c2861-6bb6-46a1-9405-ad274c746380" width="49%" height="49%">
<img src="https://github.com/user-attachments/assets/30d3779c-0647-4b79-b7bd-b265bcb41439" width="49%" height="49%">
<img src="https://github.com/user-attachments/assets/afd2361a-589e-4b55-b477-d3c5366aa7f0" width="49%" height="49%">
<img src="https://github.com/user-attachments/assets/6237c17a-3e06-4601-8060-a5bfeb559d3f" width="49%" height="49%"> 
- 회원 정보 수정
<img src="https://github.com/user-attachments/assets/e4df65a1-481f-49ef-8b80-b63667d109a0">

### 사업자
- 가게/메뉴 추가
<img src="https://github.com/user-attachments/assets/03d10a42-fd51-4b53-ac91-8b4cf377f427" width="49%" height="49%">
<img src="https://github.com/user-attachments/assets/e0dd8302-1237-44f0-a996-02cf297a0514" width="49%" height="49%">

### 검색 기능
- 키워드 검색
<img src="https://github.com/user-attachments/assets/20863c2a-9047-44a7-987f-41d5c1ed13d8">   
<img src="https://github.com/user-attachments/assets/abce46c7-1c8b-493a-be90-7258d9cd38a2">   
<img src="https://github.com/user-attachments/assets/b20e15a2-18c9-44f5-bf23-ec4ff9072bbd">   
<img src="https://github.com/user-attachments/assets/3c7eed6c-d198-4393-999b-772a78908653">

### 관리자
- 사용자 관리
<img src="https://github.com/user-attachments/assets/36e7d42f-5e93-40d6-ae27-69b6246f70ca">
- 건의 사항 관리
<img src="https://github.com/user-attachments/assets/c5bab4ae-d2bd-4cec-9a10-5f8d5e74505f">















---------------------

## 진행과정
![image](https://github.com/user-attachments/assets/65e92979-68e1-433b-944a-6f83f4c8e393)
프로젝트 구조

이 웹 어플리케이션은 Maven을 기반으로 구성되었으며, 서블릿과 JSP를 활용하여 동적인 웹사이트를 구현
다양한 라이브러리(JSTL, DBCP2, Lombok, MyBatis, JSON 등)를 통해 기능을 확장하고 데이터 처리를 최적화. 특히, MyBatis를 사용하여 SQL 쿼리와 객체 지향 프로그래밍의 통합을 용이하게 하였고, DBCP2를 통해 데이터베이스 연결 풀링을 적용하여 성능 개선
본 프로젝트는 팀 프로젝트로 진행되었으며, 각 팀원들은 맡은 역할에 따라 분담하여 효율적인 작업 분배와 전문성 확보
개발 과정

초기 단계에서는 홈페이지의 기본 기능을 설계하였고, 이를 바탕으로 유스케이스 다이어그램과 데이터베이스 스키마를 작성하여 사용자 요구사항을 명확히 반영할 수 있도록 준비
Git을 통해 지속적인 병합 및 역할 분담을 관리하며, 코드 변경 사항을 체계적으로 관리하여 팀원 간의 원활한 협업 진행
예외 처리 및 유효성 검사를 철저히 실시하여 최대한 오류를 줄이는 데 집중하였음



---------------------



## 주요 핵심 기능 소개
Cafeteria
- 가게 부분의 기능과 DB연결 관리
- Mapper와 ServiceImpl 클래스를 통해 MySQL과 연결하여 DB와 연동 및 SQL문을 처리하고 가게 정보들을 불러오거나 저장

User	
- 회원가입과 로그인 등의 유저 관리
- 기본적으로 DB와 연동하여 처리되며, JSON으로 값을 불러온 뒤 UserValidator를 통해 유효성 검사를 진행하고 모두 통과했을 때 가입 승인

UserController	Filter
- 클래스를 통해 로그인과 로그아웃 상태를 확인하여 처리
- session을 확인하여 로그인 상태를 확인하고 특정 페이지의 경우 로그인이 되어있는지 확인하여 안되어있을 경우 로그인 페이지로 이동하도록 구현

Map	
- 카카오 맵 API를 활용하여 지도 데이터 구현
- API를 활용하여 DB에 저장된 주소를 불러왔을 때 해당 주소가 가리키는 실제 주소를 보여주고 체커로 해당 가게 이름을 표시

SearchCateServlet	
- 사용자의 예산과 원하는 태그에 맞는 가게 검색
- 사용자와 카페의 정보를 초기화하고, 카테고리와 가격 조건에 맞는 카페 리스트를 검색하여 카페에 대한 사진 및 태그 정보를 병합한 뒤 결과 제공

SearchAreaServlet	
- 지역별로 찾고 싶은 가게 리스트 출력
- 요청된 지역에 맞는 카페 목록을 검색하고, 해당 카페와 관련된 이미지 정보를 병합하여 JSON 형식으로 응답한 뒤 상태 코드를 설정하여 성공 또는 실패를 사용자에게 전달

CafeDetailServlet
- 선택한 가게의 세부 정보를 사용자에게 보여줌
- 특정 카페의 세부 정보를 조회하여, 가게 정보, 메뉴 목록, 리뷰, 평균 평점, 카테고리, 태그 및 이미지를 보여주며, 예외 발생 시 에러 페이지로 포워딩

OwnerPageServlet	
- 사업주로 등록된 사용자가 가게 정보를 등록하고 DB에 저장
- 페이지에서 가게 정보를 입력하고 전송. GET 요청으로 카테고리 목록과 소유자 ID를 제공하며,   
- POST 요청에서는 JSON 데이터를 읽고 가게 정보, 태그, 이미지를 데이터베이스에 저장

AdminServlet	
- 관리자가 가입된 사용자들의 정보와 사업자등록증 등 확인 및 제재 가능
- DB에서 사용자 리스트를 조회하여 가져오며, 사업주의 경우 사업자등록증 확인 가능
- 아이디별로 활성화/비활성화 가능

## Repository 구조
```sh
EnjoyFood_Project/
├─ src/main/
│  ├─ java/
│  │  ├─ cafeteria/
│  │  ├─ config/
│  │  ├─ enjoyfood/
│  │  ├─ main/controller/
│  │  ├─ user/
│  │  │  ├─ controller
│  │  │  ├─ model
│  │  │  ├─ suggestion
│  ├─ webapp/
│  │  ├─ META-INF/
│  │  ├─ WEB-INF/
│  │  │  ├─ module/
│  │  │  ├─ view/
│  │  ├─ popup/
│  │  ├─ static/
│  │  │  ├─ css/
│  │  │  ├─ ico/
│  │  │  ├─ js/
├─ .gitignore
├─ pom.xml
├─ .README.md
```

## Authors
GitHub [@goho11 깃허브 이동](https://github.com/goho11)
