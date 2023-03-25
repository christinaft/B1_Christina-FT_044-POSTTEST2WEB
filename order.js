const tombol = document.getElementById("pesan");
tombol.onclick = pesan;


function pesan(e){
    e.preventDefault();
    const nama = document.getElementById("name");
    const no = document.getElementById("number");
    const email = document.getElementById("email");
    const alamat = document.getElementById("address");
    const deliv = document.getElementById("deliv");

    sessionStorage.setItem("Name", nama.value);
    sessionStorage.setItem("Phone Number", no.value);
    sessionStorage.setItem("Email", email.value);
    sessionStorage.setItem("Address", alamat.value);
    sessionStorage.setItem("Delivery", deliv.value);

    alert("Order Accepted");
    window.location.href = "pesan.html";
}
