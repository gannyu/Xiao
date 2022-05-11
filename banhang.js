var arrgia = document.getElementsByName('gia');
var mucgia = document.getElementById('mucgia');
mucdangchon = mucgia.value;
for (var i = 0; i < gia.length; i++) {
    gia = parseFloat(arrgia[i].innerText);
    if (gia < mucdangchon || mucdangchon==0) {
        arrgia[i].parentNode.style.display = "";
    } else {
        arrgia[i].parentNode.style.display = 'none';
    }
    
}

function tich(i){
    var arrSL = document.getElementsByName('soluong');
    arrSL[i].disabled =!arrSL[i].disabled;
    if(arrSL[i].disabled==true){
        arrSL[i].value=0;
        arrSL[i].parentNode.nextElementSibling.innerText='';
    }
    sum();
}
function thanhtien(obj){
    var soluong = obj.value;
    var gia = obj.parentNode.previousElementSibling.innerText;
    obj.parentNode.nextElementSibling.innerText=soluong*gia;
    sum();
}
function sum(){
    y=0;
    var arrthanhtien = document.getElementsByName('thanhtien');
    for(i=0;i<arrthanhtien.length;i++){
        if(arrthanhtien[i].parentNode.style.display==''){
       var tien=arrthanhtien[i].innerText;
        y+=Number(tien);
    }
    }
    document.getElementById('sum').innerText=y;
}