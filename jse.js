console.clear()

// ----- Tableaux 'nextStep' -----
var nextPro = ['nbPersons1', 'nbPersons2'];
var nextNbPersons1 = 'pauseGourmande';
var nextNbPersons2 = 'menu';
var nextPauseGourmande = 'none';
var nextMenu = 'none';

// CLASS
function Step(idName, prevStep, formType, nextStep) {
  this.idName = idName;
  this.prevStep = prevStep;
  this.formType = formType; // 0 = Radiobouton  1 = Number
  this.nextStep = nextStep;

  this.prevStep = function() { //Etape Précédente
    if(prevStep != 'none') {
      this.hideBlockCSS();
      prevStep.showBlockCSS();
      activeStep = prevStep;
      step -= 1;
    }
  }

  this.nextStep = function() { //Etape Suivante
    if(nextStep != 'none') {
      var formValue = this.getValues();
      if (formType == 0) {
        formValue[0] = eval(nextStep[formValue[0]]);
        this.hideBlockCSS();
        formValue[0].showBlockCSS();
        activeStep = formValue[0];
        insertValuesTab(step, formValue[1]);
      } else if (formType == 1){
        var min = parseInt(document.getElementsByName(idName)[0].min);
        var max = parseInt(document.getElementsByName(idName)[0].max);
        if (formValue >= min && formValue <= max) {
          this.hideBlockCSS();
          insertValuesTab(step, formValue);
          formValue = eval(nextStep);
          formValue.showBlockCSS();
          activeStep = formValue;
        } else {
          alert("Entrez un nombre entre 8 et 60.");
          step -= 1;
        }
        
      }
      step += 1;
    }
  }

  this.getValues = function() { //Récupération des informations du formulaire
    var inputs;
    var formValue;
    if (formType == 0){
      inputs = document.getElementsByName(idName);
      inputsLength = inputs.length;
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue = [i ,inputs[i].value];
          return formValue;
        }
      }
    } else if (formType == 1) {
      formValue = document.getElementsByName(idName);
      formValue = formValue[0].value;
      return formValue;
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
var nbPersons1 = new Step('nbPersons', pro, 1, nextNbPersons1);
var nbPersons2 = new Step('nbPersons', pro, 1, nextNbPersons2);
var pauseGourmande = new Step('pauseGourmande', nbPersons1, 0, nextPauseGourmande);
var menu = new Step('menu', nbPersons2, 0, nextMenu);
// VARIABLES
var erreur = false;
var step = 0;
var activeStep = pro;
var valuesTab = new(Array);

//FONCTIONS
function next() {
  activeStep.nextStep();
}

function prev() {
  activeStep.prevStep();
}

function insertValuesTab(index, info) {
  valuesTab[index] = info;
  valuesTabLength = valuesTab.length;
  if (index < valuesTabLength - 1) {
    valuesTab.splice(1, valuesTabLength);
  }
  console.log(valuesTab);
}

function testScript1() {
  pro.hideBlockCSS();
}

function testScript2() {
  pro.showBlockCSS();
}
