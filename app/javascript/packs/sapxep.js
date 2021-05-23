function SapXep(obj) {

    var a = document.getElementsByClassName("product");

    var i, j, m, n, t;
    var value = obj.value;
    if (value == "9") {

        for (i = 0; i < (a.length - 1); i++) {
            for (j = i + 1; j < a.length; j++) {
                
                m = a[i].querySelector("h4").innerHTML;
                n = a[j].querySelector("h4").innerHTML;


                if (m > n) {
                    t = a[i].innerHTML;
                    a[i].innerHTML = a[j].innerHTML;
                    a[j].innerHTML = t;
                }
            }
        }
    } else if(value == "1") {
        for (i = 0; i < (a.length - 1); i++) {
            for (j = i + 1; j < a.length; j++) {

                m = a[i].querySelector("h4").innerHTML;
                n = a[j].querySelector("h4").innerHTML;


                if (m < n) {
                    t = a[i].innerHTML;
                    a[i].innerHTML = a[j].innerHTML;
                    a[j].innerHTML = t;
                }
            }
        }
    }




}