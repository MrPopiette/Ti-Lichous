console.clear()

// ----- Tableaux 'nextStep' -----
var nextPro = ['nbPersons1', 'nbPersons2'];
var nextNbPersons1 = 'carteParticulier';
var nextNbPersons2 = 'cartePro';
// var nextCartePro = 'none';
// var nextCarteParticulier = 'none';
var nextCartePro = ['pauseGourmandeSucree','pauseGourmandeAperitive'];
var nextCarteParticulier = ['lichouseries','menusCrepes'];
var nextPauseGourmandeSucree = 'validation';
var nextPauseGourmandeAperitive = 'validation';
var nextLichouseries = 'validation';
var nextMenusCrepes = 'validation';
var nextValidation = 'none';

// CLASS
function Step(idName, prevStep, formType, nextStep) {
  this.idName = idName;
  this.prevStep = prevStep;
  this.formType = formType; // 0 = Radiobouton  1 = Number  2/3 = Liste des produits  4 = Validation
  this.nextStep = nextStep;

  this.prevStep = function() { //Etape Précédente
    if(prevStep != 'none') {
      this.hideBlockCSS();
      if (formType == 4) {
        preValidation.showBlockCSS();
        activeStep = preValidation;
      } else {
        prevStep.showBlockCSS();
        activeStep = prevStep;
      }
      step -= 1;
    }
  }

  this.nextStep = function() { //Etape Suivante
    if(nextStep != 'none') {
      var formValue = this.getValues();
      if (formType == 0) { // 0 = Radiobouton
        formValue[0] = eval(nextStep[formValue[0]]);
        this.hideBlockCSS();
        formValue[0].showBlockCSS();
        activeStep = formValue[0];
        insertValuesTab(step, formValue[1]);
      } else if (formType == 1){ //1 = Number
        var min = parseInt(document.getElementsByName(idName)[0].min);
        var max = parseInt(document.getElementsByName(idName)[0].max);
        if (formValue >= min && formValue <= max) {
          this.hideBlockCSS();
          insertValuesTab(step, formValue);
          eval(nextStep).showBlockCSS();
          activeStep = eval(nextStep);
          nbPersons = formValue;
        } else {
          alert("Entrez un nombre entre 8 et 60.");
          step -= 1;
        }
      } else if (formType == 2){ //2 = Liste des produits PARTICULIERS
        insertValuesTab(step, 'Choix de la commande');
        this.hideBlockCSS();
        //insérer les valeurs
        var formValueLength = formValue.length;
        var quantity = nbPersons;
        EraseProductTab();
        for (var i = 0; i < formValueLength; i++) {
          insertProductTab(i, quantity, formValue[i])
        }
        preValidation = activeStep;
        eval(nextStep).showBlockCSS();
        activeStep = eval(nextStep);
        displayProducts();
      } else if (formType == 3){ //3 = Liste des produits PROS
        insertValuesTab(step, 'Choix de la commande');
        this.hideBlockCSS();
        var index = 0;
        var quantity = nbPersons;
        EraseProductTab();
        insertProductTab(index, quantity, formValue[0]);
        preValidation = activeStep;
        eval(nextStep).showBlockCSS();
        activeStep = eval(nextStep);
        displayProducts();
      } else if (formtype == 4){ //Validation
        
      }
      step += 1;
    }
  }

  this.getValues = function() { //Récupération des informations du formulaire
    var inputs;
    var formValue;
    if (formType == 0){ // 0 = Radiobouton
      inputs = document.getElementsByName(idName);
      inputsLength = inputs.length;
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue = [i ,inputs[i].value];
        }
      }
    } else if (formType == 1) { //1 = Number
      formValue = document.getElementsByName(idName);
      formValue = formValue[0].value;
    } else if (formType == 2) { //2 = Liste des produits PARTICULIERS
      inputs = document.getElementsByName(idName);
      inputsLength = inputs.length;
      formValue = new(Array);
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue.push(inputs[i].value);
        }
        if (inputs[i].type === 'checkbox' && inputs[i].checked) {
          formValue.push(inputs[i].value);
        }
      }
    } else if (formType == 3) { //3 = Liste des produits PROS (choix unique)
      inputs = document.getElementsByName(idName);
      inputsLength = inputs.length;
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
          formValue = [inputs[i].value];
        }
      }
    }
    return formValue;
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

var nbPersons1 = new Step('nbPersons1', pro, 1, nextNbPersons1);
var nbPersons2 = new Step('nbPersons2', pro, 1, nextNbPersons2);

var carteParticulier = new Step('carteParticulier', nbPersons1, 0, nextCarteParticulier);
var cartePro = new Step('cartePro', nbPersons2, 0, nextCartePro);

