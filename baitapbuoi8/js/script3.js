function tinh_tong(n)
{
    var tong = 0;
    for(var i = 1;i<=n;i++){
    	tong += 1/i;
    }return tong;
}
var n = prompt("Nhập số cần tính tổng");
alert("Tổng dãy số tới n = " + n + " là: " + tinh_tong(n));
