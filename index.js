// Buat JS
let totalcheckout = 0
let money = document.getElementById("currency");
money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImg = previewContainer.querySelector(".image-preview__image");
const previewText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener("change", function() {
  const file = inpFile.files[0];
  console.log(file);
  if(file) {
    const reader = new FileReader();
    previewText.style.display = "none";
    previewImg.style.display = "block";

    reader.addEventListener("load", function () {
      console.log(this);
      previewImg.setAttribute("src", this.result);
    })
    reader.readAsDataURL(file)
  } else {
    previewText.style.display = null;
    previewImg.style.display = null;
    previewImg.setAttribute("src", '');
  }
})

const newEntryBtn = document.getElementById('new_entry_submit')
newEntryBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const formbaru = document.getElementById('new_entry_form')
  formbaru.innerHTML = ""
  const tulisanbaru = document.getElementById('tulisan')
  tulisanbaru.innerText = "Thankyou for submitting. Your input will be reviewed by an Administrator"
})

const modal = document.getElementById("newentrybtn");
const btn = document.getElementById("new_entry");
const close = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let cardicon = document.querySelector("#card-icon")
let card = document.querySelector(".card")
let closecard = document.querySelector("#close-card")

//card open
cardicon.onclick = () =>{
    card.classList.add("active")
}

//card close
closecard.onclick = () =>{
    card.classList.remove("active")
}

if(document.ReadyState == 'Loading' ){
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready()
}

//making fucngtion

function ready(){
    var RemoveCardButtons = document.getElementsByClassName('card-remove')
    console.log(RemoveCardButtons)
    for(var i = 0 ; i< RemoveCardButtons.length ; i++){
        var button = RemoveCardButtons[i]
        button.addEventListener('click',RemoveCardItems)
    }
}
function RemoveCardItems(event){
var buttonclick = event.target
buttonclick.parentElement.remove()
// updatetotal()
totalcheckout = 0
money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
}

const pesan = document.getElementById("pesanan")
const pesan1 = document.getElementById("add-cart")
pesan1.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Angela")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan1.innerText = "Sudah Masuk Keranjang"
  pesan1.style.pointerEvents = "none";
})
const pesan2 = document.getElementById("add-cart2")
pesan2.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Rico")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 700.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 700000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan2.innerText = "Sudah Masuk Keranjang"
  pesan2.style.pointerEvents = "none";
})
const pesan3 = document.getElementById("add-cart3")
pesan3.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Koro")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 100.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 100000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan3.innerText = "Sudah Masuk Keranjang"
  pesan3.style.pointerEvents = "none";
})
const pesan4 = document.getElementById("add-cart4")
pesan4.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Koro")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 100.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 100000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan4.innerText = "Sudah Masuk Keranjang"
  pesan4.style.pointerEvents = "none";
})
const pesan5 = document.getElementById("add-cart5")
pesan5.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Titi")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 150.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 150000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan5.innerText = "Sudah Masuk Keranjang"
  pesan5.style.pointerEvents = "none";
})
const pesan6 = document.getElementById("add-cart6")
pesan6.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Chiko")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 6.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 6000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan6.innerText = "Sudah Masuk Keranjang"
  pesan6.style.pointerEvents = "none";
})
const pesan7 = document.getElementById("add-cart7")
pesan7.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Fanny")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.500.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1500000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan7.innerText = "Sudah Masuk Keranjang"
  pesan7.style.pointerEvents = "none";
})
const pesan8 = document.getElementById("add-cart8")
pesan8.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Goofy")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 14.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 14000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan8.innerText = "Sudah Masuk Keranjang"
  pesan8.style.pointerEvents = "none";
})
const pesan9 = document.getElementById("add-cart9")
pesan9.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Ruby")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.200.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1200000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan9.innerText = "Sudah Masuk Keranjang"
  pesan9.style.pointerEvents = "none";
})
const pesan10 = document.getElementById("add-cart10")
pesan10.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Bibul")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 250.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 250000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan10.innerText = "Sudah Masuk Keranjang"
  pesan10.style.pointerEvents = "none";
})
const pesan11 = document.getElementById("add-cart11")
pesan11.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Eja")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 700.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 700000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan11.innerText = "Sudah Masuk Keranjang"
  pesan11.style.pointerEvents = "none";
})
const pesan12 = document.getElementById("add-cart12")
pesan12.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Anwar")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.200.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1200000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan12.innerText = "Sudah Masuk Keranjang"
  pesan12.style.pointerEvents = "none";
})
const pesan13 = document.getElementById("add-cart13")
pesan13.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Ranggo")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.500.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1500000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan13.innerText = "Sudah Masuk Keranjang"
  pesan13.style.pointerEvents = "none";
})
const pesan14 = document.getElementById("add-cart14")
pesan14.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Siti")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.150.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1150000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan14.innerText = "Sudah Masuk Keranjang"
  pesan14.style.pointerEvents = "none";
})
const pesan15 = document.getElementById("add-cart15")
pesan15.addEventListener("click", function(e) {
  e.preventDefault()
  const node = document.createElement("div")
  const textnode = document.createTextNode("Dewa")
  node.appendChild(textnode)
  const node2 = document.createElement("div")
  const textnode2 = document.createTextNode("Rp. 1.000.000")
  node2.appendChild(textnode2)
  pesan.appendChild(node)
  pesan.appendChild(node2)
  totalcheckout += 1000000
  money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)
  pesan15.innerText = "Sudah Masuk Keranjang"
  pesan15.style.pointerEvents = "none";
})

