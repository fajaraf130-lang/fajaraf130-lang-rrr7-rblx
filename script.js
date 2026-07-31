let jumlah = "";
let harga = 0;


function pilih(r, h){

jumlah = r + " Robux";
harga = h;

document.getElementById("robux").value = jumlah;

document.getElementById("harga").value =
"Rp " + h.toLocaleString("id-ID");

}


function order(){

let username =
document.getElementById("username").value;

let wa =
document.getElementById("wa").value;


if(username=="" || wa=="" || jumlah==""){

alert("Lengkapi data terlebih dahulu");

return;

}


let nomorAdmin = "6287882922046";
// Ganti dengan nomor WhatsApp toko


let pesan = 
`RRR7 RBLX ORDER⚡

Username Roblox:
${username}

Jumlah:
${jumlah}

Harga:
Rp ${harga.toLocaleString("id-ID")}

Nomor Pembeli:
${wa}

Silahkan cek QRIS untuk pembayaran.`;


window.open(
"https://wa.me/"+nomorAdmin+
"?text="+encodeURIComponent(pesan)
);


}
