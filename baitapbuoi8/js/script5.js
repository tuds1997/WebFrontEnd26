do{
	var n = prompt(' Nhập n = ');
	n = parseInt(n);
}while(n < 0);
s=0;
for(var i = 1; i <= n ; i++){
	s = s +1/i;
}
document.write(s);