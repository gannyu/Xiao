var masv = document.getElementById('masv');
var hoten = document.getElementById('hoten');
var email = document.getElementById('email');
var sex = document.getElementById('sex');
var hobby = document.getElementById('hobby');
var ND = document.getElementById("ND")
var qt = document.getElementById('qt')


var thongbao = document.getElementById('thongbao');
var thongba = document.getElementById('thongba');
var thongb = document.getElementById('thongb');
var thong = document.getElementById('thong');
var thon = document.getElementById('thon');
var tho = document.getElementById('tho');
var flag = true;

function validateForm() {
  if (masv.value == '') {
    thongbao.innerText = 'vui lòng nhập mã sinh viên';
    masv.style = 'background:yellow';
    masv.focus();
    flag = false;
  } else {
    thongbao.innerText = '';
    masv.style = 'background:white';

  }
  if (hoten.value == '') {
    thongba.innerText = 'vui lòng nhập họ tên!';
    hoten.style = 'background:yellow';
    hoten.focus();
    flag = false;
  } else {
    thongba.innerText = '';
    hoten.style = 'background:white';
  }
  if (email.value == '') {
    thongb.innerText = 'vui lòng nhập email!';
    email.style = 'background:yellow';
    email.focus();
    flag = false;
  }
  var req = /\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
  if (!req.test(email.value)) {
    thongb.innerText = 'sai đinh dạng email, nhập lại!';
    email.style = 'background:yellow';
    email.focus();
    flag = false;
  } else {
    thongb.innerText = '';
    email.style = 'background:white';
  }
  if (ND.value.length > 200) {
    tho.innerText = 'nhập chưa đủ ghi chú, mời nhập tiếp';
    ND.style = 'background:yellow';
    ND.focus();
    flag = false;
  } else {
    tho.innerText = '';
    ND.style = 'background:white';
  }

  if (thon.value = '0') {
    thon.innerText = 'vui lòng chọn quốc tịch!'
    qt.focus();
    flag = false;

  }
  return flag;


}

