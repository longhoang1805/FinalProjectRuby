function quanhuyen(){
	var tinh = document.getElementById("tinh").value;
    var phantuchon = $("#quan");
    phantuchon.empty();
    // phantuchon.append("<option>----------</option>");
    if (tinh == 0){
    		phantuchon.empty();
    		phantuchon.append("<option>-----------------</option>");
    	}
    	else if (tinh == 1){
    		phantuchon.empty();
    		phantuchon.append("<option>-----------------</option>");
    		phantuchon.append("<option>Hoàn Kiếm</option>");
    		phantuchon.append("<option>Đống Đa</option>");
    		phantuchon.append("<option>Ba Đình</option>");
    		phantuchon.append("<option>Hoàng Mai</option>");
    		phantuchon.append("<option>Hai Bà Trưng</option>");
    		phantuchon.append("<option>Thanh Xuân</option>");
    		phantuchon.append("<option>Long Biên</option>");
    		phantuchon.append("<option>Nam Từ Liêm</option>");
    		phantuchon.append("<option>Bắc Từ Liêm</option>");
    		phantuchon.append("<option>Tây Hồ</option>");
    		phantuchon.append("<option>Cầu Giấy</option>");
    		phantuchon.append("<option>Hà Đông</option>");
    	}
    	else if (tinh == 2) {
    		phantuchon.empty();
    		phantuchon.append("<option>-----------------</option>");
    		phantuchon.append("<option>Quận Thanh Khê</option>");
    		phantuchon.append("<option>Quận Sơn Trà</option>");
    		phantuchon.append("<option>Quận Ngũ Hành Sơn</option>");
    		phantuchon.append("<option>Quận Liên Chiểu</option>");
    		phantuchon.append("<option>Quận Hải Châu</option>");
    		phantuchon.append("<option>Quận Cẩm Lệ</option>");
    		phantuchon.append("<option>Huyện Hòa Vang</option>");
    	}
    	else if (tinh ==3) {
    		phantuchon.empty();
    		phantuchon.append("<option>-----------------</option>");
    		phantuchon.append("<option>Quận 1</option>");
    		phantuchon.append("<option>Quận 2</option>");
    		phantuchon.append("<option>Quận 3</option>");
    		phantuchon.append("<option>Quận 4</option>");
    		phantuchon.append("<option>Quận 5</option>");
    		phantuchon.append("<option>Quận 6</option>");
    		phantuchon.append("<option>Quận 7</option>");
    		phantuchon.append("<option>Quận 8</option>");
    		phantuchon.append("<option>Quận 9</option>");
    		phantuchon.append("<option>Quận 10</option>");
    		phantuchon.append("<option>Quận 11</option>");
    		phantuchon.append("<option>Quận 12</option>");
    		phantuchon.append("<option>Quận Bình Tân</option>");
    		phantuchon.append("<option>Quận Bình Thạnh</option>");
    		phantuchon.append("<option>Quận Gò Vấp</option>");
    		phantuchon.append("<option>Quận Phú Nhuận</option>");
    		phantuchon.append("<option>Quận Thủ Đức</option>");
    		phantuchon.append("<option>Quận Hóc Môn</option>");
    	}
    	else{
    		phantuchon.empty();
    		phantuchon.append("<option>-----------------</option>");
    	}
    
}
function capnhat(){
    alert("Cập nhật thành công!");
}

var objGiay = document.getElementById("giay");
var objPhut = document.getElementById("phut");

function demnguoc(){
    var giay = objGiay.innerHTML;
    var phut = objPhut.innerHTML;
    giay--;
    if(giay < 0) {
        phut--;
        giay = 59;
    }
    objPhut.innerHTML = phut;
    objGiay.innerHTML = giay;  
    var t = setTimeout(function() {
        demnguoc();
    }, 1000);
}