var lichouseries = new Step('lichouseries', carteParticulier, 2, nextLichouseries);
var menusCrepes = new Step('menusCrepes', carteParticulier, 2, nextMenusCrepes);
var pauseGourmandeSucree = new Step('pauseGourmandeSucree', cartePro, 3, nextPauseGourmandeSucree);
var pauseGourmandeAperitive = new Step('pauseGourmandeAperitive', cartePro, 3, nextPauseGourmandeAperitive);

var validation = new Step('validation', 'validation', 4, nextValidation);

// VARIABLES
var erreur = false;
var step = 0;
var activeStep = pro;
var nbPersons;
var category;
var preValidation;
var valuesTab = new(Array);
var productsTab = new(Array);

var list1 = [['Petit choux de blé noir garni',1,true],['Blini garni',1,true],['Mini-roulées de blé noir',15,true],['Tuiles',5,false],['Triskels au chocolat',3,false],['Truffes',6,false],['Meringues',3.5,false],['Kig ha farz',15,true],['Potée de pouldrezic (aux choux)',12,true],['Potée Guérandaise (fèves, lard, saucisses)',12,true],['Frigousse de bœuf',12,true],['Cotriade ou matelote',15,true],['Poulet au cidre',12,true],["Jambon à l'os (environ 30 pers.)","x",false],['Buffet de crêpes : peut-être accompagné de garnitures (sucre, confitures, ...)',"x",false]];
var list2 = [['1 galette blé noir_2 crêpes froment',12,true],['2 galette blé noir_2 crêpes froment',15,true],['Galettes blé noir à volonté_crêpes froment à volonté',20,true],['1 galette blé noir_1 crêpes froment',7,true],['Assortiment de lichouseries_2 galettes blé noir_Salade_2 crêpes froment',32,true]];
var list3 = [['Café, thé, jus de pommes ou raisins_Triskels au chocolat_Meringues',3.50,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat',4,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat_Crêpes roulées',6,true]];
var list4 = [['Cidre, vin blanc, jus de pommes_Assortiment de crêpes roulées salées',5,true],['Cidre, vin blanc, jus de raisins_Assortiment de lichouseries sucrées et salées',7,true]];
var productsList = [list1,list2,list3,list4];

//FONCTIONS
function next() { //Etape suivante
  activeStep.nextStep();
}

function prev() { // Etape précédente
  activeStep.prevStep();
}

function insertValuesTab(index, info) {
  valuesTabLength = valuesTab.length;
  if (index < valuesTabLength - 1) {
    valuesTab.splice(1, valuesTabLength);
  }
  valuesTab[index] = info;
  displayList();
}

function insertProductTab(index, quantity, info){
  productsTab[index] = [quantity, info];
}

function EraseProductTab(){
  productsTabLength = productsTab.length;
  productsTab.splice(0, valuesTabLength);
}

function displayList() {
  for(var i = 0; i <= 3; i++){
    var id = "list" + (i + 1);
    if(valuesTab[i] != null) {
      var listContent;
      listContent = document.getElementById(id);
      id = document.getElementById(id);
      listContent.firstChild.data = valuesTab[i].charAt(0).toUpperCase() + valuesTab[i].substring(1).toLowerCase();
      id.style.display = 'block';
    } else {
      id = document.getElementById(id);
      id.style.display = 'none';
    }
  }
}

function displayProducts(){
  productsTabLength = productsTab.length;
  var htmlString = "<ul>";
  var totalPrice = 0;
  var message;
  for(var i = 0; i < productsTabLength; i++) {
    var product = readProduct(productsTab[i][1]);
    productName = product[0].replace('_', '<br>');
    if(product[1]!="x"){
      productUnitPrice = product[1];
      if(product[2]==true){
        multiplier = nbPersons;
      } else {
        multiplier = 1;
      }
    } else {
      productUnitPrice = 0;
      multiplier = 1;
    }
    productTotalPrice = productUnitPrice * multiplier;
    totalPrice += productTotalPrice;
    if(product[2]== true){
      htmlString = htmlString + "<li><table class='tabProd'><td>" + productName + "</td><td>"+ productUnitPrice +"€</td><td>x" + multiplier + " pers.</td><td>" + productTotalPrice +"€</td></table></li>";
    } else if(product[2]== false && product[1]!="x"){
      htmlString = htmlString + "<li><table class='tabProd'><td>" + productName + "</td><td>"+ productUnitPrice +"€</td><td></td><td>" + productTotalPrice +"€</td></table></li>";
    } else {
      htmlString = htmlString + "<li><table class='tabProd'><td>" + productName + "</td></table></li>";
    }
  }
  document.getElementById("displayProducts").innerHTML = htmlString + "</ul>";
  document.getElementById("displayTotalPrice").innerHTML = "<p>" + totalPrice + "€</p>"; 
}

function readProduct(index){
  index = index.split(".");
  xIndex = parseInt(index[0]) - 1;
  yIndex = parseInt(index[1]) - 1;
  return productsList[xIndex][yIndex];
}