window.addEventListener("load", onload);

let cafePic;
let cafePic64;
let imagePreview;
let addMenuBtn;
let confirmStoreBtn;
let backBtn;


function onload() {
	cafePic = document.querySelector("#cafePic");
	cafePic64 = document.querySelector("#cafePic64");
	cafePic.addEventListener('change', validateFile);
	imagePreview = document.querySelector("#imagePreview");
	confirmStoreBtn = document.querySelector("#ownerPage");
	confirmStoreBtn.addEventListener("submit", addCafeteria);
	backBtn = document.querySelector("#backBtn");
	backBtn.addEventListener("click", back);
}

function back(e) {
	e.preventDefault(); // 기본 동작 방지 (예: 폼 제출)
	window.location.href = "http://localhost:8080/userInfo"; // 이전 페이지로 이동
}


function addCafeteria(e) {
	e.preventDefault();
	if (document.querySelector("#cafeName").value.length == 0
		|| document.querySelector("#cafeExplain").value.length == 0
		|| document.querySelector("#cafeCategory").options[document.querySelector("#cafeCategory").selectedIndex].text == "식당 카테고리 선택"
		|| document.querySelector("#cafePrice").value.length == 0
		|| document.querySelector("#cafePhoneNumber").value.length == 0
		|| document.querySelector("#cafeAddress").value.length == 0
		|| document.querySelector("#cafePic64").value.length == 0) {
		alert("값을 모두 입력해주세요");
		return;
	}

	let formData = new FormData(document.querySelector("#ownerPage"));
	formData.delete("menuInputpic");
	let json = JSON.stringify(Object.fromEntries(formData));
	console.log(json);
	fetch("/ownerPage", { method: "post", body: json })
		.then((resp) => {
			if (resp.status == 201) {
				location.href = "/mainpage";
			} else {
				alert("추가 실패");
			}
		});

}

function validateFile(e) {

	const file = e.target.files[0];
	if (file) {
		const maxSize = 10 * 1024 * 1024;
		const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];

		if (file.size > maxSize) {
			cafePic64.value = "";
			imagePreview.src = "";
			imagePreview.alt = "파일 크기가 10MB를 초과합니다.";
			return;
		}

		if (!validTypes.includes(file.type)) {
			cafePic64.value = "";
			imagePreview.src = "";
			imagePreview.alt = "파일 형식이 유효하지 않습니다.";
			return;
		}

		const reader = new FileReader();
		reader.onload = function(e) {
			cafePic64.value = e.target.result;
			imagePreview.src = e.target.result;
		};
		reader.readAsDataURL(file);
	}
}

function goPopup() {
	// 주소검색을 수행할 팝업 페이지를 호출합니다.
	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://business.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
	var pop = window.open("/popup/jusoPopup.jsp", "pop", "width=570,height=420, scrollbars=yes, resizable=yes");

	// 모바일 웹인 경우, 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(https://business.juso.go.kr/addrlink/addrMobileLinkUrl.do)를 호출하게 됩니다.
	//var pop = window.open("/popup/jusoPopup.jsp","pop","scrollbars=yes, resizable=yes"); 
}


function jusoCallBack(roadFullAddr, roadAddrPart1, addrDetail, roadAddrPart2, engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn, detBdNmList, bdNm, bdKdcd, siNm, sggNm, emdNm, liNm, rn, udrtYn, buldMnnm, buldSlno, mtYn, lnbrMnnm, lnbrSlno, emdNo) {
	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
	document.querySelector("#cafeAddress").value = roadFullAddr;
	//	document.form.roadFullAddr.value = roadFullAddr;
	//	document.form.roadAddrPart1.value = roadAddrPart1;
	//	document.form.roadAddrPart2.value = roadAddrPart2;
	//	document.form.addrDetail.value = addrDetail;
	//	document.form.engAddr.value = engAddr;
	//	document.form.jibunAddr.value = jibunAddr;
	//	document.form.zipNo.value = zipNo;
	//	document.form.admCd.value = admCd;
	//	document.form.rnMgtSn.value = rnMgtSn;
	//	document.form.bdMgtSn.value = bdMgtSn;
	//	document.form.detBdNmList.value = detBdNmList;
	//	/** 2017년 2월 추가제공 **/
	//	document.form.bdNm.value = bdNm;
	//	document.form.bdKdcd.value = bdKdcd;
	//	document.form.siNm.value = siNm;
	//	document.form.sggNm.value = sggNm;
	//	document.form.emdNm.value = emdNm;
	//	document.form.liNm.value = liNm;
	//	document.form.rn.value = rn;
	//	document.form.udrtYn.value = udrtYn;
	//	document.form.buldMnnm.value = buldMnnm;
	//	document.form.buldSlno.value = buldSlno;
	//	document.form.mtYn.value = mtYn;
	//	document.form.lnbrMnnm.value = lnbrMnnm;
	//	document.form.lnbrSlno.value = lnbrSlno;
	//	/** 2017년 3월 추가제공 **/
	//	document.form.emdNo.value = emdNo;

}