document.write('<b>Các số chia hết cho 3 và 7 từ 1 > 100 :</b><br><br>');
var dem = 0;
for(var i=1;i<=100;i++){
	if(i%3==0 || i%7==0){
		dem++;
		document.write(i + ' ');
	}	
}
document.write('<br> có : ' + dem + ' số chia hết cho 3 và 7');