
do{
	var n = prompt(' nhập số n =');
}while( n <= 0);
var gt = 1;
var s=0;
for(var i = 1;i <= n;i++){
	gt = gt*i;
	s += i/gt;
}
document.write(s);
