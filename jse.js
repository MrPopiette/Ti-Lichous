console.clear()

// ----- Tableaux 'nextStep' -----
var nextPro = ['nbPersons1', 'nbPersons2']
var nextNbPersons1 = 'carteParticulier'
var nextNbPersons2 = 'cartePro'
// var nextCartePro = 'none';
// var nextCarteParticulier = 'none';
var nextCartePro = ['pauseGourmandeSucree', 'pauseGourmandeAperitive']
var nextCarteParticulier = ['lichouseries', 'menusCrepes']
var nextPauseGourmandeSucree = 'validation'
var nextPauseGourmandeAperitive = 'validation'
var nextLichouseries = 'validation'
var nextMenusCrepes = 'validation'
var nextValidation = 'none'

// CLASS
function Step (idName, prevStep, formType, nextStep) {
  this.idName = idName
  this.prevStep = prevStep
  this.formType = formType // 0 = Radiobouton  1 = Number  2 = Liste des produits  3 = Validation
  this.nextStep = nextStep

  this.prevStep = function () { // Etape Précédente
    if (prevStep != 'none') {
      this.hideBlockCSS()
      if (formType == 4) {
        preValidation.showBlockCSS()
        activeStep = preValidation
      } else {
        prevStep.showBlockCSS()
        activeStep = prevStep
      }
      step -= 1
    }
  }

  this.nextStep = function () { // Etape Suivante
    if (nextStep != 'none') {
      var formValue = this.getValues()
      if (formType == 0) {
        formValue[0] = eval(nextStep[formValue[0]])
        this.hideBlockCSS()
        formValue[0].showBlockCSS()
        activeStep = formValue[0]
        insertValuesTab(step, formValue[1])
      } else if (formType == 1) {
        var min = parseInt(document.getElementsByName(idName)[0].min)
        var max = parseInt(document.getElementsByName(idName)[0].max)
        if (formValue >= min && formValue <= max) {
          this.hideBlockCSS()
          insertValuesTab(step, formValue)
          formValue = eval(nextStep)
          formValue.showBlockCSS()
          activeStep = formValue
        } else {
          alert('Entrez un nombre entre 8 et 60.')
          step -= 1
        }
      } else if (formType == 2) { // 2 = Liste des produits PARTICULIERS
        insertValuesTab(step, 'Choix de la commande')
        this.hideBlockCSS()
        //insérer les valeurs
        var formValueLength = formValue.length
        var quantity = nbPersons
        for (var i = 0; i < formValueLength; i++) {
          insertProductTab(i, quantity, formValue[i])
        }
        console.log(productsTab)
        preValidation = activeStep
        eval(nextStep).showBlockCSS()
        activeStep = eval(nextStep)
      } else if (formType == 3) { // 3 = Liste des produits PROS
        insertValuesTab(step, 'Choix de la commande')
        this.hideBlockCSS()
        var index = 0
        var quantity = nbPersons
        insertProductTab(index, quantity, formValue)
        preValidation = activeStep
        eval(nextStep).showBlockCSS()
        activeStep = eval(nextStep)
      } else if (formtype == 4) { // Validation

      }
      step += 1
    }
  }

  this.getValues = function () { // Récupération des informations du formulaire
    var inputs
    var formValue
    if (formType == 0) {
      inputs = document.getElementsByName(idName)
      inputsLength = inputs.length
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue = [i,inputs[i].value]
        }
      }
    } else if (formType == 1) { // 1 = Number
      formValue = document.getElementsByName(idName)
      formValue = formValue[0].value
    } else if (formType == 2) { // 2 = Liste des produits PARTICULIERS
      inputs = document.getElementsByName(idName)
      inputsLength = inputs.length
      formValue = new (Array)
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue.push(inputs[i].value)
        }
        if (inputs[i].type === 'checkbox' && inputs[i].checked) {
          formValue.push(inputs[i].value)
        }
      }
    } else if (formType == 3) { // 3 = Liste des produits PROS (choix unique)
      inputs = document.getElementsByName(idName)
      inputsLength = inputs.length
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue = [inputs[i].value]
        }
      }
    }
    return formValue
  }

  this.showBlockCSS = function () {
    id = document.getElementById(idName)
    id.style.display = 'block'
  }

  this.hideBlockCSS = function () {
    id = document.getElementById(idName)
    id.style.display = 'none'
  }
}

// INSTANCES
var pro = new Step('pro', 'none', 0, nextPro)

var nbPersons1 = new Step('nbPersons1', pro, 1, nextNbPersons1)
var nbPersons2 = new Step('nbPersons2', pro, 1, nextNbPersons2)

var carteParticulier = new Step('carteParticulier', nbPersons1, 0, nextCarteParticulier)
var cartePro = new Step('cartePro', nbPersons2, 0, nextCartePro)

var lichouseries = new Step('lichouseries', carteParticulier, 2, nextLichouseries)
var menusCrepes = new Step('menusCrepes', carteParticulier, 2, nextMenusCrepes)
var pauseGourmandeSucree = new Step('pauseGourmandeSucree', cartePro, 2, nextPauseGourmandeSucree)
var pauseGourmandeAperitive = new Step('pauseGourmandeAperitive', cartePro, 2, nextPauseGourmandeAperitive)

var validation = new Step('validation', 'validation', 4, nextValidation)

// VARIABLES
var erreur = false
var step = 0
var activeStep = pro
var nbPersons
var category
var preValidation
var valuesTab = new (Array)
var productsTab = new (Array)
var formMail = new (Array)
var formText = new(Array)
var formTel = new(Array)


//FONCTIONS
function next () { // Etape suivante
  activeStep.nextStep()
}

function prev () { // Etape précédente
  activeStep.prevStep()
}

function insertValuesTab (index, info) {
  valuesTabLength = valuesTab.length
  if (index < valuesTabLength - 1) {
    valuesTab.splice(1, valuesTabLength)
  }
  valuesTab[index] = info
  displayList()
}

function displayList () {
  for (var i = 0; i <= 3; i++) {
    var id = 'list' + (i + 1)
    if (valuesTab[i] != null) {
      var listContent
      listContent = document.getElementById(id)
      id = document.getElementById(id)
      listContent.firstChild.data = valuesTab[i].charAt(0).toUpperCase() + valuesTab[i].substring(1).toLowerCase()
      id.style.display = 'block'
    } else {
      id = document.getElementById(id)
      id.style.display = 'none'
    }
  }
}

function validateForm () {
 
  // var x = document.forms["FormContact"][0 / 1 / 2 selon la position dans le form].value
  var formMail = document.forms["FormContact"]["fMail"].value
  var formText = document.forms["FormContact"]["fText"].value
  var formTel = document.forms["FormContact"]["fTel"].value
  console.log(formMail)
  console.log(formText)
  console.log(formTel)
  
}