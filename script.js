//declaration of array
let form1 = Array.from(document.querySelectorAll(".form"));
let list = Array.from(document.querySelectorAll(".card rounded-3 mb-4"));
let moins = Array.from(document.querySelectorAll(".moins"));
let plus = Array.from(document.querySelectorAll(".plus"));
let coeur = Array.from(document.querySelectorAll("#heart"));
let prix = Array.from(document.querySelectorAll("#prix"));
let prixProduit = Array.from(document.querySelectorAll("#preis"));
let sommeTot = document.getElementById("form1");

//fonction plus
for (let i in plus) {
  plus[i].addEventListener("click", function () {
    form1[i].innerHTML++;
    somme();
  });
}

//fonction moins
for (let i in moins) {
  moins[i].addEventListener("click", function () {
    if (form1[i].innerHTML > 0) {
      form1[i].innerHTML--;
    }
    somme();
  });
}

//fonction somme des produits

function somme() {
  let s = 0;
  for (let i in prix) {
    prix[i].value =
      Number(prixProduit[i].textContent) * Number(form1[i].innerHTML);
    s += Number(prixProduit[i].textContent) * Number(form1[i].innerHTML);
    sommeTot.value = s;
  }
}
// fonction remove des produits
let rem = Array.from(document.querySelectorAll("#remove"));
for (let i in rem) {
  rem[i].addEventListener("click", function () {
    form1[i].innerHTML = 0;
    somme();
    rem[i].parentElement.parentElement.parentElement.remove();
  });
}

//changer couleur du coeur

for (let i in coeur) {
  coeur[i].addEventListener("click", function (c) {
    if (c.target.style.color !== "red") {
      c.target.style.color = "red";
    } else {
      c.target.style.color = "black";
    }
  });
}
