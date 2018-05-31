// alert("Tu dois valider l'alerte pour que le script se lance !");

/*
*
*   La seconde alerte ouvre une seconde boite de dialogue en arrière plan, proposant
*   d'empecher la diffusion d'autres alertes.
*
*   alert('Superposition ?');
*
*/

// =========================================================
console.log('Salutàtouslesamiscestdavidlafargepokemon!')
console.log('Marie la mante religieuse')
console.log('Hello in JS')
var a
a = 42.5364354
console.log(a)
a = Math.random()
console.log(a)
// ==========================================================

/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
*/

var test = false
console.clear()

// ======================================================================================
// Déclaration des variables selon leur fonction pour le projet Ti Lichous :

var TypePersonne = false
var TypeRepas = false
var Lichouseries = false
var MenuCrepes = false
var PauseGourmande = false
var NombrePersonnes = 0

// EVENEMENT PRO / RECEPTION //

// Pause gourmande sucrée
var NbrPauseGourmandeSucree1 = 0
var NbrPauseGourmandeSucree2 = 0
var NbrPauseGourmandeSucree3 = 0
// Pause gourmande salée
var NbrPauseGourmandeSalee1 = 0
var NbrPauseGourmandeSalee2 = 0
// Menu Crepes
var NbrMenuCrepesC1 = 0 // C = classique || P = prestige
var NbrMenuCrepesC2 = 0
var NbrMenuCrepesC3 = 0
var NbrMenuCrepesC4 = 0
var NbrMenuCrepesP1 = 0
// Boissons
var NbrBoissons1 = 0
var NbrBoissons2 = 0
var NbrBoissons3 = 0
var NbrBoissons4 = 0

// REPAS A EMPORTER //

// Selection Sucrée
var NbrSelectionSucree1 = 0
var NbrSelectionSucree2 = 0
var NbrSelectionSucree3 = 0
// Selection Salée
var NbrSelectionSalee = 0
var NbrSelectionSalee = 0
var NbrSelectionSalee = 0
// Autres plats
var NbrPlatsTypiques1 = 0
var NbrPlatsTypiques2 = 0
var NbrPlatsTypiques3 = 0
var NbrPlatsTypiques4 = 0
var NbrPlatsTypiques5 = 0
var NbrPlatsTypiques6 = 0
var NbrPlatsTypiques7 = 0 // Jambon à l'os, comment ça se passe ?
var NbrPlatsTypiques8 = 0 // Buffet de crepes

// VARIABLES AUTRES

var erreur = false
var step = 0;
var stepTab;

// ===================================================================================

/*
function ProOuParticulier
*/

/*Bloque le bouton Repas/Collation quand "Particulier" est sélectionné*/
// function ProOuParticulier () {
//   if (TypePersonne === true) {
//     console.log('Pro')
//     TypePersonne = false
//     document.getElementById('Menu').disabled = false
//   } else {
//     console.log('Particulier')
//     TypePersonne = true
//     document.getElementById('Menu').disabled = true
//   }
// };

/* Change l'état du bouton Professionnel/Particulier */
// function ChangeTextPro (Pro) {
//   var ChangePro = document.getElementById('Pro')
//   var ChangeListPro = document.getElementById('listPro')
//   if (ChangePro.value == 'Professionnel') {
//     ChangePro.value = 'Particulier'
//     ChangeListPro.firstChild.data = 'Particulier';
//   } else {
//     ChangePro.value = 'Professionnel'
//     ChangeListPro.firstChild.data = 'Professionnel';
//   }
// }

function checkPro() {
  if (step == 0){
      pro.style.display = 'none';
      nbPersons.style.display = 'block';
      step = step + 1;
      var id = 1;
      var info = getPro();
      alert(info);
      insertTab(id, 'Professionnel');
  } else if (step == 1){
      pro.style.display = 'block';
      nbPersons.style.display = 'none';
      step = step - 1;
  }
  // alert('End');
}

function getPro() {
  var info;
  var inputs = document.getElementsByName("pro");
  inputsLength = inputs.length;
  for (var i = 0; i < inputsLength; i++) {
    if (inputs[i].type === 'radio' && inputs[i].checked) {
        info = String(inputs[i]);
        alert(info);
    }
  }
  return info;
}

function insertTab(id, info) {
  stepTab.push('Professionnel');
}

/*
function ChoixNbrPersonnes
*/

function ChoixNbrPersonnes () {
  NombrePersonnes = document.getElementById('NbrPersonnes')
  if (!NombrePersonnes.checkValidity()) {
    document.getElementById('PersonneDevis').innerHTML = NombrePersonnes.validationMessage
  }
}

/*
function TypeMenu
*/

function TypeMenu () {
  var ChangeListMenu = document.getElementById('listMenu')
  if (TypeRepas === true) {
    console.log('Repas')
    TypeRepas = false
    ChangeListMenu.firstChild.data = 'Repas';
  } else {
    console.log('Collation')
    TypeRepas = true
    ChangeListMenu.firstChild.data = 'Collation';
  }
}

/*
function PauseGourmande
*/

function PauseGourmande () {
  if (PauseGourmande === true) {
    console.log('Salé')
    PauseGourmande = false
    document.getElementById('Sucré').disabled = false
  } else {
    console.log('Sucré')
    TypePersonne = true
    document.getElementById('Sucré').disabled = true
  }
};

function ChangeTextGourmande (Salé) {
  var ChangeGourmande = document.getElementById('Salé')
  if (ChangeGourmande.value == 'Salé') {
    ChangeGourmande.value = 'Sucré'
  } else {
    ChangeGourmande.value = 'Salé'
  }
}

/*
function MenuParticulier
*/

function MenuParticulier () {
  if (TypeMenu === true) {
    console.log('Menu Crepes')
    TypeMenu = false
    document.getElementById('Lichouseries').disabled = false
    document.getElementById('PlatsTypiques').disabled = false
    document.getElementById('Prestige').disabled = true
    document.getElementById('Classique').disabled = true
    document.getElementById('Boissons').disabled = true
  } else {
    console.log('A Emporter')
    TypeMenu = true
    document.getElementById('Prestige').disabled = false
    document.getElementById('Classique').disabled = false
    document.getElementById('Boissons').disabled = false
    document.getElementById('Lichouseries').disabled = true
    document.getElementById('PlatsTypiques').disabled = true
  }
};

function ChangeTextParticulier (MenuCrepes) {
  var ChangeParticulier = document.getElementById('MenuCrepes')
  if (ChangeParticulier.value == 'MenuCrepes') {
    ChangeParticulier.value = 'A Emporter'
  } else {
    ChangeParticulier.value = 'MenuCrepes'
  }
}