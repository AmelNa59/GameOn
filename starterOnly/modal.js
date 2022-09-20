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

var validation = document.getElementById('Cest-parti');
var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById("email");
var quantity = document.getElementById("quantity");
var birthdate = document.getElementById("birthdate");
var radios = document.getElementsByName("location");
var terms = document.getElementById("checkbox1");
var myform = document.getElementById("myForm");


var preVaL = document.getElementById('preval');
var emailVaL = document.getElementById('emailval');
var nomVaL = document.getElementById('nomval');
var ddnVaL = document.getElementById('ddnval');
var quantityVal = document.getElementById('quantityval');
var locVal = document.getElementById('locval');
var termesVal = document.getElementById('termesval');

validation.addEventListener('click', f_valid);
//myform.addEventListener('submit', f_valid);

var formDatanex = document.querySelectorAll(".formData");

//fonction qui verifie si l'adresse email est valide
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
//fonction qui reinitialise les données du formulaire

function resetForm(){
  myform.reset();
}
//fonction principale verifiant les données du formulaire
function f_valid(e) {
 
  e.preventDefault();
//Regex qui exclue les chiffres et caractères speciaux pour le nom et prénom
  let myRegex =/^[a-zA-Z-\s]+$/;
  let results = [];

  //validation donnée prenom

//prenom inférieur à deux caractères
  if (first.value.length < 2 ) {
    e.preventDefault();
    preVaL.setAttribute('data-error-visible', true);
    preVaL.setAttribute('data-error', 'Vous devez saisir au moins deux caractères');
    results.push(false);

  }//prenom contenant caractères speciaux ou chiffres exclu
  else if (myRegex.test(first.value) == false){
    e.preventDefault();
    preVaL.setAttribute('data-error-visible', true);
    preVaL.setAttribute('data-error', 'Vous devez saisir au moins des lettres et tirets uniquements');
    results.push(false);
  }else{
    preVaL.removeAttribute('data-error-visible');
    results.push(true);
  }


  //validation donnée nom

  //nom inférieur à deux caractères
  if (last.value.length < 2 ) {
    e.preventDefault();
    nomVaL.setAttribute('data-error-visible', true);
    nomVaL.setAttribute('data-error', 'Vous devez saisir au moins deux caractères');
    results.push(false);
  }
  //nom contenant caractères speciaux ou chiffres exclu
  else if (myRegex.test(last.value) == false){
    e.preventDefault();
    nomVaL.setAttribute('data-error-visible', true);
    nomVaL.setAttribute('data-error', 'Vous devez saisir au moins des lettres et tirets uniquements');
    results.push(false);
  }else{
    nomVaL.removeAttribute('data-error-visible');
    results.push(true);
  }

  //validation donnée email

  //adresse mail manquante
  if (email.validity.valueMissing) {
    e.preventDefault();
    emailVaL.setAttribute('data-error-visible', true);
    emailVaL.setAttribute('data-error', 'Vous devez saisir votre adresse e-mail');
    email.focus();
    results.push(false);
  }

  //adresse mail non valide
  if (email.value.indexOf("@", 0) < 0) {
    emailVaL.setAttribute('data-error-visible', true);
    emailVaL.setAttribute('data-error', 'Vous devez saisir une adresse e-mail valide');
    email.focus();


  } else {
    emailVaL.removeAttribute('data-error-visible');



  }
  if (email.value.indexOf(".", 0) < 0) {
    emailVaL.setAttribute('data-error-visible', true);
    emailVaL.setAttribute('data-error', 'Vous devez saisir une adresse e-mail valide');
    email.focus();

  } else {
    emailVaL.removeAttribute('data-error-visible');
    results.push(true);

  }

  //validation donnee date de naissance

  if (birthdate.validity.valueMissing) {
    e.preventDefault();
    ddnVaL.setAttribute('data-error-visible', true);
    ddnVaL.setAttribute('data-error', 'Vous devez saisir votre date de naissance');
    results.push(false);
  }
  else {
    ddnVaL.removeAttribute('data-error-visible');
    results.push(true);

  }
  //validation donnee numerique tournoi

//La valeur ne doit pas être vide
  if (quantity.validity.valueMissing) {
    e.preventDefault();
    quantityVal.setAttribute('data-error-visible', true);
    quantityVal.setAttribute('data-error', 'Vous devez saisir une valeur numérique ');
    results.push(false);
  }
  else {
    quantityVal.removeAttribute('data-error-visible');
    results.push(true);
  }

//La valeur doit être compris entre 0 et 99
  if (quantity.value >= 0 && quantity.value < 100) {
    e.preventDefault();
    results.push(true);

  } else {
    e.preventDefault();
    quantityVal.setAttribute('data-error-visible', true);
    quantityVal.setAttribute('data-error', 'Vous devez saisir une valeur numerique sup ou ég à');
    results.push(false);
  }



  //verifier qu'un bouton radio est au moins séléctionné

  if (document.querySelector('input[name="location"]:checked') == null) {
    e.preventDefault();
    locVal.setAttribute('data-error-visible', true);
    locVal.setAttribute('data-error', 'Vous devez choisir une option');
    results.push(false);
  }
  else {
    locVal.removeAttribute('data-error-visible');
    results.push(true);
  }

  //verifier case à cocher conditions termes

  if (document.getElementById("checkbox1").checked == true) {
    termesVal.removeAttribute('data-error-visible');
    results.push(true);
  }
  else {
    termesVal.setAttribute('data-error-visible', true);
    termesVal.setAttribute('data-error', 'Vous devez accepter les termes');
    results.push(false);


  }
//si toutes les données sont vraies alors on envoie le formulaire, on le masque et on affiche un message de confirmation
  if (results.every(e => e)) {
    // envoi le formulaire
    masquerformulaire();
    affichermessage();


  }

  //me permet de controler les entrées avec la console
  console.log(results);

}
//masque le formulaire
function masquerformulaire() {

  const masquerform = document.getElementById("myForm").style.display = 'none';

}
//affiche le formulaire
function affichermessage() {

  const affichermsg = document.getElementById("modal");
  affichermsg.innerHTML = '<center><p>Merci pour</p></br><p>votre inscription</p> <button class="btn-submit btn-close " onclick="javascript:window.location.reload()" id="button-suscribe" >Fermer</button></center> ';
  affichermsg.style.maxWidth = "500px";
  affichermsg.style.height = "711px";
  affichermsg.style.paddingTop = "50%";
  affichermsg.style.fontSize = '28px';
  affichermsg.style.fontWeight = '300';
  affichermsg.style.lineHeight = "20px";
  affichermsg.style.fontFamily = 'DM Sans', 'Arial', 'Helvetica', 'sans-serif';
  affichermsg.style.fontStretch = '10px';

};

//Rafraichit le formulaire
resetForm();