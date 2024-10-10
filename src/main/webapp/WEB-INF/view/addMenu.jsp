<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/static/css/addMenu.css">
<script src="/static/js/addMenu.js" defer></script>

<style>
.uploaded-image {
	width: 200px; /* 이미지 가로 크기 */
	height: 200px; /* 이미지 세로 크기 */
	object-fit: cover; /* 이미지가 영역에 맞게 크기 조정 */
	border-radius: 10px;
	margin-top: 10px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.buttons {
	display: flex;
	justify-content: space-between;
	width: 220px;
	margin-top: 20px;
}

.buttons button {
	background: linear-gradient(45deg, #FF69B4, #FF1493); /* 그라데이션 배경 */
	color: white;
	border: none;
	padding: 10px 20px;
	font-size: 18px;
	font-weight: bold;
	border-radius: 30px; /* 둥근 모서리 */
	cursor: pointer;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 */
	transition: background 0.3s, transform 0.3s; /* 부드러운 애니메이션 */
}

.buttons button:hover {
	background: linear-gradient(45deg, #FF1493, #FF69B4); /* 호버 시 배경색 반전 */
	transform: scale(1.05); /* 호버 시 약간 확대 */
}

.buttons button:active {
	background: linear-gradient(45deg, #FF1493, #C71585); /* 클릭 시 배경색 어둡게 */
	transform: scale(0.98); /* 클릭 시 살짝 눌리는 효과 */
}
</style>
</head>
<body>
	<div class="info-section">
		<h1>메뉴 추가 화면</h1>
	</div>
	<div class="info-section">
		<h2>메뉴 추가</h2>
	</div>
	<form method="post" id="addMenuForm" action="/addMenu" enctype="multipart/form-data">
		<div class="menu-container">
			<div class="column">
				<div class="image-display">

					<input type="hidden" id="cafeNum" name="cafeNum" value="1">
					<input type="text" id="menuName" name="menuName" placeholder="메뉴명 입력">
					<input type="text" id="menuPrice" name="menuPrice" placeholder="메뉴 금액 입력">
					<!-- 이미지 업로드 입력 -->

					<h2>메뉴 사진을 선택해 주세요.</h2>
					<img id="imagePreview" class="uploaded-image" name="menuInputpic" alt="이미지 미리보기">
					<input type="file" id="menuInputpic" name="menuInputpic" accept="image/*">
					<input type="hidden" id="menuNamepic" name="menuNamepic">
					<!-- Base64 인코딩된 이미지 저장 -->
					<input type="text" placeholder="메뉴 설명을 입력해 주세요" name="menuExplain" id="menuExplain">
				</div>
			</div>
		</div>
		<div class="buttons">
			<button class="button" type="submit" id="backBtn">이전</button>
			<button class="button" type="submit" id="addMenuBtn">메뉴추가</button>

		</div>
	</form>
</body>

</html>