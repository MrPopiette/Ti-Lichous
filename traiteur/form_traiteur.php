<?php
require('PHPMailer/src/PHPMailer.php');
require('PHPMailer/src/SMTP.php');

 $FormLastName = $_POST['fLastName'];
 $FormFirstName = $_POST['fFirstName'];
 $FormTel = $_POST['fTel'];
 $FormMail = $_POST['fMail'];
 $FormText = $_POST['fText'];

 $nbPersons = $_POST['recapNbPersons'];
 $choiceTab = explode(',', $_POST['recapTab']);
 $pro = $_POST['recapPro'];
 $presta = $_POST['recapPresta'];
 $price = $_POST['recapPrice'];

$list1 = [['Petit choux de blé noir garni',1,true],['Blini garni',1,true],['Mini-roulées de blé noir',15,true],['Tuiles',5,false],['Triskels au chocolat',3,false],['Truffes',6,false],['Meringues',3.5,false],['Kig ha farz',15,true],['Potée de pouldrezic (aux choux)',12,true],['Potée Guérandaise (fèves, lard, saucisses)',12,true],['Frigousse de bœuf',12,true],['Cotriade ou matelote',15,true],['Poulet au cidre',12,true],["Jambon à l'os (environ 30 pers.)","x",false],['Buffet de crêpes : peut-être accompagné de garnitures (sucre, confitures, ...)',"x",false]];
$list2 = [['1 galette blé noir_2 crêpes froment',12,true],['2 galette blé noir_2 crêpes froment',15,true],['Galettes blé noir à volonté_crêpes froment à volonté',20,true],['1 galette blé noir_1 crêpes froment',7,true],['Assortiment de lichouseries_2 galettes blé noir_Salade_2 crêpes froment',32,true]];
$list3 = [['Café, thé, jus de pommes ou raisins_Triskels au chocolat_Meringues',3.50,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat',4,true],['Café, thé, jus de pommes ou raisins_Gâteau breton_Triskels au chocolat_Crêpes roulées',6,true]];
$list4 = [['Cidre, vin blanc, jus de pommes_Assortiment de crêpes roulées salées',5,true],['Cidre, vin blanc, jus de raisins_Assortiment de lichouseries sucrées et salées',7,true]];
$productsList = [$list1,$list2,$list3,$list4];

$choiceList = "";
$choiceTabLength = count($choiceTab);
for ($i=0; $i < $choiceTabLength; $i++){
  $choice = explode('.', $choiceTab[$i]);
  $choice = $productsList[$choice[0]-1][$choice[1]-1];
  $choiceName = $choice[0];
  $choiceName = str_replace('_', '<br>', $choiceName);
  var_dump($choiceName);
  $choicePrice = $choice[1];
  $choiceList = $choiceList. $choiceName. "<br>";
}
var_dump($choiceList);
$style = "<style>strong{color: #ec7404; font-size: medium;}</style>";
$userInfo = "<strong>Coordonnées client :</strong> <br><b>Nom : </b>". $FormLastName. "<br> <b>Prénom : </b>". $FormFirstName. "<br><b>Tel : </b>". strval($FormTel). "<br> <b>Email : </b>". $FormMail;
$command = "<br><br><strong>Commande : </strong><br><b>Situation : </b>". $pro. "<br><b>Nombre de personnes : </b>". $nbPersons. "  personnes<br><b>Prestation : </b>".$presta ."<br><b>Choix :</b><br>". $choiceList. "<br><b>Prix minimal estimé : </b>". $price. "€";
$text = "<br><br><strong>Précision(s) : </strong><br>". $FormText;
$message = $style. $userInfo. $command. $text;



$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP(); // enable SMTP

$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "tilichous.devis@gmail.com";
$mail->Password = "Epsi2018!";
$mail->SetFrom("benjamin.strabach@gmail.com");
$mail->Subject = "Devis en ligne : ". strtoupper($FormLastName). " ". $FormFirstName;
$mail->Body = $message;
$mail->AddAddress("benjamin.strabach@live.fr");
$mail->CharSet = 'UTF-8';

// Envoi du mail avec gestion des erreurs
if(!$mail->Send()) {
  echo 'Erreur : ' . $mail->ErrorInfo;
} else {
  echo 'Message envoyé !';
} 

?>