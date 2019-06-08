var n = prompt('Nhập vào n = ');
n = parseInt(n);
do{
	var m = prompt('Nhập vào số m');
	m = parseInt(m);
}while(n > m)
var k = prompt('Nhập vào k = ');
k = parseInt(k);
var s=0;
for(var i=n;i<m;i++){
	if(i%k==0 ){
		s=s+i;
	}
}
document.write(s);