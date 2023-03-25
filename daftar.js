const tombol = document.getElementById("daftar");
tombol.onclick = daftar;


function daftar(e){
    e.preventDefault();
    const nama = document.getElementById("daf_nama");
    const email = document.getElementById("daf_email");
    const pass = document.getElementById("daf_pass");

    localStorage.setItem("Nama", nama.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", pass.value);

    alert("Berhasil Daftar");
    window.location.href = "index.html";
}