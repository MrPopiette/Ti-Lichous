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

// ===================================================================================

/*
function ProOuParticulier
*/

function ProOuParticulier () {
  if (TypePersonne === true) {
    console.log('Pro')
    TypePersonne = false
    document.getElementById('Menu').disabled = false
  } else {
    console.log('Particulier')
    TypePersonne = true
    document.getElementById('Menu').disabled = true
  }
};

function ChangeTextPro (Pro) {
  var ChangePro = document.getElementById('Pro')
  if (ChangePro.firstChild.data == 'Pro') {
    ChangePro.firstChild.data = 'Particulier'
  } else {
    ChangePro.firstChild.data = 'Pro'
  }
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
  if (TypeRepas === true) {
    console.log('Repas')
    TypeRepas = false
  } else {
    console.log('Collation')
    TypeRepas = true
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
