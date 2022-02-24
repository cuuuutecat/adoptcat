Kakao.init("e2cd53463c5f16d89c7248527235444b");
function shareLink() {
    Kakao.Link.sendScrap( {
      requestUrl: location.href
    });
};


function clip(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("페이지 URL이 복사되었습니다.")
}







// const urlBotton = document.querySelector("#linkLogo");

// urlBotton.addEventListener("click", () => {
//     var url = '';
// 	var textarea = document.createElement("textarea");
// 	document.body.appendChild(textarea);
// 	url = window.document.location.href;
// 	textarea.value = url;
// 	textarea.select();
// 	document.execCommand("copy");
// 	document.body.removeChild(textarea);

//     const xhr = new XMLHttpRequest();

//     const url = "/shorturl";

//     const responseData = xhr.responseText;

//     xhr.open("POST", url);
//     xhr.send(jsonToString);
// })