const btnBuy = document.getElementById('btnbuy')
btnBuy.addEventListener("click", function (e) {
  e.preventDefault()
  modal.style.display = "block"
  const tulisanbaru = document.getElementById('tulisan')
  tulisanbaru.innerText = `You need to paid ${money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)}`
  var formcheckout = document.createElement("form"); 
    // Create an input element for Full Name
    var namainputbaru = document.createElement("input");
    namainputbaru.setAttribute("type", "text");
    namainputbaru.setAttribute("name", "FullName");
    namainputbaru.setAttribute("placeholder", "Adoptee Name");
    namainputbaru.setAttribute("id", "adoptee");
    //  // Create an input element for date of birth
    var dob = document.createElement("input");
    dob.setAttribute("type", "text");
    dob.setAttribute("name", "dob");
    dob.setAttribute("placeholder", "Address");
    //  // Create an input element for emailID
    var eid = document.createElement("input");
    eid.setAttribute("type", "text");
    eid.setAttribute("name", "emailID");
    eid.setAttribute("placeholder", "E-Mail ID");
    // // create a submit button
    var phone2 = document.createElement("input");
    phone2.setAttribute("type", "number");
    phone2.setAttribute("name", "hape");
    phone2.setAttribute("placeholder", "Phone Number");
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("id", "subsub");
    
    formcheckout.appendChild(namainputbaru);
    formcheckout.appendChild(document.createElement("br"));
    formcheckout.appendChild(dob);
    formcheckout.appendChild(document.createElement("br"));
    formcheckout.appendChild(eid);
    formcheckout.appendChild(phone2);
    formcheckout.appendChild(document.createElement("br"));
    // // Append the submit button to the formcheckout
    formcheckout.appendChild(s);
    const formbaru = document.getElementById('new_entry_form')
    formbaru.innerHTML = ""
    tulisanbaru.appendChild(formcheckout);

      var submitS = document.getElementById("subsub")
      submitS.addEventListener("click", function (ea) {
        ea.preventDefault()
        modal.style.display = "block"
        var namename = document.getElementById("adoptee")
        tulisanbaru.innerHTML = `Thank you, ${namename.value} for your caring.
        Your new friends will arrive in 2 - 3 days time.
        Please prepare to pay ${money.innerText = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalcheckout)}, that we only accept Cash On Delivery method.`
      })
})
