let jumlah = 0;
let harga = 0;


function pilih(r,h){

jumlah=r;
harga=h;

document.getElementById("robux").value =
jumlah+" Robux";

document.getElementById("harga").value =
"Rp "+harga.toLocaleString();

}


function order(){

let user =
document.getElementById("username").value;

let wa =
document.getElementById("wa").value;


if(user=="" || wa==""){

alert("Isi username dan WhatsApp dulu");

return;

}


let pesan =
`Halo RRR7 RBLX⚡

Order Robux

Username:
${user}

Robux:
${jumlah}

Total:
Rp ${harga.toLocaleString()}

WA:
${wa}`;


window.open(
"https://wa.me/628xxxxxxxxxx?text="
+encodeURIComponent(pesan)
);

}
