let jumlah = 0;
let harga = 0;


function order(){

let username =
document.getElementById("username").value;

let wa =
document.getElementById("wa").value;


if(username=="" || wa==""){

alert("Lengkapi data dulu");
return;

}


let id =
"RRR7-" + Date.now();


let data={

id:id,

username:username,

whatsapp:wa,

robux:jumlah,

harga:harga,

status:"Pending"

};


db.ref("orders/"+id)
.set(data);



alert(
"Order berhasil dibuat\nID Order: "
+id
);


}
