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
var myform = document.getElementById("myForm");

var preVaL = document.getElementById('preval'); 
var emailVaL = document.getElementById('emailval');
var nomVaL = document.getElementById('nomval'); 
var ddnVaL = document.getElementById('ddnval'); 
var quantityVal = document.getElementById('quantityval'); 
var locVal = document.getElementById('locval'); 
var termesVal = document.getElementById('termesval'); 

validation.addEventListener('click' ,f_valid);


var formDatanex = document.querySelectorAll(".formData");

//fonction qui verifie si l'adresse email est valide
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//fonction principale verifiant les données du formulaire
function f_valid(e){

  let results = [];
  //validation donnée prenom
  if (first.validity.valueMissing){
    e.preventDefault();
    preVaL.setAttribute('data-error-visible',true);
    preVaL.setAttribute('data-error','Vous devez saisir votre nom');
    results.push(false);
  }
  else {
    preVaL.removeAttribute('data-error-visible');
    results.push(true);
  }

  //validation donnée nom
  if (last.validity.valueMissing){
    e.preventDefault();
    nomVaL.setAttribute('data-error-visible',true);
    nomVaL.setAttribute('data-error','Vous devez saisir votre nom');
    results.push(false);
  }
  else {
    nomVaL.removeAttribute('data-error-visible');
    results.push(true);

  }

  
  //validation donnée email

    //adresse manquante
  if (email.validity.valueMissing){ 
    e.preventDefault();
    emailVaL.setAttribute('data-error-visible',true);
    emailVaL.setAttribute('data-error','Vous devez saisir votre adresse e-mail');
    email.focus(); 
    results.push(false);
}    

      //adresse non valide
  if (email.value.indexOf("@", 0) < 0)                 
  { 
    emailVaL.setAttribute('data-error-visible',true);
    emailVaL.setAttribute('data-error','Vous devez saisir une adresse e-mail valide');
      email.focus(); 
      results.push(false);
  }      else {
    emailVaL.removeAttribute('data-error-visible');
    results.push(true);

  }
  if (email.value.indexOf(".", 0) < 0)                 
  { 
    emailVaL.setAttribute('data-error-visible',true);
    emailVaL.setAttribute('data-error','Vous devez saisir une adresse e-mail valide');
      email.focus(); 
      results.push(false);
  }      else {
    emailVaL.removeAttribute('data-error-visible');
    results.push(true);

  }
  
//validation donnee date de naissance

if (birthdate.validity.valueMissing){
  e.preventDefault();
  ddnVaL.setAttribute('data-error-visible',true);
  ddnVaL.setAttribute('data-error','Vous devez saisir votre date de naissance');
  results.push(false);
}
else {
  ddnVaL.removeAttribute('data-error-visible');
  results.push(true);

}
  //validation donnee numerique tournoi


  if (quantity.validity.valueMissing){
    e.preventDefault();
    quantityVal.setAttribute('data-error-visible',true);
    quantityVal.setAttribute('data-error','Vous devez saisir une valeur numérique ');
    results.push(false);
  }
  else {
    quantityVal.removeAttribute('data-error-visible');
    results.push(true);
  }


  if (quantity.value >= 0 && quantity.value < 100){
    results.push(false);
    
} else {
  e.preventDefault();
  quantityVal.setAttribute('data-error-visible',true);
  quantityVal.setAttribute('data-error','Vous devez saisir une valeur numerique sup ou ég à');
  results.push(true);
}



//verifier qu'un bouton radio est au moins séléctionné
 
if(document.querySelector('input[name="location"]:checked') == null) {
  e.preventDefault();
  locVal.setAttribute('data-error-visible',true);
  locVal.setAttribute('data-error','Vous devez choisir une option');
  results.push(false);
}
else{
  locVal.removeAttribute('data-error-visible');
  results.push(true);
}

//verifier case à cocher conditions termes

if(document.getElementById("checkbox1").checked == false){
  e.preventDefault();
  termesVal.setAttribute('data-error-visible',true);
  termesVal.setAttribute('data-error','Vous devez accepter les termes');
  results.push(false);
}
else{
  termesVal.removeAttribute('data-error-visible');
  results.push(true);
}
}

results = [true, true, true, true, true, true,true,true,true];

if (result.every()) {
  // envoi le formulaire
  myform.submit();
}


validation.addEventListener('click', () => {

  const cont =document.getElementsByClassName('content');

  if (cont.display === 'none') {
    // 👇️ this SHOWS the form
    cont.display= 'none';
  } else {
    // 👇️ this HIDES the form
    cont.style.visibility = 'hidden';
  }
})



;