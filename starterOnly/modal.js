function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elemen
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModal.forEach((btn) => btn.addEventListener("click", closerModal));

// close modal form
function closerModal() {
  modalbg.style.display = "none";
}


//Recuperation des informations

var validation = document.getElementById('bouton_envoie');
var first = document.getElementById('first'); 
var last = document.getElementById('last'); 
var email = document.getElementById("email");
var quantity = document.getElementById("quantity");
var birthdate = document.getElementById("birthdate");
var radios = document.getElementsByName("location");
var terms = document.getElementById("checkbox1");


var prenom_m = document.getElementById('prenom_manquant');
var nom_m = document.getElementById('nom_manquant');
var email_m = document.getElementById('email_manquant');
var quantity_m = document.getElementById('nbtournoi_manquant');
var birthdate_m = document.getElementById('birthdate_manquant');
var radios_m = document.getElementById('radios_manquant');
var terms_m = document.getElementById('terms_manquant');

validation.addEventListener('click' ,f_valid);


//fonction qui verifie si l'adresse email est valide
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//fonction principale verifiant les données du formulaire
function f_valid(e){

  //validation donnée prenom
  if (first.validity.valueMissing){
    e.preventDefault();
    prenom_m.textContent = "le prenom est manquant";
    prenom_m.style.color = "red";
  }
  else{
    prenom_m.textContent = "";
  }

  

  //validation donnée nom
  if (last.validity.valueMissing){
    e.preventDefault();
    nom_m.textContent = "le nom est manquant";
    nom_m.style.color = "red";
  }
  else{
    nom_m.textContent = "";
  }

  
  //validation donnée email

    //adresse manquante
  if (email.value == ""){ 
    email_m.textContent="adresse manquante"; 
    email_m.style.color = "red";
      email.focus(); 
      return false; 
  }    

      //adresse non valide
  if (email.value.indexOf("@", 0) < 0)                 
  { 
    email_m.textContent="Mettez une adresse email valide."; 
    email_m.style.color = "red";
      email.focus(); 
      return false; 
  }    
  if (email.value.indexOf(".", 0) < 0)                 
  { 
    email_m.textContent="Mettez une adresse email valide."; 
    email_m.style.color = "red";
      email.focus(); 
      return false; 
  }    

  //validation donnee numerique tournoi

  if (quantity.value >= 0 && quantity.value < 100){
    quantity_m.textContent="";
} else {
  e.preventDefault();
  quantity_m.textContent="Veuillez entrer une valeur numérique ";
  quantity_m.style.color = "red";
}

//validation donnee date de naissance

if (birthdate.validity.valueMissing){
  e.preventDefault();
  birthdate_m.textContent = "Vous devez entrer votre date de naissance.";
  birthdate_m.style.color = "red";
}
else{
  birthdate_m.textContent = "";
}


//verifier qu'un bouton radio est au moins séléctionné
 
if(document.querySelector('input[name="location"]:checked') == null) {
  e.preventDefault();
  radios_m.textContent = "Vous devez choisir une option.";
  radios_m.style.color = "red";
}
else{
  radios_m.textContent = "";
}

//verifier case à cocher conditions termes

if(document.getElementById("checkbox1").checked == false){
  e.preventDefault();
  terms_m.textContent = "Vous devez accepter les termes.";
  terms_m.style.color = "red";
}
else{
  terms_m.textContent = "";
}
};