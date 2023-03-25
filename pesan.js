const loc_name = sessionStorage.getItem("Name");
const loc_no = sessionStorage.getItem("Phone Number");
const loc_mail = sessionStorage.getItem("Email");
const loc_alamat = sessionStorage.getItem("Address");
const loc_menu = sessionStorage.getItem("Menu");
const loc_pack = sessionStorage.getItem("Packaging");
const loc_deliv = sessionStorage.getItem("Delivery");

const tampil = document.getElementById("nam");
tampil.innerHTML = loc_name;
const tampil1 = document.getElementById("num");
tampil1.innerHTML = loc_no;
const tampil2 = document.getElementById("mail");
tampil2.innerHTML = loc_mail;
const tampil3 = document.getElementById("almt");
tampil3.innerHTML = loc_alamat;
const tampil6 = document.getElementById("dlv");
tampil6.innerHTML = loc_deliv;