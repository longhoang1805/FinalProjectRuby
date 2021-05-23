function tinhtien(){
	
	var ngay = $("input[name='ngay']").val();
	var kehang = document.getElementsByName("kehang");
	
	var s = 0;

	if(kehang[0].checked) s = s + 1000;
	if(kehang[1].checked) s= s + 2000;
	if (kehang[2].checked) s= s +5000;
	s = s * ngay;
	
	var t = document.getElementsByTagName("h3");
	t[5].innerHTML = s;
	
}
function apl(){
	alert("Đăng bài thành công! Vui lòng chờ duyệt bài. \n"+ "Quay lại trang chủ");
	window.location="index.html";
}
function sosanh(){
	alert("Đã thêm vào so sánh!\nĐến trang so sánh");
	window.location="sosanh.html";
}