document.write('<b>Các số chia hết cho 3 và 7 từ 1 > 100 :</b><br><br>');
for(var i=0;i<=100;i++){
	if(i%3==0 && i%7==0){
		document.write(i + '<br>')
	}
}