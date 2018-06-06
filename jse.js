
console.clear()

// VARIABLES
var erreur = false
var step = 0;
var activeStep = pro;
// ----- Tableaux 'formTab' -----
var nextPro = [Object(nbPersons1), Object(nbPersons2)];
// var nextPro = ['nbPersons1', 'nbPersons2'];
var nextNbPersons1 = 'pauseGourmande';
var nextNbPersons2 = 'menu';

// CLASS
function Step(idName, prevStep, formType, formTab) {
  this.idName = idName;
  this.prevStep = prevStep;
  this.formType = formType; // 0 = Radiobouton  1 = Slider
  this.formTab = formTab;

  this.prevStep = function() { //Etape Précédente
    if(prevStep != none) {
      this.hideBlockCSS();
      prevStep.showBlockCSS();
    }
  }

  this.nextStep = function() { //Etape Suivante
    this.hideBlockCSS();
    var info = this.getInfo();
    alert(info);
    info = formTab[info];
    console.log(info);
    Object(info).showBlockCSS();
    activeStep = info;
  }

  this.getInfo = function() {
    var inputs;
    if (formType == 0){
      inputs = document.getElementsByName(idName);
      inputsLength = inputs.length;
        for (var i = 0; i < inputsLength; i++) {
          if (inputs[i].type === 'radio' && inputs[i].checked) {
            return i;
          }
      }
    } else if (formType == 1) {
      //getter du form de type slider
    }
  }

  this.showBlockCSS = function () {
    id = document.getElementById(idName);
    id.style.display = 'block';
  }

  this.hideBlockCSS = function () {
    id = document.getElementById(idName);
    id.style.display = 'none';
  }
}

//INSTANCES
var pro = new Step('pro', 'none', 0, nextPro);
var nbPersons1 = new Step('nbPersons', 'pro', 0, nextNbPersons1);
var nbPersons2 = new Step('nbPersons', 'pro', 0, nextNbPersons2);

//FONCTIONS
function next() {
  pro.nextStep();
}

function testScript1() {
  pro.hideBlockCSS();
}

function testScript2() {
  pro.showBlockCSS();
}

//-------------------------------------------------------------------------------------------------------------------

function checkPro() {
  if (step == 0){
      pro.style.display = 'none';
      nbPersons.style.display = 'block';
      step = step + 1;
      var id = 0;
      var info = getPro();
      insertTab(id, info);
  } else {
    pro.style.display = 'block'
    nbPersons.style.display = 'none'
    step = step - 1
  }
}

function getPro () {
  var info
  var inputs = document.getElementsByName('pro')
  inputsLength = inputs.length
  for (var i = 0; i < inputsLength; i++) {
    if (inputs[i].type === 'radio' && inputs[i].checked) {
      info = String(inputs[i].value)
    }
  }
  return info
}

function insertTab (id, info) {
  stepTab.push(info)
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
    ChangeListMenu.firstChild.data = 'Repas'
  } else {
    console.log('Collation')
    TypeRepas = true
    ChangeListMenu.firstChild.data = 'Collation'
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
