function tinh_tong(n)
{
    var tong = 0;
    var a = 1;

    while (a <= n)
    {
        tong = tong + a;
        a++;
    }return tong;
}
var n = prompt("Nhập số cần tính tổng");
alert("Tổng số từ 1 tới n = " + n + " là: " + tinh_tong(n));
