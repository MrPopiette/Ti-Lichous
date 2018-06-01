
console.clear()

// VARIABLES AUTRES

var erreur = false
var step = 0;
var stepTab = new Array();

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
      var id = 0;
      var info = getPro();
      insertTab(id, info);
  } else {
      pro.style.display = 'block';
      nbPersons.style.display = 'none';
      step = step - 1;
  }
}

function getPro() {
  var info;
  var inputs = document.getElementsByName("pro");
  inputsLength = inputs.length;
  for (var i = 0; i < inputsLength; i++) {
    if (inputs[i].type === 'radio' && inputs[i].checked) {
        info = String(inputs[i].value);
    }
  }
  return info;
}

function insertTab(id, info) {
  stepTab.push(info);
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